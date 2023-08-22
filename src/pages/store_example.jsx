import React from "react";
import { useSelector, useDispatch } from 'react-redux'

function Example() {
    const user = useSelector((state)=> state.userinfo.value)
    return (
        <div>
            <div className="email">{user.email}</div>
        </div>
    );
}

export default Example;