import './DisplayArray.css'
const DisplayArray = ({ masterArray, currentAnimation }) => {
    let color
    return (
        <div className="array-container">
            {masterArray.map((element, i) => {
                { (((currentAnimation.e1 === i) || (currentAnimation.e2 === i) || (currentAnimation.e3 === i)) ? (color = "compare") : color = "none") }
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