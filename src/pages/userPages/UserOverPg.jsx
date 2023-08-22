import UserDasDetails from '../../components/UsersDashSection/UserDasDetails'
import UserGreetings from '../../components/UsersDashSection/UserGreetings'
import UserTradeBin from '../../components/UsersDashSection/UserTradeBin'
import UserFxData from '../../components/UsersDashSection/UserFxData'

const UserOverPg = () => {
  return (
    <div>
      <UserGreetings />
      <UserDasDetails />
      <UserTradeBin />
      <UserFxData />
    </div>
  )
}

export default UserOverPg