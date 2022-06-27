import '../ItemDetailContainer/ItemDetailcontainer.css';
import itemDetail from '../itemDetail/itemDetail';
import { Spinner} from "@chakra-ui/react"
import { useEffect, useState } from 'react'

import { getProducto } from '../../Componets/DataBase/Bd'

import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const { id } = useParams()
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const onResize = () => {
            console.log('cambio tamaño')
        }

    window.addEventListener('resize', onResize)        
    return () => {
        window.removeEventListener('resize',)

    }
}, [])
       
        
    useEffect(() => {
        setCargando(true)
        getProducto(500).then(response => {
            setProducto(response.find(res => res.id === id))
        }).finally(() => {
            setCargando(false)
        })
    }, [id])

    if (cargando) {
        return (
            <Spinner style={{ position: "absolute", margin: "auto", left: "0", top: "0", bottom: "0", right: "0", width: "51px", height: "51px" }} animation="border" role="status"></Spinner>
        )
    }


    return (
        <section className='infoProducto'>
            <itemDetail {...producto} />
        </section>
    )
}

export default ItemDetailContainer