import React from "react";
import { Users } from './components/Users'

const userOne = {
    name: 'Metodija',
    surname: 'Antuleski',
    address: {
        street: 'Kiro Pajmakoski',
        number: 19
    }
}

const userTwo = {
    name: 'Pepo',
    surname: 'Peposki',
    address: {
        street: 'Kiro Peposki',
        number: 21
    }
}

export function App() {
    return (
        <div>
            <Users user={userOne} showUser={true} />
            <hr />
            <Users user={userTwo} showUser={false} />

            {/* <Users userTwo={userTwo} /> */}


        </div>
    )
}