import { useState,useEffect } from 'react';
import './SortingVisualizer.css'
import BubbleSort from '../SortingAlgorithms/BubbleSort'

const SortingVisualizer = () => {
    const [masterArray,setmasterArray] = useState([])
    useEffect(()=>{
        resetArray()
    },[])
    const resetArray = (()=> {
        const array = []
        for (let i = 0; i < 300; i++) {
            array.push((Math.random()*(76)+5))
        }
        setmasterArray(array)
    })
    const handleBubbleSort = arr => {
        const newArray = BubbleSort(arr)
        setmasterArray([...newArray])
    }
    const handleMergeSort = arr => {
        const newArray = BubbleSort(arr)
        setmasterArray([...newArray])
    }

    return (
        <div className="content">
            <div className = "array-container">
                {masterArray.map((element,i)=> (
                <div 
                className="array-bar" 
                key={i}
                style={{height: `${element}vh`}}
                ></div>
                ))}
            </div>
            <div className="options">
                <button onClick={resetArray}>Generate New Array</button>
                <button onClick={()=>{handleBubbleSort(masterArray)}}>Bubble Sort</button>
                <button onClick={()=>{handleMergeSort(masterArray)}}>Merge Sort</button>
                
            </div>
        </div>

    );
}
 
export default SortingVisualizer;