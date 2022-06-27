import '../CartWidget/CartWidget.css';

import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { Icon,
    Flex,
    Button,
    Text
} from '@chakra-ui/react'


const CartWidget = () => {
    const navigate = useNavigate()

    const { totalProductsAdded } = useCart()

    return (
        <Button variant="solid" size="md" backgroundColor="#aaeeee" onClick={() => navigate('/cart')}>
            <Flex justifyContent='center' alignItems='center'>
                <Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'} mr={3}/>
                <Text fontSize='lg'>0</Text>
                <Text fontSize='lg'>{ totalProductsAdded }</Text>
            </Flex>
        </Button>
    )
    }

    export default CartWidget;
