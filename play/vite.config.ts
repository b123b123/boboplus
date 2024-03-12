/*
 * @Description: Play
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-08 09:58:55
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-12 14:24:15
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import DefineOptions from "unplugin-vue-define-options/vite";

export default defineConfig({
	plugins: [vue(), DefineOptions()],
});
