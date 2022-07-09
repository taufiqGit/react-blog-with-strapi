import { useState } from "react"

export default function FormComment({ postComment }) {
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')

    const handleSend =()=>{
       // console.log(comment);
       postComment(name, comment)
       setName('')
       setComment('')
    }
    
    return (
        <div className="w-full mt-3 py-8 px-5 shadow-xl rounded-lg">
            <h3 className="text-lg text-blue-500 font-bold">Create Comment</h3>
            <div className="flex-col flex mt-4">
                <label className="text-gray-600 font-bold" htmlFor="user">Your Name</label>
                <input onChange={(e)=> setName(e.target.value)} className="border-2 rounded p-1 mt-2 border-gray-600 text-gray-500 focus:outline-none" type="text" id="user"/>
            </div>
            <div className="flex-col flex mt-4">
                <label className="text-gray-600 font-bold" htmlFor="comment">Your Comment</label>
                <textarea onChange={(e)=> setComment(e.target.value)} className="border-2 rounded p-1 mt-2 border-gray-600 text-gray-500 focus:outline-none" name="" id="" cols="8" rows="3"/>
            </div>
            <button onClick={handleSend} className="mt-4 py-2 px-4 bg-blue-500 text-white rounded">Send</button>
        </div>
    )
}