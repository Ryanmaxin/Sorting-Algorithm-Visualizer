import Sleep from "../Sleep";
import Swap from "../Swap";


const QuickSort = async (arr, left, right, Animate) => {
    const partition = async (arr, left, right) => {
        let pivotIndex = Math.floor((right + left) / 2)
        let pivot = arr[pivotIndex], //middle element
            i = left, //left pointer
            j = right; //right pointer
        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            if (i <= j) {
                Swap(arr, i, j); //swapping two elements
                // console.log(entireArray)
                await Sleep(4)

                // console.log(pivotIndex)
                Animate(arr, { e1: i, e2: j, e3: pivotIndex }, true)
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
            await QuickSort(arr, left, index - 1, Animate);
        }
        if (index < right) { //more elements on the right side of the pivot
            await QuickSort(arr, index, right, Animate);
        }
    }
    if ((right === arr.length - 1) && (left === 0)) {
        Animate([...arr], { e1: null, e2: null, e3: null }, false)
    }
    return arr;
}

export default QuickSort;