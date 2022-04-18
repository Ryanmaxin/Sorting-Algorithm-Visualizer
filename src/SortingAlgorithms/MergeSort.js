import Sleep from "../Sleep";

let indexAssigner = 0
let entireArrayAssigned = false
let entireArray = []

const MergeSort = async (arrayObject, Animate) => {
    if (!entireArrayAssigned) {
        entireArray = [...arrayObject.arr]
        entireArrayAssigned = true
    }
    const Merge = async (leftObject, rightObject) => {
        let arrayObject = { "arr": [], "indexStart": null, "indexEnd": null }
        let li = 0
        let ri = 0
        while (leftObject.arr.length && rightObject.arr.length) {
            if (leftObject.arr[0] < rightObject.arr[0]) {
                arrayObject.arr.push(leftObject.arr.shift())
                await Sleep(4)
                Animate(entireArray, { e1: leftObject.indexStart + li }, true)
                li += 1
            }
            else {
                arrayObject.arr.push(rightObject.arr.shift())
                await Sleep(4)
                Animate([...entireArray], { e1: rightObject.indexStart + ri }, true)
                ri += 1
            }
        }
        const newArray = [...(arrayObject.arr), ...(leftObject.arr), ...(rightObject.arr)]
        arrayObject.arr = newArray
        arrayObject.indexStart = leftObject.indexStart
        arrayObject.indexEnd = rightObject.indexEnd


        return arrayObject
    }
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


    let merge = await Merge(await MergeSort(leftObject, Animate), await MergeSort(arrayObject, Animate))
    for (let i = 0; i < merge.arr.length; i++) {
        entireArray[(merge.indexStart + i)] = merge.arr[i]
        await Sleep(4)
        //console.log(entireArray)
        Animate([...entireArray], { e1: merge.indexStart + i }, true)
        if ((merge.arr.length === entireArray.length) && (i === merge.arr.length - 1)) {
            Animate([...entireArray], { e1: null }, false)
            entireArrayAssigned = false
            entireArray = []
            indexAssigner = 0
        }
    }
    return merge
}

export default MergeSort;