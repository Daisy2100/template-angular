# Portfolio Template - Angular 19 專案

一個使用 Angular 19 和 PrimeNG 19 建構的現代響應式作品集模板，具備完整的導航系統和模組化架構。

## 🚀 技術規格

- **Angular**: 19.2.0
- **PrimeNG**: 19.1.3
- **TypeScript**: 5.7.2
- **SCSS**: 支援現代化樣式架構
- **SSR**: 支援伺服器端渲染 (Angular Universal)

## 📋 功能特色

### 🎨 UI/UX 設計
- ✅ 響應式設計，支援桌面版和行動版
- ✅ 現代化的樣式系統，使用 SCSS 變數管理
- ✅ PrimeNG 元件庫整合
- ✅ 自訂字型和顏色主題系統

### 🧭 導航系統
- ✅ 動態導航元件，支援自訂 Logo
- ✅ 響應式側邊欄 (行動版)
- ✅ 載入狀態指示器
- ✅ 活動路由狀態顯示
- ✅ 可配置的選單項目

### 📄 頁面結構
- ✅ 首頁 (Home)
- ✅ 關於 (About)
- ✅ 新聞 (News)
- ✅ 聯絡 (Contact)

### 🏗️ 架構特點
- ✅ 獨立元件 (Standalone Components)
- ✅ 模組化服務架構
- ✅ TypeScript 嚴格模式
- ✅ 現代化路由配置

## 🛠️ 開發環境設置

### 系統需求
- Node.js 18.18.0 或更高版本
- npm 或 yarn 套件管理器
- Angular CLI 19.2.15

### 安裝專案

```bash
# 克隆專案
git clone <repository-url>
cd template-angular

# 安裝相依套件
npm install
```

## 🚦 開發指令

### 啟動開發伺服器

```bash
npm start
# 或
ng serve
```

專案將在 `http://localhost:4200/` 啟動，並支援熱重載功能。

### 建構專案

```bash
# 開發建構
npm run build

# 生產建構
ng build --configuration production
```

建構結果將輸出到 `dist/portfolio` 目錄。

### 開發監視模式

```bash
npm run watch
```

在監視模式下，檔案變更時會自動重新建構。

### 執行測試

```bash
# 單元測試
npm test

# 程式碼覆蓋率測試
ng test --code-coverage
```

## 📁 專案結構

```
src/
├── app/
│   ├── components/           # 共用元件
│   │   └── navigation/       # 導航元件
│   │       ├── navigation.component.ts
│   │       ├── navigation.service.ts
│   │       └── README.md     # 導航元件文件
│   ├── pages/               # 頁面元件
│   │   ├── home/            # 首頁
│   │   ├── about/           # 關於頁面
│   │   ├── news/            # 新聞頁面
│   │   └── contact/         # 聯絡頁面
│   ├── services/            # 共用服務
│   ├── models/              # 資料模型
│   ├── enums/               # 列舉定義
│   ├── app.component.*      # 根元件
│   ├── app.config.ts        # 應用程式配置
│   └── app.routes.ts        # 路由配置
├── assets/
│   ├── styles.scss          # 全域樣式
│   └── scss/
│       └── _variables.scss  # SCSS 變數定義
└── environments/            # 環境配置
```

## 🎨 樣式架構

### SCSS 變數系統
專案使用完整的 SCSS 變數系統，定義於 `src/assets/scss/_variables.scss`：

- **字型系統**: 主要和次要字型家族定義
- **字重**: 從 light (300) 到 bold (700)
- **字體大小**: 從 xs (11px) 到 4xl (48px)
- **顏色系統**: Primary、Gray 色階完整定義
- **間距和佈局**: 標準化間距系統

### 使用現代 @use 語法

```scss
@use 'scss/_variables' as *;

.my-component {
  font-family: $font-family-primary;
  color: $color-primary-500;
}
```

## 🧩 核心元件

### 導航元件 (NavigationComponent)
- **位置**: `src/app/components/navigation/`
- **功能**: 響應式導航、側邊欄、載入狀態
- **自訂**: 支援 `logoText` 輸入屬性
- **服務**: `NavigationService` 管理選單項目

詳細使用說明請參考：`src/app/components/navigation/README.md`

## 🔧 配置檔案

- **angular.json**: Angular CLI 專案配置
- **tsconfig.json**: TypeScript 編譯器配置
- **package.json**: 專案相依性和腳本
- **postcss.config.js**: PostCSS 配置

## 📝 開發規範

### 元件開發
1. 使用 PrimeNG 作為基礎 UI 元件庫
2. 當樣式無法符合需求時，使用自訂 SCSS
3. 所有新元件使用 Standalone Components 架構

### 樣式開發
1. 使用 SCSS 變數化處理所有可配置參數
2. 使用現代的 `@use` 語法取代 `@import`
3. 遵循 BEM 命名規範

### TypeScript
- 啟用嚴格模式 (`strict: true`)
- 使用明確的型別定義
- 遵循 Angular 編碼風格指南

## 🚀 部署

### 生產建構
```bash
ng build --configuration production
```

### SSR 建構
```bash
ng build --configuration production
npm run serve:ssr:portfolio
```

## 📞 技術支援

如需技術支援或有任何問題，請參考：
- [Angular 官方文件](https://angular.dev/)
- [PrimeNG 文件](https://primeng.org/)
- [專案 Issues](repository-issues-url)

## 📄 授權條款

本專案使用 MIT 授權條款。詳情請參閱 LICENSE 檔案。

---

*本專案使用 Angular CLI 19.2.15 建立*
