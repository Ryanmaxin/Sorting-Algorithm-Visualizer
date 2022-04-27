import Verify from "../Verify";

const InsertionSort = async (arr, animate) => {
    let i, key, j
    for (i = 1; i < arr.length; i++) {
        key = arr[i]
        j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            await animate(arr, { e1: j + 1, e2: j }, true,"swap")
            j = j - 1
        }
        arr[j + 1] = key
        await animate(arr, { e1: j + 1, e2: i }, true,"swap")

    }
    await animate(arr, { e1: null, e2: null }, false)
    await Verify(arr, animate)
}

export default InsertionSort