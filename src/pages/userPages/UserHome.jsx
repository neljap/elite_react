import React from 'react'
import UserNavSec from '../../components/UsersDashSection/UserNavSec'
import UserDasDetails from '../../components/UsersDashSection/UserDasDetails'
import UserGreetings from '../../components/UsersDashSection/UserGreetings'
import UserTradeBin from '../../components/UsersDashSection/UserTradeBin'
import UserFxData from '../../components/UsersDashSection/UserFxData'
import UserTopNot from '../../components/UsersDashSection/UserTopNot'
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