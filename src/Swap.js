const Swap = (arr,i,j) =>{
    let temp = arr[i]
    arr[i]= arr[j]
    arr[j] = temp
    return arr
}

export default Swap