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
import { Button, Slider, Select, MenuItem, InputLabel } from '@mui/material';

let currentAnimation = { e1: null, e2: null, e3: null }
let isSorting = false

const SortingVisualizer = () => {
    const [masterArray, setmasterArray] = useState([])
    const [arraySize, setarraySize] = useState(100)
    const [animationSpeed, setanimationSpeed] = useState(4)
    const [pivot, setPivot] = useState('Median of Three')
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
    const sortButton = {
        flex: "1 1 auto",
        borderRadius: "4rem",
        width: "100%",
        height: "100%",
        textTransform: "none"


    }
    return (
        <div className="content">
            <DisplayArray masterArray={masterArray} currentAnimation={currentAnimation} />
            <div className='interaction'>
                <Button className="generate" variant="contained" onClick={resetArray} disabled={isSorting}>Generate New Array</Button>
                <div className="break"></div>
                <div className="sorts">
                    <div className="sortButton">
                        <Button sx={sortButton} variant="contained" onClick={() => { handleBubbleSort(masterArray) }} disabled={isSorting}>Bubble Sort</Button >
                    </div>
                    <div className="sortButton">
                        <Button sx={sortButton} variant="contained" onClick={() => { handleSelectionSort(masterArray) }} disabled={isSorting}>Selection Sort</Button>
                    </div>
                    <div className="sortButton">
                        <Button sx={sortButton} variant="contained" onClick={() => { handleInsertionSort(masterArray) }} disabled={isSorting}>Insertion Sort</Button >
                    </div>
                    <div className="sortButton">
                        <Button sx={sortButton} variant="contained" onClick={() => { handleMergeSort(masterArray) }} disabled={isSorting}>Merge Sort</Button >
                    </div>
                    <div className="sortButton">
                        <Button sx={sortButton} variant="contained" onClick={() => { handleQuickSort(masterArray) }} disabled={isSorting}>Quick Sort</Button >
                    </div>
                    <div className="sortButton">
                        <Button sx={sortButton} variant="contained" onClick={() => { handleHeapSort(masterArray) }} disabled={isSorting}>Heap Sort</Button >
                    </div>
                </div>
                <div className="break"></div>
                <div className="options">
                    <InputLabel id="size">Array Size and Speed</InputLabel>
                    <Slider onChange={e => { setarraySize(e.target.value) }} step="10" max="300" disabled={isSorting} valueLabelDisplay="on" value={arraySize} id="size" />
                    <InputLabel id="pivot">Pivot Selection</InputLabel>
                    <Select onChange={e => { setPivot(e.target.value) }} value={pivot} autoWidth="false" id="pivot">
                        <MenuItem value="Median of Three">Median of Three</MenuItem>
                        <MenuItem value="Random">Random</MenuItem>
                        <MenuItem value="First">First</MenuItem>
                        <MenuItem value="Last">Last</MenuItem>
                    </Select>
                </div>
            </div>
        </div>

    );
}

export default SortingVisualizer