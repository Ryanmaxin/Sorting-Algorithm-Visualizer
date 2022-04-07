import { useState, useEffect } from 'react';
import './SortingVisualizer.css'
import BubbleSort from '../SortingAlgorithms/BubbleSort'
import MergeSort from '../SortingAlgorithms/MergeSort';
import DisplayArray from '../DisplayArray/DisplayArray';
import InsertionSort from '../SortingAlgorithms/InsertionSort'
import SelectionSort from '../SortingAlgorithms/SelectionSort'
import QuickSort from '../SortingAlgorithms/QuickSort'

let currentCompare = { e: null}
let currentSwap = { e1: null, e2: null }
// let currentMerge = {e:null}
let isSorting = false

const SortingVisualizer = () => {
    const [masterArray, setmasterArray] = useState([])
    const [arraySize, setarraySize] = useState(100)
    useEffect(() => {
        resetArray()
    }, [arraySize])
    const resetArray = (() => {
        const array = []
        for (let i = 0; i < arraySize; i++) {
            array.push((Math.random() * (76) + 5))
        }
        currentCompare = { e1: null, e2: null }
        currentSwap = { e1: null, e2: null }
        setmasterArray(array)
    })
    const handleBubbleSort = arr => {
        BubbleSort(arr, AnimateSwap)
    }
    const handleSelectionSort = arr => {
        SelectionSort(arr, AnimateSwap)
    }
    const handleInsertionSort = arr => {
        InsertionSort(arr, AnimateSwap)
    }
    const handleMergeSort = arr => {
        let arrayObject = {
            "arr": arr,
            "indexStart": null,
            "indexEnd": null
        }
        // console.log(arrayObject.arr)
        MergeSort(arrayObject,AnimateCompare)
    }
    const handleQuickSort = arr => {
        setmasterArray([...QuickSort(arr, AnimateSwap)])
    }
    const AnimateSwap = (arr, e1, e2, isSwapping) => {
        if (e1 && e2) {
            currentSwap = { e1: e1, e2: e2 }
            isSorting = isSwapping
            setmasterArray([...arr])
        } else {
            //console.log("NOT ANIMATING")
        }
    }
    const AnimateCompare = (arr, e, isMergeSorting) => {
        if (e) {
            currentCompare = { e: e}
            isSorting = isMergeSorting
            setmasterArray([...arr])
        }
    }
    // const AnimateMerge = (arr,e,isMergeSorting) => {
    //     if (e!==-1) {
    //         currentMerge = {e:e}
    //         isSorting = isMergeSorting
    //         setmasterArray([...arr])
    //     }
    // }
    // console.log(masterArray)
    return (
        <div className="content">
            <DisplayArray masterArray={masterArray} currentCompare={currentCompare} currentSwap={currentSwap}/>
            <div className="options">
                <button onClick={resetArray} disabled={isSorting}>Generate New Array</button>
                <button onClick={() => { handleBubbleSort(masterArray) }} disabled={isSorting}>Bubble Sort</button>
                <button onClick={() => { handleSelectionSort(masterArray) }} disabled={isSorting}>SelectionSort</button>
                <button onClick={() => { handleInsertionSort(masterArray) }} disabled={isSorting}>Insertion Sort</button>
                <button onClick={() => { handleMergeSort(masterArray) }} disabled={isSorting}>Merge Sort</button>
                <button onClick={() => { handleQuickSort(masterArray) }} disabled={isSorting}>Quick Sort</button>
                <label htmlFor="array-size">Array Size</label>
                <input onChange={e => { setarraySize(e.target.value) }} type="range" min="10" max="300" value={arraySize} step="10" id="array-size" disabled={isSorting}></input>
            </div>
        </div>

    );
}

export default SortingVisualizer