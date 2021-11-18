import Login from './components/Login/Login'
import Estado from './components/Estado/Estado'
import Municipio from './components/Municipio/Municipio'
import Registrar from './components/Registrar/Registrar'
import Dashboard from './components/Dashboard'

const routes = [
  {
    path: '/',
    exact: true,
    redirect: '/home',
    component: '<div>Loading... </div>'
  },
  {
    path: '/home',
    exact: false,
    private: false,
    component: '<div>Home</div>',
    routes: [
      {
        path: '/home/login',
        exact: true,
        component: Login
      },
      {
        path: '/home/signup',
        exact: true,
        component: Registrar
      },
      {
        path: '/home/estado',
        exact: true,
        component: Estado
      },
      {
        path: '/home/municipio',
        exact: true,
        component: Municipio
      },
      {
        path: '/home/dashboard',
        exact: true,
        component: Dashboard
      }
    ]
  }

]

export default routes
