import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons"
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
let divStyle = {}

const HomeSearchCard = ({bottle}) => {
    if (bottle.color.toLowerCase() === "red") {
        divStyle = {
            color: "#923a45"
        }
    }
    else if (bottle.color.toLowerCase() === "white"){
        divStyle = {
            color: "#EEEDC4"
        }
    } else {
        divStyle = {
            color: "#E4A598"
        } 
    }


    const guardOp = () => {
        if (typeof bottle.Storage === "undefined") {
            return <p className="homeSearchLoc">Located in Row: {parseInt(bottle.row+1)} Column: {parseInt(bottle.column+1)}</p>
            }
        else {
            return  <p className="homeSearchLoc">Located in Row: {parseInt(bottle.row+1)} Column: {parseInt(bottle.column+1)} of "{bottle && bottle.Storage.name}" </p>
        }
    }
    



    
    return  (
        <div className="HomeSearchCard">
            <span className="homeSearchIcon">
                <FontAwesomeIcon 
                    icon={faWineBottle} size="2x" 
                    style={{color: `${divStyle.color}`}} 
                    className="storageBottle"/>
                <span 
                    hidden={bottle.still}> 
                    <BubbleChartIcon sx={{ color: "#F7E7CE", stroke: 'black' }} /> 
                </span>
            </span>
            <h4 className="homeSearchWine">{bottle.name}</h4>
            <p className="homeSearchDetails">{bottle.vintage} | {bottle.varietal}<br></br> {bottle.winery}</p>
                {guardOp()}
        </div>
    )
}

export default HomeSearchCard