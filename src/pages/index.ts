// 路由懒加载
import { lazy } from 'react'

const Login = lazy(() => import('./Login'))

export {
  Login
}