import React from 'react';


export const Users = (props) => {

    return (
        <div id="users">
            {props.showUser ?
                <div class="card" style={{ width: 400 }}>
                    <div class="card-body">

                        <h6 class="card-subtitle mb-2 text-muted">User info</h6>
                        <h4 class="card-text">Name: {props.user.name}</h4>
                        <h4 class="card-text">Surname: {props.user.surname}</h4>
                        <h4 class="card-text">Address: {props.user.address.street} {props.user.address.number}</h4>

                    </div>
                </div> : <div class="alert alert-danger" role="alert" style={{ width: 400 }}>
                    User not found.
                </div>
            }




        </div >

    )
}