import path from 'path';

import { defineConfig, loadEnv } from 'vite';
import { splitVendorChunkPlugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react-swc';
import eslintPlugin from '@nabla/vite-plugin-eslint';

const alias = {
  '~': path.resolve(__dirname, './'),
  '@': path.resolve(__dirname, './src'),
};

// https://vite.dev/config/
export default ({ command, mode }: { command: string; mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '');
  process.env = {
    ...process.env,
    ...env,
  };

  const config = defineConfig({
    base: './',
    build: {
      outDir: './dist',
      sourcemap: 'inline',
      minify: 'esbuild',
    },
    define: {
      __APP_ENV__: JSON.stringify(process.env.APP_ENV),
    },
    plugins: [tsconfigPaths(), react(), eslintPlugin(), splitVendorChunkPlugin()],
    publicDir: './public',
    resolve: {
      alias,
    },
  });

  if (command === 'serve' || command === 'test') {
    return {
      ...config,
      test: {
        css: false,
        include: ['src/**/__tests__/*'],
        globals: true,
        environment: 'jsdom',
        // setupFiles: 'src/setupTests.ts',
        clearMocks: true,
        coverage: {
          include: ['src/**/*'],
          exclude: ['src/main.tsx'],
          thresholds: {
            '100': true,
          },
          provider: 'istanbul',
          enabled: true,
          reporter: ['text', 'lcov'],
          reportsDirectory: 'coverage',
        },
      },
      server: {
        port: 3000,
        proxy: {
          '/api': {
            target: process.env.VITE_API_URL ?? 'http://localhost:8000',
            changeOrigin: true,
            secure: false,
            ws: true,
            rewrite: (path: string): string => path.replace(/^\/api/, ''),
          },
        },
      },
    };
  } else if (command === 'build') {
    return {
      ...config,
      build: {
        ...config.build,
        sourcemap: 'hidden',
        minify: 'terser',
        chunkSizeWarningLimit: 500, // Set limit to 500 KB
      },
    };
  }
};
