import Sleep from "../Sleep";
import Swap from "../Swap";

let entireArrayAssigned= false
let entireArray = []

const QuickSort = async (arr, left, right,animateSwap) => {
    if (!entireArrayAssigned) {
        entireArray= [...arr]
        entireArrayAssigned = true
    }
    const partition = async (arr, left, right) => {
        let pivot   = arr[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            if (i <= j) {
                Swap(arr, i, j); //sawpping two elements
                Sleep(4)
                animateSwap(entireArray,i,j,true)
                i++;
                j--;
            }
        }
        return i;
    }
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            QuickSort(arr, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            QuickSort(arr, index, right);
        }
    }
    return arr;
}
 
export default QuickSort;