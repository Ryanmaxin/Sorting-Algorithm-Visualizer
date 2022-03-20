import Sleep from "../Sleep";

const Merge = (left, right) => {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        }
        else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}

const MergeSort = async (array,animateSwap) => {
    const half = array.length/2

    if(array.length < 2) {
        return array
    }
    const left = array.splice(0,half)
    let merged = Merge(MergeSort(left), MergeSort(array))
    animateSwap(merged)
    Sleep(100)
    return merged
}
 
export default MergeSort;