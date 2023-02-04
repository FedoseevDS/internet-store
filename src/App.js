import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./page/main";

import "./App.css";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

// BrowserRouter - создает маршрутизацию в проекте
// Routes - рендерит первый совпавший url адрес, проверяет сверху-вниз
// Route - путь к компоненте, exact - отображает первой, path - url адрес, element - название отображаемой компоненты

export default App;
