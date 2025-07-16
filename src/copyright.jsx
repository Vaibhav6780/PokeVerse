import { Link } from "react-router-dom";
import "./copyright.css"
function Cr(){
    return(
        <div className="cs"> 
            <span>Made By  <Link to="https://thevaibhav.netlify.app">Vaibhav Sharma</Link></span>
        </div>
    );
}
export default Cr;