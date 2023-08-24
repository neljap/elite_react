import React from "react";
import { getInfo } from "../store-service/store";
import { uploadFile } from "../server_side/userUpdate";

function Example() {
    let user = getInfo();
    console.log(user)//please use the console to track the data

    const handler = async (e) =>{
        e.preventDefault();
        let form = document.getElementById("uploadform");
        let submit = document.querySelector("input[type=submit]")
        let formdata = new FormData(form, submit);
        await uploadFile(formdata.get("file"));
    }
    return (
        <div>
            <h1>helo</h1>
            <div className="email">USER EMAIL -{user.email}</div>
            <div className="fullname">USER FULLNAME - {user.fullname}</div>

            <form onSubmit={handler} id="uploadform">
                <input type="file" name="file" id="" />
                <input type="submit" value="upload" />
            </form>
        </div>
    );
}

export default Example;