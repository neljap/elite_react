import React from 'react'
import { storage } from '../../server'
import { getDownloadURL, ref, uploadBytesResumable,  } from 'firebase/storage'
import { useState } from 'react'
import { toast } from 'react-toastify'

const UserPayProofPg = () => {
    const [percent, setPercent] = useState(0)
    const [file, setFile] = useState("")

    const handleUpload = async(e) => {
        e.preventDefault()
        if(!file){
            toast.error('Please Upload a file', {
                position: 'bottom-left'
            })
            return;
        }
        try{
            const storageRef = ref(storage, `/payments/${file.name}`)

            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on("state_changed", (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                setPercent(progress)
            }, (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url))
            }
            )
            setFile('')
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div>
        <div>
            <input type="file" name="" id="" accept='/image/*' onChange={(e) => setFile(e.target.files[0])}/>
            <p>{percent} % done</p>
            <button onClick={handleUpload}>Upload</button>
        </div>
    </div>
  )
}

export default UserPayProofPg