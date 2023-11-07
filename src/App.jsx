// import CategoryItems from "./components/categories/CategoryItems"
import { Routes, Route } from 'react-router-dom'
import Home from './components/routes/home/Home'
import Shop from './components/routes/shop/Shop'
import Navigation from './components/routes/navigation/Navigation'
import SignIn from './components/routes/sign-in/SignIn'

const App = () =>{
  return (
    <Routes>
      <Route path='/'  element={<Navigation />}>
        <Route index  element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
       
    </Routes>
  )
}

export default App
