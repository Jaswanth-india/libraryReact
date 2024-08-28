import { useRouteError,Link } from "react-router-dom";
import homeButton from "./assets/home-button.png"

function Error(){
    let errorData=useRouteError();
    return(
        <>
            <div id="errorContainer">
                <div>
                    <h1>{errorData.status}</h1>
                    <h1>{errorData.statusText}</h1>
                    <div>Oops! The page you are looking for is not found <Link to="/"><button><img src={homeButton} alt="Return to Home" width="15"height="15"/>Return to Home</button></Link></div>
                </div>
            </div>
        </>
    )
}

export default Error;