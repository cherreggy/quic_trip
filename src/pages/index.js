import { ConfigProvider } from "antd";
import Inn from "./inn";
// import { ConfigProvider } from "antd";
// const viewportUnitsBuggyfill = require("viewport-units-buggyfill");
// viewportUnitsBuggyfill.init();
ConfigProvider.config({
  getPopupContainer: () => document.body,
});
export default function Home() {
  return (
    <ConfigProvider>
      <Inn></Inn>
    </ConfigProvider>
  );
}
