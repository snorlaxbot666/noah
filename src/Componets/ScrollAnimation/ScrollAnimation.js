import { useState,useEffect } from "react" 

const ScrollAnimation = () => { 
    const [background,setBackground] = useState('pink')

    useEffect(() => {
        console.log(divRef)
        const handleScroll = () => {

        // const div = document.getElementBytId('scroll-color')
        const div = divRef.current
        const { y } = div.getBoundingClientRect()
        

        const backgroundColor = y <= 0 ? 'orange' : 'pink'
        setBackground(backgroundColor)

        }

        window.addEventListener('scroll', handleScroll) 

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])


    return (
        <div>
            <div 
            // id= 'scroll-color' 
                style={{height: '180vh', background, margin: '20px'}}
            >

                <h1>Scrollear para cambiar color de fondo</h1>
             </div>        
        </div>
    )
}

export default ScrollAnimation