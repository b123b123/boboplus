/*
 * @Description: Play
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-08 09:58:55
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-11 16:47:24
 */
import { defineConfig } from "vite";
import sharedConfig from "../vite.config.shared"; // 导入共享配置

export default defineConfig({
	// 你可以在这里添加或覆盖一些配置项，也可以直接使用共享配置
	...sharedConfig,
	// 子目录的配置项
});
