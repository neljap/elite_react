import React from 'react'
import UserNavSec from '../../components/UsersDashSection/UserNavSec'
import UserDasDetails from '../../components/UsersDashSection/UserDasDetails'
import UserGreetings from '../../components/UsersDashSection/UserGreetings'

const UserHome = () => {
  return (
    <div>
      <UserGreetings />
      <UserDasDetails />
    </div>
  )
}

export default UserHome