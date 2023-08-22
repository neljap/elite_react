import React from "react";

function Example() {
    const user = useSelector((state)=> state.userinfo.value);
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