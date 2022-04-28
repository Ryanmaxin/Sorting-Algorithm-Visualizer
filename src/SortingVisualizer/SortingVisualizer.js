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
import * as React from 'react';
import { Button, Slider, Select, MenuItem, InputLabel } from '@mui/material';

let currentAnimation = { e1: null, e2: null, e3: null }
let isSorting = false
let isReset = true
let currentSort = null
let isSorted = false
let animateType = "none"
let isSkipped = false
let counter = 0;
let isSlow = false
let ratio = 1;


const SortingVisualizer = () => {
    const [masterArray, setmasterArray] = useState([])
    const [arraySize, setarraySize] = useState(84)
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
        isReset = true
        isSorted = false
        currentSort = null
        isSkipped = false
        isSlow = false
        ratio = 1
        setmasterArray(array)
    })
    const handleBubbleSort = arr => {
        currentSort = "BubbleSort"
        isSlow = true
        BubbleSort(arr, Animate)
    }
    const handleSelectionSort = arr => {
        isSlow = true
        currentSort = "SelectionSort"
        SelectionSort(arr, Animate)
    }
    const handleInsertionSort = arr => {
        isSlow = true
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
        QuickSort(arr, 0, arr.length-1, Animate, pivot)
    }
    const handleHeapSort = arr => {
        currentSort = "HeapSort"
        HeapSort(arr, Animate)
    }
    const handleSkip = ()=>{
        isSkipped = true
    }
    const Animate = async (arr, animatedElements, isSwapping, type = "none") => {
        currentAnimation = animatedElements
        animateType = type
        isSorting = isSwapping
        isReset = false
        if (!isSorting) {
            isSorted = true
            setmasterArray([...arr])
        }
        if (!isSkipped && isSwapping) {
            if (animateType==="verify") {
                isSlow = false
                setmasterArray([...arr])
                await Sleep()
            }
            else if (((arraySize>=128) && (animateType="compare"))) {
                animateType = "parser"
                counter +=1 
                if (counter % ratio === 0) {
                counter = 0
                    setmasterArray([...arr])
                    await Sleep()
                }
            }
            else if (arraySize <128) {
                counter +=1 
            if (counter % ratio === 0) {
                counter = 0
                    setmasterArray([...arr])
                    await Sleep()
            }
            }
        }
        else if (!isSwapping) {
            setmasterArray([...arr])
        }
    }
    const Sleep = () => {
        let ms = null
        switch (arraySize) {
            case 300:
                ms = 4
                if (isSlow) {
                    ratio = 100
                }
                else {
                    ratio = 5
                }
                break;
            case 228:
                if (isSlow) {
                    ms = 4
                    ratio = 50
                }
                else {
                    ms = 4
                    ratio = 1
                }
                break;
            case 156:
                if (isSlow) {
                    ms = 4
                    ratio = 15
                }
                else {
                    ms = 10
                    ratio = 1
                }
                break;
            case 84:
                if (isSlow) {
                    ms = 4
                    ratio = 3
                }
                else {
                    ms = 50
                    ratio = 1
                }
                break;
            case 12:
                ratio = 1
                ms = 500
                if (isSlow) {
                    ms = 250
                }
                else {
                    ms = 500
                }
                break;
            default:
                break;
        }
            return new Promise(resolve => {
                setTimeout(resolve, ms)
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
            {isSorting && <Button sx={skip} variant="contained" onClick={()=>{handleSkip()}}>Skip To End</Button>}
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
                    <div className="legendBlock">
                        <div className="colorDisplay" id="swap">
                            <p>Swap</p>
                        </div>
                        <div className="colorDisplay" id="compare">
                            <p>Compare</p>
                        </div>
                        <div className="colorDisplay" id="insert">
                            <p>Insert</p>
                        </div>
                        <div className="colorDisplay" id="pivots">
                            <p>Pivot</p>
                        </div>
                        <div className="colorDisplay" id="parser">
                            <p>Parser</p>
                        </div>
                        <div className="colorDisplay" id="verify">
                            <p>Verify</p>
                        </div>
                    </div>
                </div>
                <div className="break"></div>
                {isReset && <div className="options">
                    <div className="option">
                    <InputLabel id="size">Array Size</InputLabel>
                    <Slider size="small" sx={slideSettings} onChange={e => { setarraySize(e.target.value) }} step={72} max={300} min={12} disabled={!isReset} valueLabelDisplay="on" value={arraySize} id="size" />
                    </div>
                    <div className="option">
                    <InputLabel id="pivot">Pivot Selection</InputLabel>
                    <Select sx={slideSettings} onChange={e => { setPivot(e.target.value) }} value={pivot} autoWidth={false} id="pivot" disabled={!isReset}>
                        <MenuItem value="Median of Three">Median of Three</MenuItem>
                        <MenuItem value="Random">Random</MenuItem>
                        <MenuItem value="First">First</MenuItem>
                    </Select>
                    </div>
                    <div className="option">
                    
                    </div>
                    
                    
                </div>}
            </div>
        </div>

    );
}

export default SortingVisualizer