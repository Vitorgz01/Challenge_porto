import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Error from './routes/Error/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx'
import Sobre from './routes/Sobre/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'
import Contato from './routes/Contato/index.tsx'
import Servicos from './routes/Servicos/index.tsx'
import Privacidade from './routes/Privacidade/index.tsx'
// import GlobalStyle from './global-style.ts'

const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      errorElement: <Error/>,
      
      children:[
        {path: '/', element: <Home/>},
        {path:'/integrantes', element: <Integrantes/>},
        {path: '/cadastro', element: <Cadastro/>},
        {path:'/contato', element: <Contato/>},
        {path:'/sobre', element: <Sobre/>},
        {path:'/privacidade', element: <Privacidade/>},
        {path:'/sobre', element:<Sobre/>},
        {path:'/servicos', element:<Servicos/>}
      ]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <GlobalStyle/> */}
  </StrictMode>,
)
