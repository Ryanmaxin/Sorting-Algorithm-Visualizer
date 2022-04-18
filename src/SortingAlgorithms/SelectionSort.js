import Sleep from "../Sleep";
import Swap from "../Swap"

const SelectionSort = async (arr, Animate) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            await Sleep(4)
            Animate(arr, { e1: j, e2: min }, true)
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            Swap(arr, min, i)
            await Sleep(4)
            Animate(arr, { e1: i, e2: min }, true)
        }
    }
    Animate(arr, { e1: null, e2: null }, false)
}

export default SelectionSort;