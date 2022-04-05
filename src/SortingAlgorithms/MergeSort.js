import Sleep from "../Sleep";

let indexAssigner = 0
let entireArrayAssigned= false
let entireArray = []

const MergeSort = async (arrayObject,animateCompare,animateMerge) => {
    if (!entireArrayAssigned) {
        entireArray= [...arrayObject.arr]
        entireArrayAssigned = true
    }
    console.log(entireArray)
    const Merge = async (leftObject, rightObject) => {
        let arrayObject = { "arr": [], "indexStart": null, "indexEnd": null }
        let li = 0
        let ri = 0
        while (leftObject.arr.length && rightObject.arr.length) {
            if (leftObject.arr[0] < rightObject.arr[0]) {
                arrayObject.arr.push(leftObject.arr.shift())
                await Sleep(4)
                animateCompare(entireArray,(leftObject.indexStart + li),true)
                li += 1
            }
            else {
                arrayObject.arr.push(rightObject.arr.shift())
                await Sleep(4)
                animateCompare(entireArray,(rightObject.indexStart + ri),true)
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
            
    
    let merge = await Merge(await MergeSort(leftObject,animateCompare,animateMerge), await MergeSort(arrayObject,animateCompare,animateMerge))
    for (let i = 0; i<merge.arr.length;i++) {
        entireArray[(merge.indexStart + i)] = merge.arr[i]
        await Sleep(4)
        animateCompare(entireArray,merge.indexStart + i,true)
        if ((merge.arr.length === entireArray.length) && (i===merge.arr.length - 1)) {
            await Sleep(4)
            animateCompare(entireArray,-1,true)
        }
    }
    return merge
}

export default MergeSort;