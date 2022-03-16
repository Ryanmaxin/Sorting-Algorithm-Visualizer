const BubbleSort = (arr,AnimateCompare,AnimateSwap) => {
    for (let i=0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            AnimateCompare(arr)
            setTimeout(()=>{
                if (arr[j] > arr[j+1]) {
                    // setTimeout(()=>{
                        let temp = arr[j]
                        arr[j] = arr[j+1]
                        arr[j+1] = temp
                        AnimateSwap(arr,j,(j+1))
                    // },10)
                }
            },1000)
            
            
        }
    }
    return arr
}

export default BubbleSort