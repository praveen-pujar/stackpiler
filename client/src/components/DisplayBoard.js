import React from 'react'

export const DisplayBoard = ({ DisplayStack,createUser,deleteUser}) => {
    
    return(
        
        <div className=" form-group col-md-12">
            
            <h2> Functions</h2>
            <div className="number">
            {/* {numberOfUsers} */}
            </div>
            {/* <button type="button" onClick= {(e) => createUser()} className="btn btn-danger">Push Element</button> */}
            <button type="button" onClick= {(e) => deleteUser()} className="btn btn-primary">Pop Element</button>
            <button type="button" onClick={(e) => DisplayStack()} className="btn btn-success"> Display Stack</button>
        </div>
    )
}