import Swap from '../Swap'
import Verify from '../Verify'

const BubbleSort = (arr, Animate) => {
    // const time = Math.floor(Math.pow((10000), 1 / 2))

    // let sum = 0
    // for (let i = 1; i < arr.length; i++) {
    //     sum += i
    // }
    // let interval = (10000 / sum)
    // let counter = 0;
    // let browserMinimum = 4

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            //console.time("animate")

            Animate(arr, { e1: j, e2: (j + 1) }, true, "compare")
            if (arr[j] > arr[j + 1]) {
                Swap(arr, j, j + 1)
                Animate(arr, { e1: j, e2: (j + 1) }, true, "swap")
            }
            // console.log(interval)

            // if (interval < browserMinimum) {
            //     counter += (interval)
            //     if (counter > browserMinimum) {


            // await Sleep(browserMinimum);
            // counter -= browserMinimum

            //Subtract the estimate amount of time the swap takes
            // counter -= arr.length / 100 * 2
            //     }
            // }
            // else {
            //     // await Sleep(interval);
            //     await Animate(arr, { e1: j, e2: (j + 1) }, true)
            // }
            //let endTime = console.timeEnd("animate")
        }

    }
    Animate(arr, { e1: null, e2: null }, false, "none")
    Verify(arr, Animate)
    // console.timeEnd("BubbleSort")
}


export default BubbleSort