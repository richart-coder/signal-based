class TemplateCache {
  constructor() {
    this.cache = new Map();
  }

  generateCacheKey(compiledTemplate) {
    return JSON.stringify(compiledTemplate);
  }

  getOrCreate(compiledTemplate, options, createTemplate) {
    const key = this.generateCacheKey(compiledTemplate);

    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    const template = createTemplate(compiledTemplate, options);
    this.cache.set(key, template);

    return template;
  }

  clear() {
    this.cache.clear();
  }

  size() {
    return this.cache.size;
  }
}

const templateCache = new TemplateCache();

export default templateCache;
