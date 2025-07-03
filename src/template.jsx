<div style="max-width: 1200px; margin: 0 auto; padding: 24px; background-color: #f3f4f6; min-height: 100vh;">
  <div style="display: grid; grid-template-columns: 1fr 400px; gap: 24px;">
    <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 24px;">
      <header style="margin-bottom: 24px; border-bottom: 1px solid #e5e7eb; padding-bottom: 16px;">
        <h1 style="font-size: 28px; font-weight: bold; color: #111827; margin-bottom: 8px;">
          🛒 購物車
        </h1>
        <div style="display: flex; align-items: center; gap: 24px; font-size: 14px; color: #6b7280;">
          <span>📦 共 {itemCount} 件商品</span>
          <span>💰 小計: {cartTotal}</span>
          {savings > 0 && (
            <span style="color: #059669; font-weight: 600;">
              💸 已省 {savings}
            </span>
          )}
        </div>
      </header>

      {isCartEmpty ? (
        <div style="text-align: center; padding: 48px; color: #6b7280;">
          <div style="font-size: 48px; margin-bottom: 16px;">🛍️</div>
          <p style="font-size: 20px; margin-bottom: 8px;">購物車是空的</p>
          <p style="font-size: 14px;">快去選購您喜歡的商品吧！</p>
          <button
            style="margin-top: 16px; padding: 12px 24px; background-color: #2563eb; color: white; border-radius: 8px; border: none; cursor: pointer; font-size: 16px;"
            onClick={addRandomItem}
          >
            🎲 新增隨機商品
          </button>
        </div>
      ) : (
        <div>
          {hasUnavailableItems && (
            <div style="background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <div style="display: flex; align-items: center; gap: 8px; color: #92400e;">
                <span style="font-size: 20px;">⚠️</span>
                <span style="font-weight: 600;">
                  注意：有 {unavailableItems.length} 件商品目前缺貨
                </span>
              </div>
            </div>
          )}

          <div style="display: flex; flex-direction: column; gap: 16px;">
            {cart.map((item) => (
              <div
                key={item.id}
                style={`border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; background-color: ${
                  item.inStock ? "white" : "#fef2f2"
                }; opacity: ${item.inStock ? 1 : 0.7};`}
              >
                <div style="display: flex; gap: 16px;">
                  <img
                    src={item.image}
                    alt={item.name}
                    style="width: 100px; height: 100px; object-fit: cover; border-radius: 8px; background-color: #f3f4f6;"
                  />

                  <div style="flex: 1;">
                    <div style="display: flex; justify-content: between; align-items: start; margin-bottom: 8px;">
                      <div>
                        <h3 style="font-size: 18px; font-weight: 600; color: #111827; margin-bottom: 4px;">
                          {item.name}
                        </h3>
                        <span style="font-size: 12px; background-color: #e5e7eb; color: #6b7280; padding: 2px 8px; border-radius: 12px;">
                          {item.category}
                        </span>
                      </div>

                      <button
                        style={`padding: 4px 12px; font-size: 12px; border: none; border-radius: 16px; cursor: pointer; ${
                          item.inStock
                            ? "background-color: #d1fae5; color: #065f46;"
                            : "background-color: #fee2e2; color: #991b1b;"
                        }`}
                        onClick={() => handleToggleStock(item.id)}
                      >
                        {item.inStock ? "✅ 有庫存" : "❌ 缺貨"}
                      </button>
                    </div>

                    <div style="margin-bottom: 16px;">
                      <div style="display: flex; align-items: center; gap: 12px;">
                        {item.discount > 0 ? (
                          <div>
                            <span style="font-size: 18px; font-weight: 600; color: #dc2626;">
                              {item.price * (1 - item.discount)}
                            </span>
                            <span style="font-size: 14px; color: #6b7280; text-decoration: line-through; margin-left: 8px;">
                              {item.price}
                            </span>
                            <span style="font-size: 12px; background-color: #dc2626; color: white; padding: 2px 6px; border-radius: 4px; margin-left: 8px;">
                              -{Math.round(item.discount * 100)}%
                            </span>
                          </div>
                        ) : (
                          <span style="font-size: 18px; font-weight: 600; color: #111827;">
                            {item.price}
                          </span>
                        )}
                      </div>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center;">
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="font-size: 14px; color: #6b7280;">
                          數量:
                        </span>
                        <div style="display: flex; align-items: center; border: 1px solid #d1d5db; border-radius: 8px;">
                          <button
                            style="padding: 8px 12px; background: none; border: none; cursor: pointer; color: #6b7280;"
                            onClick={() => handleDecreaseQuantity(item.id)}
                            disabled={!item.inStock || item.quantity <= 1}
                          >
                            −
                          </button>
                          <span style="padding: 8px 16px; min-width: 60px; text-align: center; font-weight: 600;">
                            {item.quantity}
                          </span>
                          <button
                            style="padding: 8px 12px; background: none; border: none; cursor: pointer; color: #6b7280;"
                            onClick={() => handleIncreaseQuantity(item.id)}
                            disabled={!item.inStock}
                          >
                            +
                          </button>
                        </div>
                        <span style="font-size: 18px; font-weight: 600; color: #111827;">
                          = {item.price * (1 - item.discount) * item.quantity}
                        </span>
                      </div>

                      <button
                        style="padding: 8px 16px; background-color: #dc2626; color: white; border-radius: 8px; border: none; cursor: pointer; font-size: 14px;"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        🗑️ 移除
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style="margin-top: 24px; display: flex; gap: 12px;">
            <button
              style="padding: 12px 24px; background-color: #059669; color: white; border-radius: 8px; border: none; cursor: pointer; font-size: 16px;"
              onClick={addRandomItem}
            >
              ➕ 新增商品
            </button>
            <button
              style="padding: 12px 24px; background-color: #7c3aed; color: white; border-radius: 8px; border: none; cursor: pointer; font-size: 16px;"
              onClick={demoCartFeatures}
            >
              ✨ 示範功能
            </button>
          </div>
        </div>
      )}
    </div>

    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 20px;">
        <h2 style="font-size: 20px; font-weight: 600; color: #111827; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          👤 會員資訊
          <span
            style={`font-size: 12px; padding: 2px 8px; border-radius: 12px; color: white; background-color: ${getMemberLevelColor(
              userInfo.memberLevel
            )};`}
          >
            {getMemberLevelText(userInfo.memberLevel)}
          </span>
        </h2>

        <div style="space-y: 12px;">
          <div>
            <label style="display: block; font-size: 12px; color: #6b7280; margin-bottom: 4px;">
              姓名
            </label>
            <input
              type="text"
              value={userInfo.name}
              style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px;"
              onInput={(e) => handleUpdateUserInfo("name", e.target.value)}
            />
          </div>

          <div style="margin-top: 12px;">
            <label style="display: block; font-size: 12px; color: #6b7280; margin-bottom: 4px;">
              城市
            </label>
            <input
              type="text"
              value={userInfo.address.city}
              style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px;"
              onInput={(e) => handleUpdateAddress("city", e.target.value)}
            />
          </div>

          <div style="margin-top: 12px;">
            <label style="display: block; font-size: 12px; color: #6b7280; margin-bottom: 4px;">
              區域
            </label>
            <input
              type="text"
              value={userInfo.address.district}
              style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px;"
              onInput={(e) => handleUpdateAddress("district", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 20px;">
        <h3 style="font-size: 18px; font-weight: 600; color: #111827; margin-bottom: 12px;">
          🎫 優惠券
        </h3>
        <div style="display: flex; gap: 8px;">
          <input
            type="text"
            placeholder="輸入優惠券代碼"
            value={couponCode}
            style="flex: 1; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px;"
            onInput={handleCouponInput}
          />
          <button
            style="padding: 8px 12px; background-color: #2563eb; color: white; border-radius: 6px; border: none; cursor: pointer; font-size: 14px;"
            onClick={handleApplyCoupon}
          >
            套用
          </button>
        </div>
        {couponDiscount > 0 && (
          <div style="margin-top: 8px; padding: 8px; background-color: #d1fae5; border-radius: 6px; font-size: 12px; color: #065f46;">
            ✅ 優惠券已套用，折扣 {couponDiscount}
            <button
              style="margin-left: 8px; background: none; border: none; color: #dc2626; cursor: pointer;"
              onClick={handleClearCoupon}
            >
              ❌
            </button>
          </div>
        )}
        <div style="margin-top: 8px; font-size: 12px; color: #6b7280;">
          可用代碼: SAVE100, WELCOME, NEWBIE
        </div>
      </div>

      <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 20px;">
        <h3 style="font-size: 18px; font-weight: 600; color: #111827; margin-bottom: 16px;">
          💰 費用明細
        </h3>

        <div style="space-y: 8px; font-size: 14px;">
          <div style="display: flex; justify-content: space-between;">
            <span style="color: #6b7280;">小計</span>
            <span>{cartTotal}</span>
          </div>

          {memberDiscount > 0 && (
            <div style="display: flex; justify-content: space-between; color: #059669;">
              <span>會員折扣 ({Math.round(memberDiscount * 100)}%)</span>
              <span>-{cartTotal * memberDiscount}</span>
            </div>
          )}

          {couponDiscount > 0 && (
            <div style="display: flex; justify-content: space-between; color: #059669;">
              <span>優惠券折扣</span>
              <span>-{couponDiscount}</span>
            </div>
          )}

          <div style="display: flex; justify-content: space-between;">
            <span style="color: #6b7280;">
              運費 {shippingFee === 0 && "(免運)"}
            </span>
            <span style={shippingFee === 0 ? "color: #059669;" : ""}>
              {shippingFee === 0 ? "免費" : shippingFee}
            </span>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 8px; margin-top: 8px;">
            <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: 600;">
              <span>總計</span>
              <span style="color: #dc2626;">{finalTotal}</span>
            </div>
          </div>
        </div>

        <button
          style={`width: 100%; margin-top: 20px; padding: 16px; font-size: 16px; font-weight: 600; border: none; border-radius: 8px; cursor: pointer; ${
            isCartEmpty || availableItems.length === 0
              ? "background-color: #d1d5db; color: #6b7280;"
              : "background-color: #dc2626; color: white;"
          }`}
          onClick={handleCheckout}
          disabled={isCartEmpty || availableItems.length === 0}
        >
          {isCartEmpty
            ? "購物車是空的"
            : availableItems.length === 0
            ? "無可購買商品"
            : `🛒 結帳 ${finalTotal}`}
        </button>

        {!isCartEmpty && (
          <div style="margin-top: 12px; text-align: center; font-size: 12px; color: #6b7280;">
            {shippingFee > 0 && <p>💡 滿 1000 即可享免運費</p>}
            <p>🔒 安全加密結帳</p>
          </div>
        )}
      </div>
    </div>
  </div>

  {showCheckout && (
    <div style="position: fixed; inset: 0; background-color: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 50;">
      <div style="background-color: white; border-radius: 12px; padding: 32px; max-width: 500px; width: 90%; max-height: 80vh; overflow-y: auto;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
          <h2 style="font-size: 24px; font-weight: bold; color: #111827;">
            💳 結帳
          </h2>
          <button
            style="padding: 8px; background: none; border: none; font-size: 24px; cursor: pointer; color: #6b7280;"
            onClick={handleCloseCheckout}
          >
            ✕
          </button>
        </div>

        <div style="margin-bottom: 24px;">
          <h3 style="font-size: 18px; font-weight: 600; color: #111827; margin-bottom: 12px;">
            付款方式
          </h3>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <label style="display: flex; align-items: center; gap: 8px; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; cursor: pointer;">
              <input
                type="radio"
                name="payment"
                value="credit-card"
                checked={selectedPayment === "credit-card"}
                onChange={handlePaymentChange}
              />
              <span>💳 信用卡</span>
            </label>
            <label style="display: flex; align-items: center; gap: 8px; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; cursor: pointer;">
              <input
                type="radio"
                name="payment"
                value="bank-transfer"
                checked={selectedPayment === "bank-transfer"}
                onChange={handlePaymentChange}
              />
              <span>🏦 銀行轉帳</span>
            </label>
            <label style="display: flex; align-items: center; gap: 8px; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; cursor: pointer;">
              <input
                type="radio"
                name="payment"
                value="cash-on-delivery"
                checked={selectedPayment === "cash-on-delivery"}
                onChange={handlePaymentChange}
              />
              <span>💰 貨到付款</span>
            </label>
          </div>
        </div>

        <div style="margin-bottom: 24px;">
          <h3 style="font-size: 18px; font-weight: 600; color: #111827; margin-bottom: 12px;">
            配送地址
          </h3>
          <div style="padding: 16px; background-color: #f9fafb; border-radius: 8px; font-size: 14px;">
            <p style="margin-bottom: 4px; font-weight: 600;">{userInfo.name}</p>
            <p style="color: #6b7280;">
              {userInfo.address.zipCode} {userInfo.address.city}{" "}
              {userInfo.address.district}
            </p>
            <p style="color: #6b7280;">{userInfo.address.street}</p>
            <p style="margin-top: 8px; color: #6b7280;">📞 {userInfo.phone}</p>
          </div>
        </div>

        <div style="margin-bottom: 24px;">
          <h3 style="font-size: 18px; font-weight: 600; color: #111827; margin-bottom: 12px;">
            訂單摘要
          </h3>
          <div style="max-height: 200px; overflow-y: auto; border: 1px solid #e5e7eb; border-radius: 8px;">
            {availableItems.map((item) => (
              <div
                key={item.id}
                style="padding: 12px; border-bottom: 1px solid #f3f4f6; display: flex; justify-content: space-between; align-items: center;"
              >
                <div style="flex: 1;">
                  <span style="font-size: 14px; font-weight: 500;">
                    {item.name}
                  </span>
                  <span style="font-size: 12px; color: #6b7280; margin-left: 8px;">
                    × {item.quantity}
                  </span>
                </div>
                <span style="font-size: 14px; font-weight: 600;">
                  {item.price * (1 - item.discount) * item.quantity}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style="border-top: 2px solid #e5e7eb; padding-top: 16px; margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; font-size: 20px; font-weight: bold;">
            <span>總金額</span>
            <span style="color: #dc2626;">{finalTotal}</span>
          </div>
          {savings > 0 && (
            <div style="text-align: right; font-size: 14px; color: #059669; margin-top: 4px;">
              您省了 {savings}！
            </div>
          )}
        </div>

        <div style="display: flex; gap: 12px;">
          <button
            style="flex: 1; padding: 16px; background-color: #6b7280; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600;"
            onClick={handleCloseCheckout}
          >
            取消
          </button>
          <button
            style="flex: 2; padding: 16px; background-color: #dc2626; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600;"
            onClick={handleCloseCheckout}
          >
            確認付款 {finalTotal}
          </button>
        </div>
      </div>
    </div>
  )}

  <div style="position: fixed; bottom: 16px; right: 16px; background-color: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); padding: 16px; font-size: 12px; max-width: 300px;">
    <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 8px; color: #111827;">
      🔧 調試資訊
    </h4>
    <div style="color: #6b7280; line-height: 1.4;">
      <p>商品數量: {itemCount}</p>
      <p>可購買: {availableItems.length} 件</p>
      <p>缺貨: {unavailableItems.length} 件</p>
      <p>會員等級: {getMemberLevelText(userInfo.memberLevel)}</p>
      <p>會員折扣: {Math.round(memberDiscount * 100)}%</p>
      <p>優惠券: {couponDiscount > 0 ? couponDiscount : "無"}</p>
      <p>運費: {shippingFee === 0 ? "免費" : shippingFee}</p>
    </div>
  </div>
</div>;
