import Sleep from '../Sleep'

const BubbleSort = async (arr, AnimateSwap, isSorting) => {
    const time = Math.floor(Math.pow((10000), 1 / 2))

    let sum = 0
    for (let i = 1; i < arr.length; i++) {
        sum += i
    }
    let interval = (10000 / sum)
    let counter = 0;
    let browserMinimum = 4

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            //console.time("animate")
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
            // console.log(interval)

            if (interval < browserMinimum) {
                counter += (interval)
                if (counter > browserMinimum) {


                    await Sleep(browserMinimum);
                    counter -= browserMinimum

                    //Subtract the estimate amount of time the swap takes
                    AnimateSwap(arr, j, (j + 1), true)
                    counter -= arr.length / 100 * 2
                }
            }
            else {
                await Sleep(interval);
                AnimateSwap(arr, j, (j + 1), true)
            }
            //let endTime = console.timeEnd("animate")
        }

    }
    AnimateSwap(arr, -1, -1, false)
    // console.timeEnd("BubbleSort")
}


export default BubbleSort