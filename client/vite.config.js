// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   return {
//     plugins: [react()],
//     server: {
//       port: env.VITE_PORT || 5173, // fallback port
//     },
//     build: {
//       outDir: 'dist', // Netlify serves from this folder
//     },
//     resolve: {
//       alias: {
//         '@components': '/src/components',
//         '@assets': '/src/assets',
//         '@hooks': '/src/hooks',
//         '@layout': '/src/layout',
//         '@modules': '/src/modules',
//         '@pages': '/src/pages',
//         '@routes': '/src/routes',
//         '@services': '/src/services',
//         '@utils': '/src/utils',
//         '@redux': '/src/redux',
//       },
//     },
//   };
// });
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      port: env.VITE_PORT || 5173, // fallback port
      proxy: {
        '/api': {
          target: 'http://localhost:5000', // your backend
          changeOrigin: true,
          secure: false,
        },
      },
    },
    build: {
      outDir: 'dist',
    },
    resolve: {
      alias: {
        '@components': '/src/components',
        '@assets': '/src/assets',
        '@hooks': '/src/hooks',
        '@layout': '/src/layout',
        '@modules': '/src/modules',
        '@pages': '/src/pages',
        '@routes': '/src/routes',
        '@services': '/src/services',
        '@utils': '/src/utils',
        '@redux': '/src/redux',
      },
    },
  };
});

