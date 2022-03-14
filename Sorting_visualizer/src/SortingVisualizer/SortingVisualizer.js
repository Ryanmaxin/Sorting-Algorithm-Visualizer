import { useState,useEffect } from 'react';

const SortingVisualizer = () => {
    const [masterArray,setmasterArray] = useState([])
    useEffect(()=>{
        resetArray()
    },[])
    const resetArray = (()=> {
        const array = []
        for (let i = 0; i < 100; i++) {
            array.push(Math.floor(Math.random()*(996)+5))
        }
        setmasterArray(array)
    })

    return (
        <div className = "array-container">
            {masterArray.map((element,i)=> (
            <div className="array-bars" key={i}>
                {element}
            </div>
            ))}
        </div>

    );
}
 
export default SortingVisualizer;