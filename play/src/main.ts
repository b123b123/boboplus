/*
 * @Description: main.ts 入口文件
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-08 10:03:14
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-11 16:26:47
 */
import { createApp } from "vue";
import App from "./app.vue";
import boboplus from "@boboplus/components";

const app = createApp(App);

app.use(boboplus);
app.mount("#app");
