import Sleep from '../Sleep'

const BubbleSort = async (arr,AnimateCompare,AnimateSwap,isSorting) => {
    for (let i=0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            // AnimateCompare(arr,j,(j+1))
            // await Sleep(1)
                if (arr[j] > arr[j+1]) {
                        let temp = arr[j]
                        arr[j] = arr[j+1]
                        arr[j+1] = temp
                }
                if (j%15===0) {
                    await Sleep(1)
                    AnimateSwap(arr,j,(j+1),true)
                }
        }
    }
    AnimateSwap(arr,-1,-1,false)
}

export default BubbleSort