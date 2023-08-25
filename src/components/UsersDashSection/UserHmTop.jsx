// import { getInfo } from "../../store-service/store"


const UserHmTop = () => {
  // let user = getInfo()
  return (
    <div className='row gap-3 mx-auto my-3'>
        <div className='col-md-5 p-3 border border-success shadow rounded'>
            <p>Total Funds</p>
            <h2>$0.00</h2>
            <div className='d-flex gap-2'>
                <button className='btn btn-success'>Deposit</button>
                <button className='btn btn-transparent border border-success text-light'>Withdraw</button>
            </div>
        </div>
        <div className='col-md-5 p-3 border border-success shadow rounded'>
            <h2>Invite Friends & get <br /> extra Income!</h2>
            <button className='btn btn-success'>Earn more</button>
        </div>
    </div>
  )
}

export default UserHmTop