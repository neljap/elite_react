import UserGreetings from '../../components/UsersDashSection/UserGreetings'   
import UserHmTop from '../../components/UsersDashSection/UserHmTop'
import UserWallAcc from '../../components/UsersDashSection/UserWallAcc'
import UserText from '../../components/UsersDashSection/UserText'

const UserHome = () => {
  return (
    <div>
      <UserGreetings />
      {/* <UserText /> */}
      <UserHmTop />
      <UserWallAcc />
    </div>
  )
}

export default UserHome