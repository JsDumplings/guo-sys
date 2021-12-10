import React, { Suspense } from 'react'
import ReactDOM from 'react-dom';
import './index.scss';
import "antd/dist/antd.css";
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/iconfont/iconfont.css'
ReactDOM.render(
  <BrowserRouter>
    {/* 使用了路由懒加载，所以需要使用<Suspense>包起来 */}
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
      </Routes>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
)
reportWebVitals();
