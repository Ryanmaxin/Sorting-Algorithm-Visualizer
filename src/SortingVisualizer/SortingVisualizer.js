import { useState, useEffect } from 'react';
import './SortingVisualizer.css'
import BubbleSort from '../SortingAlgorithms/BubbleSort'
import MergeSort from '../SortingAlgorithms/MergeSort';
import DisplayArray from '../DisplayArray/DisplayArray';
import InsertionSort from '../SortingAlgorithms/InsertionSort'
import SelectionSort from '../SortingAlgorithms/SelectionSort'
import QuickSort from '../SortingAlgorithms/QuickSort'
import HeapSort from '../SortingAlgorithms/HeapSort';

let currentAnimation = { e1: null, e2: null, e3: null }
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
        currentAnimation = { e1: null, e2: null, e3: null }
        setmasterArray(array)
    })
    const handleBubbleSort = arr => {
        BubbleSort(arr, Animate)
    }
    const handleSelectionSort = arr => {
        SelectionSort(arr, Animate)
    }
    const handleInsertionSort = arr => {
        InsertionSort(arr, Animate)
    }
    const handleMergeSort = arr => {
        let arrayObject = {
            "arr": arr,
            "indexStart": null,
            "indexEnd": null
        }
        MergeSort(arrayObject, Animate)
    }
    const handleQuickSort = arr => {
        QuickSort(arr, 0, arr.length - 1, Animate)
    }
    const handleHeapSort = arr => {
        HeapSort(arr, Animate)
    }
    const Animate = (arr, animatedElements, isSwapping) => {
        currentAnimation = animatedElements
        isSorting = isSwapping
        setmasterArray([...arr])

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
            <DisplayArray masterArray={masterArray} currentAnimation={currentAnimation} />
            <div className="options">
                <button onClick={resetArray} disabled={isSorting}>Generate New Array</button>
                <button onClick={() => { handleBubbleSort(masterArray) }} disabled={isSorting}>Bubble Sort</button>
                <button onClick={() => { handleSelectionSort(masterArray) }} disabled={isSorting}>SelectionSort</button>
                <button onClick={() => { handleInsertionSort(masterArray) }} disabled={isSorting}>Insertion Sort</button>
                <button onClick={() => { handleMergeSort(masterArray) }} disabled={isSorting}>Merge Sort</button>
                <button onClick={() => { handleQuickSort(masterArray) }} disabled={isSorting}>Quick Sort</button>
                <button onClick={() => { handleHeapSort(masterArray) }} disabled={isSorting}>Heap Sort</button>
                <label htmlFor="array-size">Array Size</label>
                <input onChange={e => { setarraySize(e.target.value) }} type="range" min="10" max="300" value={arraySize} step="10" id="array-size" disabled={isSorting}></input>
            </div>
        </div>

    );
}

export default SortingVisualizer