import './App.css'
import { Routes, Route } from 'react-router-dom'
import RequireAuth from './components/RequireAuth'
import Layout from './components/Layout'
import Login from './views/Login'
import Characters from './views/Characters'
import Details from './views/Details'
import NotFound from './views/NotFound'

function App() {

  return (
    <>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />

            {/*protected routes */}
            <Route element={<RequireAuth />}>
              <Route path="/characters" element={<Characters />} />
              {/*!!!!!!!! Hay que poner el id porque en la vista Details se pide el id por useParams!!!!! */}
              <Route path="details/:id" element={<Details />} />
            </Route>

            {/*Missing Route*/}
            <Route path="*" element={<NotFound />} />

          </Route>
        </Routes>
    </>
  )
}

export default App
