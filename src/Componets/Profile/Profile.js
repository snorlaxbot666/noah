import {  useState, useEffect } from "react"
import { Text, Flex, Input, Button } from "@chakra-ui/react"
import { useAuth } from "../../context/AuthContext"
import { useAuth } from "context/AuthContext"

const Profile = () => {
    const [name, setName] = useState('')




import { useOrders } from "services/firebase/firestore/orders"

import { useParams } from "react-router-dom"

const OrdersList = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    const { getOrdersByUser } = useOrders()

    const { userId } = useParams()

    useEffect(() => {
        getOrdersByUser(userId).then(orders => {
            setOrders(orders)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [userId]) //eslint-disable-line

    if(loading) {
        return (
            <Flex height='100%' flexDirection='column' justifyContent='center'>
                <Spinner />
            </Flex>
        )
    }

    return (
        <Flex flexDirection='column' justifyContent='space-between' alignItems='center' height='100%' p={50}>
            <Text fontSize='3xl' mb={20}>Your orders</Text>
            <Flex flexDirection='column' height='100%'>
                {orders.map(order => <Text key={order.id}>OrderId: {order.id}</Text>)}
            </Flex>
        </Flex>
    )
}

export default OrdersList