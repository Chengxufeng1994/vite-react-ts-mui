# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: {
    react: {
      version: '18.3',
    },
  },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

## Folder structure

```
├── public # 靜態資源，存放公開可訪問的文件（不經過 Webpack 編譯）
└── src # 主應用代碼目錄
    ├── __tests__ # 測試文件目錄
    ├── api # API 封裝目錄
    ├── assets # 靜態資源，如圖片、SVG、字體等
    │   ├── images # 圖片資源
    │   ├── icons # 圖標資源
    │   └── fonts # 字體文件
    ├── components # 通用可重用的 UI 組件
    ├── configs # 配置文件目錄
    │   ├── constants.ts # 應用常量
    │   ├── env.ts # 環境變量相關配置
    │   └── menuItems.ts # 目錄配置表
    ├── contexts # React Context 文件，用於狀態管理
    ├── features # 具體功能模塊，按領域劃分
    │   ├── auth # 認證功能
    │   │   ├── loginPage # 登錄頁面
    │   │   │   ├── loginPage.tsx # 登錄頁面
    │   │   │   └── index.ts
    │   │   └── authSlice.ts # Redux Slice 或 Zustand Store
    │   ├── dashboard # 儀表板功能
    │   └── ...
    ├── hocs # 高階組件 (Higher Order Components)
    │   ├── auth # 認證功能
    │   │   └── withAuth.tsx # 用於保護路由的高階組件
    │   └── ...
    ├── hooks # 自定義 React Hooks
    │   ├── useAuth.ts # 用於處理身份驗證的自定義 Hook
    │   ├── useFetch.ts # 用於處理數據請求的自定義 Hook
    │   └── ...
    ├── layouts # 頁面佈局組件
    │   ├── MainLayout.tsx # 主佈局
    │   ├── AuthLayout.tsx # 認證佈局
    │   └── ...
    ├── pages # 頁面組件（對應路由）
    ├── routers # 路由配置與守衛
    │   ├── AppRouter.tsx # 應用路由入口
    │   ├── authRouter.tsx # 認證相關的路由
    │   └── ...
    ├── styles # 全局樣式文件
    │   ├── index.css # 全局 CSS
    │   ├── variables.scss # SCSS 變量
    │   └── ...
    ├── theme # 主題配置（如 MUI 或 TailwindCSS）
    │   ├── theme.ts # 主題對象
    │   └── ...
    ├── types # TypeScript 類型定義全域型別
    │   ├── api.d.ts # API 接口定義
    │   ├── models.d.ts # 數據模型定義
    │   └── ...
    └── utils # 工具函數目錄
        ├── helpers.ts # 通用工具函數
        ├── validators.ts # 驗證相關工具
        └── ...

```
