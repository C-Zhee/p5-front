import Navbarr from "../Navbarr"
import { useNavigate } from "react-router-dom"
import ConcertPic from "../assets/ConcertPic.jpeg";

const Concert = () => {
    return(
        <div>
            <Navbarr/>
                <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                    <img src = {ConcertPic} width="600" length="600"/>
                <h1>Tickets currently not available yet, check back at a later time! </h1>
                    
                </div>
        </div>
    )
}

export default Concert