/*
 * @Description: run.ts
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2024-03-15 16:11:59
 * @LastEditors: WangBo
 * @LastEditTime: 2024-03-25 10:14:50
 */
import { spawn } from "child_process";

export default async (command: string, path: string) => {
    //cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数
    const [cmd, ...args] = command.split(" ");
    return new Promise((resolve) => {
        const app = spawn(cmd, args, {
            cwd: path, //执行命令的路径
            stdio: "inherit", //输出共享给父进程
            shell: true //mac不需要开启，windows下git base需要开启支持
        });
        //执行完毕关闭并resolve
        app.on("close", resolve);
    });
};
