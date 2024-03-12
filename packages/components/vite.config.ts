/*
 * @Description: components
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-08 09:58:55
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-12 14:28:33
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	// 子目录的配置项
	build: {
		//打包后文件目录
		outDir: "es",
		//压缩
		minify: false,
		rollupOptions: {
			//忽略打包vue文件
			external: ["vue"],
			//input: ["index.ts"],
			output: {
				globals: {
					vue: "Vue",
				},
				dir: "dist",
			},
		},
		lib: {
			entry: "./index.ts",
			name: "boboplus",
			fileName: "boboplus",
			formats: ["es", "umd", "cjs"],
		},
	},
	plugins: [vue()],
});
