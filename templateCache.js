// ============================================================================
// templateCache.js - 更新的模板緩存系統
// ============================================================================

class TemplateCache {
  constructor() {
    this.cache = new Map();
    this.metadata = new Map(); // 存儲緩存元數據
  }

  /**
   * 生成緩存鍵
   * 修改：為新系統優化，使用更短的哈希而不是完整的 JSON 字符串
   */
  generateCacheKey(compiledData) {
    if (typeof compiledData === "string") {
      // 簡單字符串鍵
      return compiledData;
    }

    if (compiledData && typeof compiledData === "object") {
      // 對於 AST 或複雜對象，生成簡短的哈希
      const jsonStr = JSON.stringify(compiledData);
      return this.simpleHash(jsonStr);
    }

    return String(compiledData);
  }

  /**
   * 簡單哈希函數（用於生成較短的緩存鍵）
   */
  simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // 轉換為 32 位整數
    }
    return `template_${Math.abs(hash).toString(36)}`;
  }

  /**
   * 獲取或創建模板
   * 修改：添加元數據支持和更好的錯誤處理
   */
  getOrCreate(compiledData, options, createTemplate) {
    const key = this.generateCacheKey(compiledData);

    if (this.cache.has(key)) {
      const cached = this.cache.get(key);
      const metadata = this.metadata.get(key);

      console.log(`♻️ 使用緩存模板: ${key}`);
      console.log(
        `📊 緩存創建時間: ${new Date(metadata?.createdAt).toLocaleTimeString()}`
      );

      return cached;
    }

    try {
      console.log(`🏗️ 創建新模板: ${key}`);

      const template = createTemplate(compiledData, options);

      // 存儲模板和元數據
      this.cache.set(key, template);
      this.metadata.set(key, {
        createdAt: Date.now(),
        lastAccessed: Date.now(),
        accessCount: 1,
        options: options, // 保存創建選項用於調試
      });

      console.log(`✅ 模板已緩存: ${key}`);

      return template;
    } catch (error) {
      console.error(`❌ 創建模板失敗: ${key}`, error);
      throw error;
    }
  }

  /**
   * 新增：直接設置緩存
   */
  set(key, template, metadata = {}) {
    this.cache.set(key, template);
    this.metadata.set(key, {
      createdAt: Date.now(),
      lastAccessed: Date.now(),
      accessCount: 1,
      ...metadata,
    });
  }

  /**
   * 新增：直接獲取緩存
   */
  get(key) {
    if (this.cache.has(key)) {
      // 更新訪問信息
      const metadata = this.metadata.get(key);
      if (metadata) {
        metadata.lastAccessed = Date.now();
        metadata.accessCount++;
      }

      return this.cache.get(key);
    }
    return null;
  }

  /**
   * 新增：檢查是否存在
   */
  has(key) {
    return this.cache.has(key);
  }

  /**
   * 新增：刪除特定緩存
   */
  delete(key) {
    const template = this.cache.get(key);

    // 清理模板實例
    if (template && template.cleanup) {
      template.cleanup();
    }

    const deleted = this.cache.delete(key);
    this.metadata.delete(key);

    if (deleted) {
      console.log(`🗑️ 已刪除緩存: ${key}`);
    }

    return deleted;
  }

  /**
   * 修改：清理所有緩存（添加清理邏輯）
   */
  clear() {
    console.log(`🧹 清理所有緩存，共 ${this.cache.size} 個項目`);

    // 清理所有模板實例
    for (const [key, template] of this.cache) {
      if (template && template.cleanup) {
        try {
          template.cleanup();
        } catch (error) {
          console.warn(`⚠️ 清理模板 ${key} 時出錯:`, error);
        }
      }
    }

    this.cache.clear();
    this.metadata.clear();

    console.log("✅ 緩存已清空");
  }

  /**
   * 修改：返回更詳細的統計信息
   */
  size() {
    return this.cache.size;
  }

  /**
   * 新增：獲取詳細統計信息
   */
  getStats() {
    const stats = {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
      metadata: {},
    };

    for (const [key, metadata] of this.metadata) {
      stats.metadata[key] = {
        ...metadata,
        createdAt: new Date(metadata.createdAt).toLocaleString(),
        lastAccessed: new Date(metadata.lastAccessed).toLocaleString(),
      };
    }

    return stats;
  }

  /**
   * 新增：清理舊的緩存項目（LRU 策略）
   */
  cleanup(maxAge = 5 * 60 * 1000, maxSize = 50) {
    // 5分鐘，最多50個
    const now = Date.now();
    const keysToDelete = [];

    // 根據年齡清理
    for (const [key, metadata] of this.metadata) {
      if (now - metadata.lastAccessed > maxAge) {
        keysToDelete.push(key);
      }
    }

    // 根據大小清理（保留最近訪問的）
    if (this.cache.size > maxSize) {
      const sortedByAccess = Array.from(this.metadata.entries())
        .sort((a, b) => a[1].lastAccessed - b[1].lastAccessed)
        .slice(0, this.cache.size - maxSize);

      keysToDelete.push(...sortedByAccess.map(([key]) => key));
    }

    // 執行清理
    const uniqueKeys = [...new Set(keysToDelete)];
    for (const key of uniqueKeys) {
      this.delete(key);
    }

    if (uniqueKeys.length > 0) {
      console.log(`🧹 自動清理了 ${uniqueKeys.length} 個過期緩存`);
    }

    return uniqueKeys.length;
  }

  /**
   * 新增：導出緩存信息（用於調試）
   */
  export() {
    const exported = {
      timestamp: new Date().toISOString(),
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
      metadata: Object.fromEntries(this.metadata),
    };

    return exported;
  }
}

const templateCache = new TemplateCache();

// 設置自動清理（每5分鐘清理一次過期緩存）
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    templateCache.cleanup();
  }, 5 * 60 * 1000);
}

export default templateCache;
