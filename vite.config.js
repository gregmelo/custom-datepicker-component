// custom-datepicker-component/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJs from 'vite-plugin-css-injected-by-js';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      jsxDevelopment: false // Forcer le runtime de production
    }),
    cssInjectedByJs()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'CustomDatePicker',
      fileName: (format) => `custom-datepicker.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'prop-types',
        'react-datepicker',
        'react-icons',
        /^react-icons\/.*/,
        'react-datepicker/dist/react-datepicker.css',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        /^date-fns\/.*/, // Externaliser les dépendances de date-fns utilisées par react-datepicker
        'date-fns'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'prop-types': 'PropTypes',
          'react-datepicker': 'ReactDatePicker',
          'react-icons': 'ReactIcons',
          'react-datepicker/dist/react-datepicker.css': 'ReactDatePickerCSS',
          'react/jsx-runtime': 'ReactJSXRuntime',
          'react/jsx-dev-runtime': 'ReactJSXDevRuntime',
          'date-fns': 'dateFns'
        }
      }
    },
    sourcemap: true,
    minify: false,
    target: 'esnext' // Assurer une compatibilité avec les modules modernes
  },
  optimizeDeps: {
    exclude: [
      'react',
      'react-dom',
      'prop-types',
      'react-datepicker',
      'react-icons',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
      'date-fns'
    ]
  },
  resolve: {
    alias: {
      react: 'react',
      'react-dom': 'react-dom',
      'react-datepicker': 'react-datepicker',
      'date-fns': 'date-fns'
    }
  }
});