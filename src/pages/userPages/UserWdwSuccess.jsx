import { Link } from "react-router-dom"
import "../../App.css"
import WAsset from "../../assests/withdPending.png"
const UserWdwSuccess = () => {
  return (
    <div style={{height: "74vh"}}>
        <div className="d-flex justify-content-center align-items-center withdraw-pending-container">
        <img src={WAsset} alt="image" className="withdraw-pending-loader" />
        
        </div>
        <div>
            <h2>Withdraw Request Pending...</h2>
            <Link to="/user/home" className="text-decoration-none text-white text-lg">Dashboard</Link>
            </div>
    </div>
  )
}

export default UserWdwSuccess