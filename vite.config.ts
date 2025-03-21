import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { resolve } from 'path';

export default defineConfig(() => {
  return {
    server: {
      port: 5000,
    },
    plugins: [react(), dts({ rollupTypes: true }), cssInjectedByJsPlugin({})],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,

      sourcemap: true,
      emptyOutDir: true,
      copyPublicDir: false,
      lib: {
        entry: resolve(__dirname, 'src/lib/index.ts'),
        name: 'octobell-web-components',
        formats: ['es', 'umd'],
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: (id) =>
          [
            'react',
            'react-dom',
            '@chakra-ui/react',
            '@emotion/react',
            '@emotion/styled',
          ].includes(id),
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            '@chakra-ui/react': 'ChakraUI',
            '@emotion/react': 'EmotionReact',
            '@emotion/styled': 'EmotionStyled',
            'framer-motion': 'FramerMotion',
          },
        },
      },
    },
    assetsInclude: ['**/*.png', '**/*.svg'],
    optimizeDeps: {
      include: [
        '@chakra-ui/react',
        '@emotion/react',
        '@emotion/styled',
        'framer-motion',
      ],
    },
  };
});
