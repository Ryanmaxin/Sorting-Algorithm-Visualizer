import { useState, useEffect } from 'react';
import './SortingVisualizer.css'
import BubbleSort from '../SortingAlgorithms/BubbleSort'
import MergeSort from '../SortingAlgorithms/MergeSort';
import DisplayArray from '../DisplayArray/DisplayArray';
import InsertionSort from '../SortingAlgorithms/InsertionSort'
import SelectionSort from '../SortingAlgorithms/SelectionSort'
import QuickSort from '../SortingAlgorithms/QuickSort'
import HeapSort from '../SortingAlgorithms/HeapSort';
import Descriptions from '../Descriptions';
import Verify from '../Verify';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Button, Slider, Select, MenuItem, InputLabel } from '@mui/material';

let currentAnimation = { e1: null, e2: null, e3: null }
let isSorting = false
let isReset = true
let currentSort = null
let isSorted = false
let animateType = "none"
let isSkipped = false
let id


const SortingVisualizer = () => {
    const [masterArray, setmasterArray] = useState([])
    const [arraySize, setarraySize] = useState(100)
    const [pivot, setPivot] = useState('Median of Three')
    const [sortingSpeed, setsortingSpeed] = useState(2)
    useEffect(() => {
        resetArray()
    }, [arraySize])
    const resetArray = (() => {
        const array = []
        for (let i = 0; i < arraySize; i++) {
            array.push((Math.random() * (76) + 5))
        }
        currentAnimation = { e1: null, e2: null, e3: null }
        isReset = true
        isSorted = false
        currentSort = null
        isSkipped = false
        setmasterArray(array)
    })
    const handleBubbleSort = arr => {
        currentSort = "BubbleSort"
        BubbleSort(arr, Animate)
    }
    const handleSelectionSort = arr => {
        currentSort = "SelectionSort"
        SelectionSort(arr, Animate)
    }
    const handleInsertionSort = arr => {
        currentSort = "InsertionSort"
        InsertionSort(arr, Animate)
    }
    const handleMergeSort = arr => {
        let arrayObject = {
            "arr": arr,
            "indexStart": null,
            "indexEnd": null
        }
        currentSort = "MergeSort"
        MergeSort(arrayObject, Animate)
    }
    const handleQuickSort = arr => {
        currentSort = "QuickSort"
        QuickSort(arr, 0, arr.length - 1, Animate, pivot)
    }
    const handleHeapSort = arr => {
        currentSort = "HeapSort"
        HeapSort(arr, Animate)
    }
    const Animate = (arr, animatedElements, isSwapping, type = "none") => {
        currentAnimation = animatedElements
        animateType = type
        isSorting = isSwapping
        isReset = false
        if (!isSorting) {
            isSorted = true
        }
        // if (isSkipped) {
        //     clearTimeout(id)
        //     console.log("HELLO")
        // }
        setmasterArray([...arr])
        console.log("HELLO")
        // if (isSwapping && !isSkipped) {
        //     await Sleep()
        // }
    }
    const Sleep = () => {
        let ms = null
        switch (sortingSpeed) {
            case 0:
                ms = 4
                break;
            case 1:
                ms = 4
                break;
            case 2:
                ms = 4
                break;
            case 3:
                ms = 50
                break;
            case 4:
                ms = 250
                break;
            default:
                break;
        }
            return new Promise(resolve => {
                id = setTimeout(resolve, ms)
            });
    }

    const sortButton = {
        flex: "1 1 auto",
        borderRadius: "4rem",
        width: "100%",
        height: "100%",
        textTransform: "none",
        padding: "0"
    }
    const generate = {
        borderRadius: "0",
        height: "100%",
        width: "100%"
    }
    const skip = {
        position: "absolute",
        top: "0.5rem",
        left: "45%",
        right: "45%"
    }
    const slideSettings = {
        // width: "50%"
    }
    return (
        <div className="content">
            {isSorting && <Button sx={skip} variant="contained" onClick={async ()=>{isSkipped=true}}>Skip To End</Button>}
            <DisplayArray masterArray={masterArray} currentAnimation={currentAnimation} isVerifying={isSorted} type={animateType} />
            <div className='interaction'>
                <div className="generator">
                    <Button sx={generate} variant="contained" onClick={resetArray} disabled={isSorting}>Generate New Array</Button>
                </div>
                <div className="break"></div>
                {isReset && <div className="sorts">
                    <div className="sortButton">
                        <Button sx={sortButton} variant="contained" onClick={() => { handleBubbleSort(masterArray) }} disabled={!isReset}>Bubble Sort</Button >
                    </div>
                    <div className="sortButton">
                        <Button sx={sortButton} variant="contained" onClick={() => { handleSelectionSort(masterArray) }} disabled={!isReset}>Selection Sort</Button>
                    </div>
                    <div className="sortButton">
                        <Button sx={sortButton} variant="contained" onClick={() => { handleInsertionSort(masterArray) }} disabled={!isReset}>Insertion Sort</Button >
                    </div>
                    <div className="sortButton">
                        <Button sx={sortButton} variant="contained" onClick={() => { handleHeapSort(masterArray) }} disabled={!isReset}>Heap Sort</Button >
                    </div>
                    <div className="sortButton">
                        <Button sx={sortButton} variant="contained" onClick={() => { handleMergeSort(masterArray) }} disabled={!isReset}>Merge Sort</Button >
                    </div>
                    <div className="sortButton">
                        <Button sx={sortButton} variant="contained" onClick={() => { handleQuickSort(masterArray) }} disabled={!isReset}>Quick Sort</Button >
                    </div>
                </div>}

                {!isReset && <div className="about">
                    <h2>About This Algorithm:</h2>
                    {currentSort && <Descriptions sortType={currentSort} />}
                </div>}
                <div className="break"></div>
                <div className="legend">
                    <h2>Legend</h2>
                </div>
                <div className="break"></div>
                {isReset && <div className="options">
                    <div className="option">
                    <InputLabel id="size">Array Size</InputLabel>
                    <Slider size="small" sx={slideSettings} onChange={e => { setarraySize(e.target.value) }} step={10} max={300} min={10} disabled={!isReset} valueLabelDisplay="on" value={arraySize} id="size" />
                    </div>
                    <div className="option">
                    <InputLabel id="pivot">Pivot Selection</InputLabel>
                    <Select sx={slideSettings} onChange={e => { setPivot(e.target.value) }} value={pivot} autoWidth={false} id="pivot" disabled={!isReset}>
                        <MenuItem value="Median of Three">Median of Three</MenuItem>
                        <MenuItem value="Random">Random</MenuItem>
                        <MenuItem value="First">First</MenuItem>
                        <MenuItem value="Last">Last</MenuItem>
                    </Select>
                    </div>
                    <div className="option">
                    <InputLabel id="speed">Sorting Speed</InputLabel>
                    <Slider size="small" sx={slideSettings} onChange={e => { setsortingSpeed(e.target.value) }} marks step={1} max={4} min={0} disabled={!isReset} valueLabelDisplay="on" value={sortingSpeed} id="speed" />
                    </div>
                    
                    
                </div>}
            </div>
        </div>

    );
}

export default SortingVisualizer