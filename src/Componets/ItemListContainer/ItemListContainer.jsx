import '../ItemListContainer/ItemListContainer.css';
import { useEffect, useState } from 'react'
import { getProducto } from '../DataBase/Bd';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'


const ItemListContainer = ({ mensaje }) => {
    const { categoryId } = useParams()
    const [producto, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)
        getProducto(2000).then(response => {
            if (categoryId === undefined)
                setProductos(response)
            else {
                setProductos(response.filter(prod => prod.categoryId === categoryId))
            }
        }).finally(() => {
            setCargando(false)
        })
    }, [categoryId])

    if (cargando) {
        return (
            <Spinner style={{ position: "absolute", margin: "auto", left: "0", top: "0", bottom: "0", right: "0", width: "51px", height: "51px" }} animation="border" role="status"></Spinner>
        )
    }

    return (
        <section>
            <h1 className="titulo">{mensaje}</h1>
            <ItemList productos={producto} />
        </section>
    )
}

export default ItemListContainer