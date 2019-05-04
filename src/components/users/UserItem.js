import React from 'react'

const UserItem = (props) => {
    const { name, email} = props
    return (
        <div className="col-md-4">
            <div className="card-deck mb-3">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{email}</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
        
    )
}   

export default UserItem
