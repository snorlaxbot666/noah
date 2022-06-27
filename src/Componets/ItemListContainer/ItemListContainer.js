import { Text, Spinner, Flex } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../services/firebase/firestore/products"
import ItemList from "components/ItemList/ItemList"
import { getProducts } from "services/firebase/firestore/products"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
}