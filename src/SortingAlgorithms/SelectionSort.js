import Sleep from "../Sleep";
import Swap from "../Swap"

const SelectionSort = async (arr,AnimateSwap) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            await Sleep(4)
            AnimateSwap(arr,j,min,true)
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min!==i) {
            Swap(arr,min,i)
            await Sleep(4)
            AnimateSwap(arr,i,min,true)
        }
    }
    AnimateSwap(arr,-1,-1,false)
}
 
export default SelectionSort;