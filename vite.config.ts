import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({

    // 打包配置
    build: {
        lib: {
            entry: 'src/index.ts', // 设置入口文件
            name: 'CtsyCom', // 起个名字，安装、引入用
            fileName: (format) => `com.${format}.js` // 打包后的文件名
        },
        sourcemap: false, // 输出.map文件
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['lodash', 'dayjs'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    lodash: '_',
                    dayjs: 'dayjs'
                }
            }
        }
    },
    plugins: [],
    // css: {
    //     preprocessorOptions: {
    //         less: {
    //             javascriptEnabled: true,
    //             additionalData: '@import "./src/packages/index.less";',
    //         }
    //     }
    // }
})