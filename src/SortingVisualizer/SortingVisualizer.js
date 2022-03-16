import { useState,useEffect } from 'react';
import './SortingVisualizer.css'
import BubbleSort from '../SortingAlgorithms/BubbleSort'
import DisplayArray from '../DisplayArray/DisplayArray';

const SortingVisualizer = () => {
    const [masterArray,setmasterArray] = useState([])
    const [currentCompare,setcurrentCompare] = useState({e1:null,e2:null})
    const [currentSwap,setcurrentSwap] = useState({e1:null,e2:null})
    useEffect(()=>{
        resetArray()
    },[])
    const resetArray = (()=> {
        const array = []
        for (let i = 0; i < 100; i++) {
            array.push((Math.random()*(76)+5))
        }
        setmasterArray(array)
    })
    const handleBubbleSort = arr => {
        BubbleSort(arr,AnimateCompare,AnimateSwap)
        //setmasterArray([...newArray])
    }
    const AnimateSwap = (arr,e1,e2) => {
        if (e1 && e2) {
            setcurrentCompare({e1:null,e2:null})
            setcurrentSwap({e1:e1,e2:e2})
            setmasterArray([...arr])
        }

    }
    const AnimateCompare = (arr,e1,e2) => {
        if (e1 && e2) {
            setcurrentCompare({e1:e1,e2:e2})
            setcurrentSwap({e1:null,e2:null})
            //setmasterArray([...arr])
        }
    }

    return (
        <div className="content">
            <DisplayArray masterArray={masterArray} currentCompare={currentCompare} currentSwap={currentSwap}/>
            <div className="options">
                <button onClick={resetArray}>Generate New Array</button>
                <button onClick={()=>{handleBubbleSort(masterArray)}}>Bubble Sort</button>
            </div>
        </div>

    );
}
 
export default SortingVisualizer