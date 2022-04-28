import Swap from "../Swap";
import Verify from "../Verify";


const QuickSort = async (arr, left, right, Animate, pivotType) => {
    const partition = async (arr, left, right) => {
        //let pivotIndex = Math.floor((right + left) / 2)
        let pivotIndex
        if (pivotType === "Median of Three") {
            const n1 = Math.floor(Math.random() * (right - 1 - left) + left)
            const n2 = Math.floor(Math.random() * (right - 1 - left) + left)
            const n3 = Math.floor(Math.random() * (right - 1 - left) + left)
            const nums = [n1, n2, n3].sort((a, b) => a - b)
            pivotIndex = nums[1]
        }
        else if (pivotType === "Random") {
            pivotIndex = Math.floor(Math.random() * (right - 1 - left) + left)
        }
        else if (pivotType === "First") {
            pivotIndex = left
        }
        let pivot = arr[pivotIndex], //middle element
            i = left, //left pointer
            j = right; //right pointer
        while (i <= j) {
            while (arr[i] < pivot) {
                await Animate(arr, { e1: i, e2: j, e3: pivotIndex }, true,"compare")
                i++;
            }
            while (arr[j] > pivot) {
                await Animate(arr, { e1: i, e2: j, e3: pivotIndex }, true,"compare")
                j--;
            }
            if (i <= j) {
                Swap(arr, i, j); //swapping two elements
                await Animate(arr, { e1: i, e2: j, e3: pivotIndex }, true,"swap")
                i++;
                j--;
            }
        }
        return i;
    }
    let index;
    if (arr.length > 1) {
        index = await partition(arr, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            await QuickSort(arr, left, index - 1, Animate, pivotType);
        }
        if (index < right) { //more elements on the right side of the pivot
            await QuickSort(arr, index, right, Animate, pivotType);
        }
    }
    if ((right === arr.length - 1) && (left === 0)) {
        await Animate([...arr], { e1: null, e2: null, e3: null }, false,"none")
        await Verify(arr, Animate)
    }
    return arr;
}

export default QuickSort;