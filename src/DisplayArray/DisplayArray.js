import './DisplayArray.css'
const DisplayArray = ({masterArray,animatedElements}) => {
    let color
    return (  
        <div className = "array-container">
            {masterArray.map((element,i)=> {
                {((animatedElements.e === i) ? (color="compare") : color="none")}
                return (
                <div
                className={color} 
                key={i}
                style={{height: `${element}vh`}}
                ></div>
            )})}
        </div>
    );
}
 
export default DisplayArray;