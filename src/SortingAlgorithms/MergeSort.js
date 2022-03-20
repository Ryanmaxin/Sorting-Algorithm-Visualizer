import Sleep from "../Sleep";

let indexAssigner = 0

const Merge = (leftObject, rightObject) => {
    let arrayObject = { "arr": [], "indexStart": null, "indexEnd": null }
    let li = 0
    let ri = 0
    while (leftObject.arr.length && rightObject.arr.length) {
        if (leftObject.arr[0] < rightObject.arr[0]) {
            arrayObject.arr.push(leftObject.arr.shift())
            li += 1
        }
        else {
            arrayObject.arr.push(rightObject.arr.shift())
            ri += 1
        }
    }
    const newArray = [...(arrayObject.arr), ...(leftObject.arr), ...(rightObject.arr)]
    arrayObject.arr = newArray
    arrayObject.indexStart = leftObject.indexStart
    arrayObject.indexEnd += rightObject.indexEnd


    return arrayObject
}


const MergeSort = (arrayObject) => {
    const half = arrayObject.arr.length / 2
    if (arrayObject.arr.length < 2) {
        arrayObject.indexStart = indexAssigner
        arrayObject.indexEnd = indexAssigner
        indexAssigner += 1
        return arrayObject
    }
    const left = arrayObject.arr.splice(0, half)
    const leftObject = {
        "arr": left,
        "indexStart": null,
        "indexEnd": null
    }
    let merged = Merge(MergeSort(leftObject), MergeSort(arrayObject))
    return merged
}

export default MergeSort;