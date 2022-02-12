import { useSelector } from 'react-redux';
import {HashRouter, Routes, Route} from 'react-router-dom'
import Load from './components/Load';
import MainLayout from './components/MainLayout';
import ProtectedRoutes from './components/ProtectedRoutes';
import {Login, Shop, ShopDetail, Cart, Signup, Account, About} from "./pages"
import DefaultComponent from './pages/DefaultComponent';
import { SearchProduct } from './pages/SearchProduct';
import "./styles/App.css"

function App() {

  const isLoading = useSelector(state => state.app.isLoading)

  return (
    <div className='app'>
      <HashRouter>
        {/* encima de routes para que salga en todas las rutas */}
        {isLoading && <Load/>}
        <Routes>
            <Route path="/" element={<DefaultComponent/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />

            <Route element={<ProtectedRoutes/>}>
              {/* dentro de del route se llama outlet */}
              <Route element={<MainLayout/>}>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/shop/:id" element={<ShopDetail/>} />
                <Route path="/search" element={<SearchProduct/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/about" element={<About/>}/>
              </Route>
            
            </Route>

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;