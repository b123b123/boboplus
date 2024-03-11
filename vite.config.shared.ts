/*
 * @Description: vite.config.shared.ts
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-08 09:58:55
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-11 16:48:18
 */
import { UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import DefineOptions from "unplugin-vue-define-options/vite";

const sharedConfig: UserConfig = {
	// 根目录的配置项
	plugins: [vue(), DefineOptions()],
};

export default sharedConfig;
