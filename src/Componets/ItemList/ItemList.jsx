import { SimpleGrid } from "@chakra-ui/react"
import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({ productos }) => {
    return (
        <ul style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }} className="listado">
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </ul>
    )
}

export default ItemList