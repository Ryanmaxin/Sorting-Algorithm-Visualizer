import Swap from "../Swap"
import Verify from "../Verify";

const SelectionSort = async (arr, Animate) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            await Animate(arr, { e1: j, e2: min }, true,"compare",true)
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            Swap(arr, min, i)
            await Animate(arr, { e1: i, e2: min }, true,"swap",true)
        }
    }
    await Animate(arr, { e1: null, e2: null }, false,"none")
    await Verify(arr, Animate)
}

export default SelectionSort;