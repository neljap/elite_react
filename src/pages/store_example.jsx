import React from "react";
import { getInfo } from "../store-service/store";

function Example() {
    let user = getInfo();
    console.log(user)//please use the console to track the data
    return (
        <div>
            <h1>helo</h1>
            <div className="email">USER EMAIL -{user.email}</div>
            <div className="fullname">USER FULLNAME - {user.fullname}</div>
        </div>
    );
}

export default Example;