import React, { useState } from "react";

export function Form() {

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [table, setTable] = useState(false)



    return (
        <div className="container">

            <form style={{ width: "800px" }}>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        className="form-control"
                        value={lastname}
                        onChange={(e) => { setLastname(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input
                        className="form-control"
                        value={address}
                        onChange={(e) => { setAddress(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input
                        className="form-control"
                        value={city}
                        onChange={(e) => { setCity(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />

                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>


                <button type="button" className="btn btn-success " onClick={() => setTable(true)}>Submit Form</button>
                <button type="button" className="btn btn-warning m-4" onClick={() => setTable(false)}>Hide Table</button>
            </form>
            {table ? <table className="table" style={{ width: "800px" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>LastName</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{lastname}</td>
                        <td>{address}</td>
                        <td>{city}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                    </tr>
                </tbody>
            </table> : null}
        </div>
    )
}

