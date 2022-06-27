import { Routes, Route } from 'react-router-dom'

import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Login from '../components/Login/Login'
import Profile from '../components/Profile/Profile'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from 'components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from 'components/ItemDetailContainer/ItemDetailContainer'
import Login from 'components/Login/Login'
import Profile from 'components/Profile/Profile'

import { useAuth } from '../context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import PublicRoute from './components/PublicRoute/PublicRoute'
import { useAuth } from 'context/AuthContext'
import ProtectedRoute from 'routes/components/ProtectedRoute/ProtectedRoute'
import PublicRoute from 'routes/components/PublicRoute/PublicRoute'


const AppRouter = () => {
 const AppRouter = () => {
            <Routes>
            <Route element={<ProtectedRoute user={user}/>}>
                <Route path='/profile' element={<Profile />} />
                <Route path='/cart' element={<h1>CART</h1>} />
            </Route>    
        </Routes>
    
 }}