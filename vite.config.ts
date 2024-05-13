import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
// 如果配置文件需要基于（dev/serve 或 build）命令或者不同的 模式 来决定选项，亦或者是一个 SSR 构建（isSsrBuild）、一个正在预览的构建产物（isPreview）
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  console.log(process.cwd());
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '');

  const plugins = [vue()];
  return {
    // vite 配置
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV)
    },
    plugins,
    css: {
      postcss: {
        plugins: [tailwindcss]
      }
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname as any, './src')
      }
    }
  };
  // if (command === 'serve') {
  //     return {
  //         // dev 独有配置
  //     }
  // } else {
  //     // command === 'build'
  //     return {
  //         // build 独有配置
  //     }
  // }
});
