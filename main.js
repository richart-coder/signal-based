import generateReactiveTemplate from "./src/generateReactiveTemplate.js";
import signal, { computed } from "./signal.js";

// 狀態
const volumeRatio = signal(0.847);
const price = signal(1234.56);
const temperature = signal(25.7);
const userName = signal("john_doe");
const tempUnit = signal("C");

// 簡化的 Pipe 函數
const percent = (value) => `${(value * 100).toFixed(2)}%`;
const formatCurrency = (value) => `$${value.toFixed(2)}`;
const addSymbol = (str) => `💰 ${str}`;
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const addPrefix = (str) => `用戶: ${str}`;
const formatUser = (str) => str.replace(/_/g, " ");

// 溫度函數
const celsius = (temp) => `${temp.toFixed(1)}°C`;
const fahrenheit = (temp) => `${temp.toFixed(1)}°F`;
const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const smartTemp = (temp, unit = "C") => {
  return unit.toUpperCase() === "F"
    ? `${temp.toFixed(1)}°F`
    : `${temp.toFixed(1)}°C`;
};

// 計算屬性
const formattedVolume = computed(() => percent(volumeRatio()));
const formattedPrice = computed(() => addSymbol(formatCurrency(price())));
const tempDisplay = computed(() => {
  const unit = tempUnit();
  return unit === "F"
    ? fahrenheit(toFahrenheit(temperature()))
    : celsius(temperature());
});
const userDisplay = computed(() =>
  addPrefix(capitalize(formatUser(userName())))
);

// 事件處理
const handleVolumeChange = (e) =>
  volumeRatio.set(parseFloat(e.target.value) || 0);
const handlePriceChange = (e) => price.set(parseFloat(e.target.value) || 0);
const handleTempChange = (e) =>
  temperature.set(parseFloat(e.target.value) || 0);
const handleUserChange = (e) => userName.set(e.target.value);
const handleUnitToggle = () => tempUnit.set(tempUnit() === "C" ? "F" : "C");

const context = {
  volumeRatio,
  price,
  temperature,
  userName,
  tempUnit,
  formattedVolume,
  formattedPrice,
  tempDisplay,
  userDisplay,
  percent,
  formatCurrency,
  addSymbol,
  celsius,
  fahrenheit,
  toFahrenheit,
  toCelsius,
  smartTemp,
  capitalize,
  addPrefix,
  formatUser,
  handleVolumeChange,
  handlePriceChange,
  handleTempChange,
  handleUserChange,
  handleUnitToggle,
};

async function loadAndMount() {
  try {
    const { jsxAST } = await import(`./compiled-template.js?t=${Date.now()}`);
    const template = generateReactiveTemplate(
      jsxAST.body[0].expression,
      context
    );
    const app = document.getElementById("app");
    template.mount(app);
  } catch (error) {
    console.error("載入或掛載失敗:", error);
  }
}

loadAndMount();
