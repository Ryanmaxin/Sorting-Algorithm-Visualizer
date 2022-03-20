import Sleep from '../Sleep'

const BubbleSort = async (arr,AnimateCompare,AnimateSwap,isSorting) => {
    const scaler = Math.floor(Math.pow((arr.length),1/2))
    console.log(scaler)
    for (let i=0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
                if (arr[j] > arr[j+1]) {
                        let temp = arr[j]
                        arr[j] = arr[j+1]
                        arr[j+1] = temp
                }
                if ((j%scaler)===0) {
                    await Sleep(1)
                    AnimateSwap(arr,j,(j+1),true)
                }
        }
    }
    AnimateSwap(arr,-1,-1,false)
}

export default BubbleSort