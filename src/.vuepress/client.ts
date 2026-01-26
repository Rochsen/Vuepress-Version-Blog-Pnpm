import { defineClientConfig } from "vuepress/client";
// 全量引入element-plus
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

// 全量引入TDesign
import TDesign from "tdesign-vue-next";
import 'tdesign-vue-next/es/style/index.css';

export default defineClientConfig({
  enhance({ app }) {
    // 注册element-plus
    // app.use(ElementPlus);
    app.use(TDesign);
  },
});
