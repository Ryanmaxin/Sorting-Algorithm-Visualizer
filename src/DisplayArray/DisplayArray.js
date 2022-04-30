import './DisplayArray.css'
import { Tooltip } from '@mui/material';
const DisplayArray = ({ masterArray, currentAnimation, isVerifying, type }) => {
    let color
    return (
        <div className="array-container">
            {masterArray.map((element, i) => {
                { !isVerifying && (((currentAnimation.e1 === i) || (currentAnimation.e2 === i)) ? (color = type) : ((currentAnimation.e3 === i)? (color="pivot") : (color = "none"))) }
                { isVerifying && ((i <= currentAnimation.e1) ? (color = "verify") : (color = "none")) }
                return (
                    // <Tooltip title={element} followCursor={true}>
                    <div
                        className={color}
                        key={i}
                        style={{ height: `${element}vh` }}
                    ></div>
                    // </Tooltip>
                )
            })}
        </div>
    );
}

export default DisplayArray;