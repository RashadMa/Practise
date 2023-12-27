import React from 'react'
import { useUserContext } from '../context/UserContext'

const UserComponent = () => {
      const user = useUserContext()
      return (
            <div>
                  <p>
                        {
                              user.username
                        }
                  </p>
                  <p>
                        {
                              user.role
                        }
                  </p>

            </div>
      )
}

export default UserComponent