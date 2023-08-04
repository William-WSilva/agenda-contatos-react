import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Container, EstiloGlobal } from './styles/styles'
import { Home } from './pages/Home/Home'
import { Cadastro } from './pages/Cadastro/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
