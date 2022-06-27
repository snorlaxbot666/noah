import {  useNavigate } from 'react'
import {  useAuth, useCart} from 'react-router-dom'

import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Text,
    Button
} from '@chakra-ui/react';

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import AddToCart from 'components/AddToCart/AddToCart';


import "../itemDetail/ItemDetail.css";
import Contador from "../Contador/Contador"


const Rating = ({ rating = 4.2, numReviews = 36 }) => {
} 

const itemDetail = ({ nombre, precio, img, descripcion }) => {


    return (
        <div className="producto">
            <div className="imagen">
                <img style={{ maxWidth: "100%" }} src={img} alt="" />
            </div>
            <div className="producto-info">
                <h3>{nombre}</h3>
                <h3 className="precio">Precio ${precio}</h3>
                <Contador inicio={0} tipoFlex="space-between" />
            </div>
            <div className="descripcion">
                <h3>{descripcion}</h3>
            </div>
        </div>
    )
}

export default itemDetail

const navigate = useNavigate()

    const { user } = useAuth()
    const { addItem } = useCart()

    const handleAddToCart = (number) => {
        setQuantity(number)

    const handleAddToCart = (quantity) => {
        setQuantity(quantity)

        addItem({ id, name, price, quantity })
    }
    
    return (
        <Flex alignItems="flex-start" justifyContent="center" width='90%' height='40vh'>

        <Flex>
            bg={useColorModeValue('white', 'gray.800')}
            maxW="lg"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
            height='100%'
            </Flex>
            {isNew && (
                <Circle
                size="10px"
                position="absolute"
                top={2}
                right={2}
                bg="red.200"/>
                )};
                
</Flex>
    )
            }