import Sleep from "../Sleep";

const InsertionSort = async (arr,animateSwap) => {
    let i, key, j
    for (i = 1; i < arr.length; i++) {
        key = arr[i]
        j=i-1
        while (j>=0 && arr[j] >key ) {
            arr[j+1] = arr[j]
            await Sleep(4)
            animateSwap(arr,j+1,j,true)
            j = j - 1
        }
        arr[j+1] = key
        await Sleep(4)
        animateSwap(arr,j+1,i,true)
        
    }
    animateSwap(arr,-1,-1,false)
}

export default InsertionSort