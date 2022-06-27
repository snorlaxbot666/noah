import { useState } from 'react' 
import { Button, Flex, Text, Box, Spinner } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

import ItemCart from "components/ItemCart/ItemCart"

import { useCart } from "context/CartContext"
import { useAuth } from 'context/AuthContext'

import { useOrders } from "services/firebase/firestore/orders"

const Cart = () => {
    const [loading, setLoading] = useState(false)
    const { cart, totalQuantity, getTital, clearCart } = useCart(CartContext)

    if (loading) {
        return<h1>Se esra generando su pedido</h1>
    }

    if (totalQuantity === 0) {
        return<h1>No hay productos en el carro </h1>
    }

    return (
        <>
            <h1>Cart</h1>
            <cartItemList ProductsAdded={cart}/>
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Borrar carrito</button>
            <button onClick={() => console.log('crear orden')} className="Button">Generar pedido</button>
        </>
    )
    const { user } = useAuth()
    const { createOrder } = useOrders()

    const handleCreateOrder = () => {
        setLoading(true)

        createOrder().then(response => {
            console.log(response)
            if(response.result === 'orderCreated') {
                clearCart()
                setOrderId(response.id)
            }
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }

    if(loading) {
        return (
            <Flex height='100%' flexDirection='column' justifyContent='center'>
                <Spinner />
            </Flex>
        )
    }

    if(orderId !== '') {
        return (
            <Flex flexDirection='column' justifyContent='space-between' alignItems='center' height='100%' p={50}>
                <Box>
                    <Text fontSize='3xl'>Your Order-Id is: {orderId}. Contact us for shipping</Text>
                    <Button
                        variant="solid" 
                        size="md" 
                        backgroundColor="#eeeeee"
                        onClick={() => navigate(`/profile/${user.uid}/orders`)}
                    >
                        Orders
                    </Button>
                </Box>
                <Flex flexDirection='column'>
                    <Text fontSize='3xl'>Check our products...</Text>
                    <Button
                        variant="solid" 
                        size="md" 
                        backgroundColor="#eeeeee"
                        onClick={() => navigate('/')}
                    >
                        Products
                    </Button>
                </Flex>
            </Flex>
        )
    }

    if(!totalProductsAdded) {
        return (
            <Flex flexDirection='column' justifyContent='space-between' alignItems='center' height='100%' p={50}>
                <Box>
                    <Text fontSize='3xl'>Your cart is empty</Text>
                </Box>
                <Flex flexDirection='column'>
                    <Text fontSize='3xl'>Check our products...</Text>
                    <Button
                        variant="solid" 
                        size="md" 
                        backgroundColor="#eeeeee"
                        onClick={() => navigate('/')}
                    >
                        Products
                    </Button>
                </Flex>
            </Flex>
        )
    } 

    return (
        <Flex flexDirection='column' justifyContent='space-between' alignItems='center' height='100%' p={50}>
            <Text fontSize='3xl' mb={20}>Your cart</Text>
            <Flex flexDirection='column' height='100%'>
                {cart.map(prod => <ItemCart key={prod.id} {...prod}/>)}
            </Flex>
            <Flex flexDirection='column' justifyContent='space-between' alignItems='center' height='100%'>
                <Text fontWeight={800} fontSize={'3xl'}>
                    Total: ${totalToPay}
                </Text>
                <Button
                        variant="solid" 
                        size="lg" 
                        backgroundColor="#aaeeee"
                        onClick={handleCreateOrder}
                >
                    Create Order
                </Button>
            </Flex>
        </Flex>
    )
}

export default Cart