  
import React from 'react'

export const Users = ({users}) => {
    var arr = users;
    console.log('users length:::', arr.length)
    if (arr.length === 0) return null

    const UserRow = (user,index) => {

        return(
              <tr key={index}>
                  
                  <td>{user}</td>
                 
              </tr>
          )
    }

    const userTable = arr.map((user,index) => UserRow(user,index))

    return(
        <div className="container">
            <h3>Stack Elements</h3>
            
            <table className="table table-bordered">
                <thead>
                <tr>
                
                    {/* <th>Firstname</th> */}
                    
                </tr>
                </thead>
                <tbody>
                    {userTable}
                </tbody>
            </table>
        </div>
    )
}