import './DisplayArray.css'
const DisplayArray = ({ masterArray, currentAnimation, isVerifying, type }) => {
    let color
    return (
        <div className="array-container">
            {masterArray.map((element, i) => {
                { !isVerifying && (((currentAnimation.e1 === i) || (currentAnimation.e2 === i)) ? (color = type) : ((currentAnimation.e3 === i)? (color="pivot") : (color = "none"))) }
                { isVerifying && ((i <= currentAnimation.e1) ? (color = "verify") : (color = "none")) }
                return (
                    <div
                        className={color}
                        key={i}
                        style={{ height: `${element}vh` }}
                    ></div>
                )
            })}
        </div>
    );
}

export default DisplayArray;