
const Verify = async (masterArray, Animate) => {
  for (let index = 0; index < masterArray.length; index += 1) {
    await Animate([...masterArray], { e1: index }, true, true)
    if (index === masterArray.length - 1) {
      await Animate([...masterArray], { e1: index }, false, true)
    }
  }
}

export default Verify;