import Verify from "../Verify";

const InsertionSort = async (arr, animate) => {
    let i, key, j
    for (i = 1; i < arr.length; i++) {
        key = arr[i]
        j = i - 1
        while (j >= 0 && arr[j] > key) {
            await animate(arr, { e1: j, e2: j+1 }, true,"compare",true)
            arr[j + 1] = arr[j]
            await animate(arr, { e1: j, e2: j+1 }, true,"swap",true)
            j = j - 1
        }
        if (j>=0) {
            await animate(arr, { e1: j, e2: j+1 }, true,"compare",true) //compare even if not true
        }
        arr[j + 1] = key
        await animate(arr, { e1: j + 1}, true,"insert",true)

    }
    await animate(arr, { e1: null, e2: null }, false,"none")
    await Verify(arr, animate)
}

export default InsertionSort