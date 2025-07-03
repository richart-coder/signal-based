import generateReactiveTemplate from "./src/generateReactiveTemplate.js";
import signal, { computed } from "./signal.js";

const cart = signal([
  {
    id: 1,
    name: "MacBook Pro 14吋",
    price: 65900,
    quantity: signal(1),
    category: "電腦",
    image: "https://via.placeholder.com/100x100?text=MacBook",
    inStock: signal(true),
    discount: 0.05,
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 36900,
    quantity: signal(2),
    category: "手機",
    image: "https://via.placeholder.com/100x100?text=iPhone",
    inStock: signal(true),
    discount: 0,
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 7490,
    quantity: signal(1),
    category: "配件",
    image: "https://via.placeholder.com/100x100?text=AirPods",
    inStock: signal(false),
    discount: 0.1,
  },
]);

const userInfo = signal({
  name: "張小明",
  email: "ming@example.com",
  phone: "0912-345-678",
  address: {
    city: "台北市",
    district: "信義區",
    street: "信義路五段7號",
    zipCode: "110",
  },
  memberLevel: "gold",
});

const couponCode = signal("");
const showCheckout = signal(false);
const selectedPayment = signal("credit-card");

const cartTotal = computed(() => {
  return cart().reduce((total, item) => {
    const discountedPrice = item.price * (1 - item.discount);
    return total + discountedPrice * item.quantity();
  }, 0);
});

const itemCount = computed(() => {
  return cart().reduce((count, item) => count + item.quantity(), 0);
});

const availableItems = computed(() => {
  return cart().filter((item) => item.inStock());
});

const unavailableItems = computed(() => {
  return cart().filter((item) => !item.inStock());
});

const memberDiscount = computed(() => {
  const level = userInfo().memberLevel;
  switch (level) {
    case "platinum":
      return 0.15;
    case "gold":
      return 0.1;
    case "silver":
      return 0.05;
    default:
      return 0;
  }
});

const shippingFee = computed(() => {
  const total = cartTotal();
  return total < 1000 && cart().length > 0 ? 100 : 0;
});

const couponDiscount = computed(() => {
  const code = couponCode();

  const safeCode = String(code || "")
    .trim()
    .toUpperCase();
  const coupons = {
    SAVE100: 100,
    WELCOME: 200,
    NEWBIE: 300,
  };
  return coupons[safeCode] || 0;
});

const finalTotal = computed(() => {
  const subtotal = cartTotal();
  const memberDiscountAmount = subtotal * memberDiscount();
  const couponDiscountAmount = couponDiscount();
  const shipping = shippingFee();

  return Math.max(
    0,
    subtotal - memberDiscountAmount - couponDiscountAmount + shipping
  );
});

const savings = computed(() => {
  const subtotal = cartTotal();
  const memberDiscountAmount = subtotal * memberDiscount();
  const couponDiscountAmount = couponDiscount();
  const freeShipping = shippingFee() === 0 ? 100 : 0;

  return memberDiscountAmount + couponDiscountAmount + freeShipping;
});

const isCartEmpty = computed(() => {
  return cart().length === 0;
});
const hasUnavailableItems = computed(() => unavailableItems().length > 0);

const handleIncreaseQuantity = (id) => {
  const item = cart().find((item) => item.id === id);
  item.quantity.set(item.quantity() + 1);
};

const handleDecreaseQuantity = (id) => {
  const item = cart().find((item) => item.id === id);
  item.quantity.set(item.quantity() - 1);
};

const handleRemoveItem = (id) => {
  cart.set(cart().filter((item) => item.id !== id));
};

const handleToggleStock = (id) => {
  const item = cart().find((item) => item.id === id);
  if (item) {
    item.inStock.set(!item.inStock());
  }
};

const handleApplyCoupon = () => {
  const code = couponCode().trim().toUpperCase();

  const validCoupons = ["SAVE100", "WELCOME", "NEWBIE"];
  if (validCoupons.includes(code)) {
    console.log(`✅ 优惠券 ${code} 已应用`);
  } else {
    console.log("❌ 无效的优惠券代码");
  }
};

const handleClearCoupon = () => {
  couponCode.set("");
};

const handleUpdateAddress = (field, value) => {
  userInfo.set({
    ...userInfo(),
    address: {
      ...userInfo().address,
      [field]: value,
    },
  });
};

const handleUpdateUserInfo = (field, value) => {
  userInfo.set({
    ...userInfo(),
    [field]: value,
  });
};

const handleCheckout = () => {
  showCheckout.set(true);
};

const handleCloseCheckout = () => {
  showCheckout.set(false);
};

const handlePaymentChange = (event) => {
  selectedPayment.set(event.target.value);
};

const handleCouponInput = (value) => {
  const actualValue =
    typeof value === "object" && value?.target ? value.target.value : value;

  couponCode.set(actualValue);
};

const getMemberLevelText = (level) => {
  const levels = {
    bronze: "銅牌會員",
    silver: "銀牌會員",
    gold: "金牌會員",
    platinum: "白金會員",
  };
  return levels[level] || level;
};

const getMemberLevelColor = (level) => {
  const colors = {
    bronze: "#cd7f32",
    silver: "#c0c0c0",
    gold: "#ffd700",
    platinum: "#e5e4e2",
  };
  return colors[level] || "#6b7280";
};

const demoCartFeatures = () => {
  setTimeout(() => {
    handleIncreaseQuantity(1);
  }, 1000);

  setTimeout(() => {
    handleToggleStock(3);
  }, 2000);

  setTimeout(() => {
    couponCode.set("WELCOME");
  }, 3000);

  setTimeout(() => {
    handleUpdateUserInfo("memberLevel", "platinum");
  }, 4000);
};

const addRandomItem = () => {
  const newItem = {
    id: Date.now(),
    name: `随机商品 ${Math.floor(Math.random() * 1000)}`,
    price: Math.floor(Math.random() * 10000) + 1000,
    quantity: signal(1),
    category: "随机",
    image: "https://via.placeholder.com/100x100?text=Random",
    inStock: signal(Math.random() > 0.3),
    discount: Math.random() * 0.2,
  };

  cart.set([...cart(), newItem]);
};

const context = {
  cart,
  userInfo,
  couponCode,
  showCheckout,
  selectedPayment,

  cartTotal,
  itemCount,
  availableItems,
  unavailableItems,
  memberDiscount,
  shippingFee,
  couponDiscount,
  finalTotal,
  savings,
  isCartEmpty,
  hasUnavailableItems,

  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleRemoveItem,
  handleToggleStock,
  handleApplyCoupon,
  handleClearCoupon,
  handleUpdateAddress,
  handleUpdateUserInfo,
  handleCheckout,
  handleCloseCheckout,
  handlePaymentChange,
  handleCouponInput,

  getMemberLevelText,
  getMemberLevelColor,

  demoCartFeatures,
  addRandomItem,
};

async function loadAndMount() {
  const { jsxAST } = await import(`./compiled-template.js?t=${Date.now()}`);
  const reactiveTemplate = generateReactiveTemplate(jsxAST, context);

  const app = document.getElementById("app");

  reactiveTemplate.mount(app);

  window.context = context;
  window.signal = signal;
}
loadAndMount();
