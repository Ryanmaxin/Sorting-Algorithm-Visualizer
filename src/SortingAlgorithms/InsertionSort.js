import Sleep from "../Sleep";

const InsertionSort = async (arr, animate) => {
    let i, key, j
    for (i = 1; i < arr.length; i++) {
        key = arr[i]
        j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            await Sleep(4)
            animate(arr, { e1: j + 1, e2: j }, true)
            j = j - 1
        }
        arr[j + 1] = key
        await Sleep(4)
        animate(arr, { e1: j + 1, e2: i }, true)

    }
    animate(arr, { e1: null, e2: null }, false)
}

export default InsertionSort