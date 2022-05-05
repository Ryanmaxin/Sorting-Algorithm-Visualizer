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
import { Button, Slider, Select, MenuItem, InputLabel, Tooltip } from '@mui/material';

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
        QuickSort(arr, 0, arr.length - 1, Animate, pivot)
    }
    const handleHeapSort = arr => {
        currentSort = "HeapSort"
        HeapSort(arr, Animate)
    }
    const handleSkip = () => {
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
            if (animateType === "verify") {
                isSlow = false
                setmasterArray([...arr])
                await Sleep()
            }
            else if (((arraySize >= 128) && (animateType = "compare"))) {
                animateType = "parser"
                counter += 1
                if (counter % ratio === 0) {
                    counter = 0
                    setmasterArray([...arr])
                    await Sleep()
                }
            }
            else if (arraySize < 128) {
                counter += 1
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
                    ratio = 2
                }
                break;
            case 156:
                if (isSlow) {
                    ms = 4
                    ratio = 15
                }
                else {
                    ms = 4
                    ratio = 1
                }
                break;
            case 84:
                if (isSlow) {
                    ms = 4
                    ratio = 3
                }
                else {
                    ms = 25
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
        flex: "1 1 30%",
        borderRadius: "4rem",
        width: "100%",
        height: "100%",
        textTransform: "none",
        padding: "0 ",
        fontFamily: "'Source Sans Pro', sans-serif",
        minWidth: "30%",
        backgroundColor: "#3c6e71",
        ':hover': {
            backgroundColor: "#284b63"
        }

    }
    const generate = {
        borderRadius: "0",
        height: "100%",
        width: "100%",
        textTransform: "none",
        minWidth: "0",
        fontFamily: "'Source Sans Pro', sans-serif",
        backgroundColor: "#3c6e71",
        ':hover': {
            backgroundColor: "#284b63"
        }

    }
    const skip = {
        position: "fixed",
        top: "0.5rem",
        left: "50%",
        transform: "translate(-50%, 0)",
        fontFamily: "'Source Sans Pro', sans-serif",
        backgroundColor: "#3c6e71",
        ':hover': {
            backgroundColor: "#284b63"
        }
    }

    const slideSettings = {
        width: {
            xxs: "75%",
            xs: "80%",
            sm: "85%",
            md: "90%",
            lg: "95%",
            xl: "95%"


        },

        fontFamily: "'Source Sans Pro', sans-serif",
        color: "#3c6e71",
        // padding: "0.5rem"
        margin: "auto",
        overflow: "visible",
        ':hover': {
            color: "#284b63"
        }
    }
    const selectSettings = {
        // minWidth: "10.8rem",
        fontFamily: "'Source Sans Pro', sans-serif",
        padding: "0",
        '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#3c6e71',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#284b63',
        },
        ':hover': {
            borderColor: "#284b63"
        }
    }
    const selectorSettings = {
        fontFamily: "'Source Sans Pro', sans-serif",

    }
    const fontSetter = {
        fontFamily: "'Source Sans Pro', sans-serif",
        color: "black"
    }
    return (
        <div className="content">
            {isSorting && <Button sx={skip} variant="contained" onClick={() => { handleSkip() }}>Skip To End</Button>}
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
                        <Tooltip sx={fontSetter} title="Swap the value of two elements of the array">
                            <div className="colorDisplay" id="swap">
                                <p>Swap</p>
                            </div>
                        </Tooltip>
                        <Tooltip sx={fontSetter} title="Compare if some condition is passed for two elements" disableInteractive>
                            <div className="colorDisplay" id="compare">
                                <p>Compare</p>
                            </div>
                        </Tooltip>
                        <Tooltip sx={fontSetter} title="Insert a value from an auxillery array or variable that was previously stored" disableInteractive>
                            <div className="colorDisplay" id="insert">
                                <p>Insert</p>
                            </div>
                        </Tooltip>
                        <Tooltip sx={fontSetter} title="In this implementation of Quicksort, the pivot is the element that we designate to partition the array, making each element on the left smaller, and each on the right larger" disableInteractive>
                            <div className="colorDisplay" id="pivots">
                                <p>Pivot</p>
                            </div>
                        </Tooltip>
                        <Tooltip sx={fontSetter} title="On faster animations (larger array), the 'parser' is used to simplify the sort, as individual colors can not be distinguished, and the constant flashing can become an eyesore" disableInteractive>
                            <div className="colorDisplay" id="parser">
                                <p>Parser</p>
                            </div>
                        </Tooltip>
                        <Tooltip sx={fontSetter} title="Verify that the array is sorted" disableInteractive>
                            <div className="colorDisplay" id="verify">
                                <p>Verify</p>
                            </div>
                        </Tooltip>
                    </div>
                </div>
                {isReset && <div className="break"></div>}
                {isReset && <div className="options">
                    <div className="option">
                        <InputLabel sx={fontSetter} id="size">Array Size</InputLabel>
                        <Slider marks size="small" sx={slideSettings} onChange={e => { setarraySize(e.target.value) }} step={72} max={300} min={12} disabled={!isReset} value={arraySize} id="size" />
                    </div>
                    <div className="optionComponent">
                        <InputLabel sx={fontSetter} id="pivot">Pivot</InputLabel>
                    </div>
                    <div className="optionComponent">
                        <Select SelectDisplayProps={{ style: { padding: "0.5rem 32px 0.5rem 0.5rem" } }} sx={selectSettings} onChange={e => { setPivot(e.target.value) }} value={pivot} id="pivot" disabled={!isReset}>
                            <MenuItem sx={selectorSettings} value="Median of Three">Median of Three</MenuItem>
                            <MenuItem sx={selectorSettings} value="Random">Random</MenuItem>
                            <MenuItem sx={selectorSettings} value="First">First</MenuItem>
                        </Select>
                    </div>

                </div>}
            </div>
        </div>

    );
}

export default SortingVisualizer