import './DisplayArray.css'
const DisplayArray = ({masterArray,currentCompare,currentSwap}) => {
    let color
    return (  
        <div className = "array-container">
            {masterArray.map((element,i)=> {
                {((currentCompare.e === i) ? (color="compare") : ((currentSwap.e1 === i || currentSwap.e2 === i) ? (color="swap") : (color="none")))}
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