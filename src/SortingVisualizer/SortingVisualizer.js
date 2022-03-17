import { useState,useEffect } from 'react';
import './SortingVisualizer.css'
import BubbleSort from '../SortingAlgorithms/BubbleSort'
import DisplayArray from '../DisplayArray/DisplayArray';

let currentCompare = {e1:null,e2:null}
let currentSwap = {e1:null,e2:null}
let isSorting = false

const SortingVisualizer = () => {
    const [masterArray,setmasterArray] = useState([])
    const [arraySize, setarraySize] = useState(100)
    useEffect(()=>{
        resetArray()
    },[arraySize])
    const resetArray = (()=> {
        const array = []
        for (let i = 0; i < arraySize; i++) {
            array.push((Math.random()*(76)+5))
        }
        currentCompare = {e1:null,e2:null}
        currentSwap = {e1:null,e2:null}
        setmasterArray(array)
    })
    const handleBubbleSort = arr => {
        BubbleSort(arr,AnimateCompare,AnimateSwap)
    }
    const AnimateSwap = (arr,e1,e2,isBubbleSorting) => {
        if (e1 && e2) {
            currentCompare = {e1:null,e2:null}
            currentSwap = {e1:e1,e2:e2}
            isSorting= isBubbleSorting
            setmasterArray([...arr])
        }

    }
    const AnimateCompare = (arr,e1,e2,isBubbleSorting) => {
        if (e1 && e2) {
            currentCompare = {e1:e1,e2:e2}
            currentSwap = {e1:null,e2:null}
            isSorting= isBubbleSorting
            setmasterArray([...arr])
        }
    }

    return (
        <div className="content">
            <DisplayArray masterArray={masterArray} currentCompare={currentCompare} currentSwap={currentSwap}/>
            <div className="options">
                <button onClick={resetArray} disabled={isSorting}>Generate New Array</button>
                <button onClick={()=>{handleBubbleSort(masterArray)}} disabled={isSorting}>Bubble Sort</button>
                <label htmlFor="array-size">Array Size</label>
                <input onChange = {e=>{setarraySize(e.target.value)}} type="range" min="10" max="300" value={arraySize} step="10" id="array-size" disabled={isSorting}></input>
            </div>
        </div>

    );
}
 
export default SortingVisualizer