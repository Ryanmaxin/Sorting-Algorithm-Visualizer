import { useState, useEffect } from 'react';
import './SortingVisualizer.css'
import BubbleSort from '../SortingAlgorithms/BubbleSort'
import MergeSort from '../SortingAlgorithms/MergeSort';
import DisplayArray from '../DisplayArray/DisplayArray';
import InsertionSort from '../SortingAlgorithms/InsertionSort'
import SelectionSort from '../SortingAlgorithms/SelectionSort'
import QuickSort from '../SortingAlgorithms/QuickSort'
import HeapSort from '../SortingAlgorithms/HeapSort';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider'

let currentAnimation = { e1: null, e2: null, e3: null }
let isSorting = false

const SortingVisualizer = () => {
    const [masterArray, setmasterArray] = useState([])
    const [arraySize, setarraySize] = useState(100)
    const [animationSpeed, setanimationSpeed] = useState(4)
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
        BubbleSort(arr, Animate, animationSpeed)
    }
    const handleSelectionSort = arr => {
        SelectionSort(arr, Animate, animationSpeed)
    }
    const handleInsertionSort = arr => {
        InsertionSort(arr, Animate, animationSpeed)
    }
    const handleMergeSort = arr => {
        let arrayObject = {
            "arr": arr,
            "indexStart": null,
            "indexEnd": null
        }
        MergeSort(arrayObject, Animate, animationSpeed)
    }
    const handleQuickSort = arr => {
        QuickSort(arr, 0, arr.length - 1, Animate, animationSpeed)
    }
    const handleHeapSort = arr => {
        HeapSort(arr, Animate, animationSpeed)
    }
    const Animate = (arr, animatedElements, isSwapping) => {
        currentAnimation = animatedElements
        isSorting = isSwapping
        setmasterArray([...arr])

    }
    return (
        <div className="content">
            <DisplayArray masterArray={masterArray} currentAnimation={currentAnimation} />
            <div className='interaction'>
                <div className="generate">
                    <Button variant="contained" onClick={resetArray} disabled={isSorting}>Generate New Array</Button>
                </div>
                <div className="sorts">

                    <div className="sortButton">
                        <Button variant="contained" onClick={() => { handleBubbleSort(masterArray) }} disabled={isSorting}>Bubble Sort</Button >
                    </div>
                    <div className="sortButton">
                        <Button variant="contained" onClick={() => { handleSelectionSort(masterArray) }} disabled={isSorting}>SelectionSort</Button>
                    </div>
                    <div className="sortButton">
                        <Button variant="contained" onClick={() => { handleInsertionSort(masterArray) }} disabled={isSorting}>Insertion Sort</Button >
                    </div>
                    <div className="sortButton">
                        <Button variant="contained" onClick={() => { handleMergeSort(masterArray) }} disabled={isSorting}>Merge Sort</Button >
                    </div>
                    <div className="sortButton">
                        <Button variant="contained" onClick={() => { handleQuickSort(masterArray) }} disabled={isSorting}>Quick Sort</Button >
                    </div>
                    <div className="sortButton">
                        <Button variant="contained" onClick={() => { handleHeapSort(masterArray) }} disabled={isSorting}>Heap Sort</Button >
                    </div>
                </div>
                <div className="options">
                    <Slider onChange={e => { setarraySize(e.target.value) }} step="10" max="300" disabled={isSorting} valueLabelDisplay="on" value={arraySize} />
                    <Slider onChange={e => { setanimationSpeed(e.target.value) }} step="10" max="300" marks disabled={isSorting} valueLabelDisplay="on" value={animationSpeed} />
                </div>
            </div>
        </div>

    );
}

export default SortingVisualizer