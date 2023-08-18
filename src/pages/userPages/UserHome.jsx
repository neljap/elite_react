import React from 'react'
import UserNavSec from '../../components/UsersDashSection/UserNavSec'
import UserDasDetails from '../../components/UsersDashSection/UserDasDetails'
import UserGreetings from '../../components/UsersDashSection/UserGreetings'
import UserTradeBin from '../../components/UsersDashSection/UserTradeBin'
import UserFxData from '../../components/UsersDashSection/UserFxData'
import UserTopNot from '../../components/UsersDashSection/UserTopNot'

const UserHome = () => {
  return (
    <div>
      <UserTopNot />
      <UserGreetings />
      <UserDasDetails />
      <UserTradeBin />
      <UserFxData />
    </div>
  )
}

export default UserHome