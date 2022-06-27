import React, { useState } from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRouter from 'routes/AppRouter'
import { AuthProvider } from './Componets/context/AuthContext';
import { CartProvider } from './Componets/context/CartContext';
import Layout from './Componets/Layout/Layout'
import NavBar from './Componets/Navbar/Navbar';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Componets/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import ButtonBase from './Componets/ButtonBase/ButtonBase';
//import ScrollAnimation from './Componets/ScrollAnimation/ScrollAnimation';

function App() {
  return (
    <div className="App">
  <ChakraProvider resetCSS>
    <BrowserRouter>
    <NavBar/>
      <AuthProvider>
      <CartProvider>
          <Layout>
          
    <Routes>
      <Route path='/:nombre' element={<ItemDetailContainer />} />
      <Route path='/category/:categoryId' element={<ItemListContainer mensaje={"Catalogo por Categiria"} />} />
      <Route path='/detail/:id' element={<ItemDetailContainer mensaje={"Catalogo de productos"}/>} />
      <Route path='/' element={<ItemListContainer mensaje={"Bienvenidos"} />} />
    </Routes>
            <AppRouter />
            </Layout>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </ChakraProvider>
 
 

</div>
);
  }
<ButtonBase/>


export default App;