import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BtnLike from "../components/btnLike";
import Comment from "../components/comment";
import FormComment from "../components/formComment";
import Navbar from "../components/navbar";

export default function Detail() {
    const UrlApi = import.meta.env.VITE_URL_API
    const { blogId } = useParams()
    const [blog, setBlog] = useState(null)
    const [like, setLike] = useState(0)
    const [comments, setComments] = useState([])

    const getBlog = async()=>{
        try {
          const Req = await axios.get(`${UrlApi}/blog-reacts/${blogId}`)  
          const ResData = Req.data
          setBlog(ResData);
          setLike(ResData.like)
          console.log(blog);
        } catch (error) {
            console.log(error);
        }
    }

    const putLike = async(newLike)=>{
        try {
            await axios.put(`${UrlApi}/blog-reacts/${blogId}`, { ...blog, like: newLike })
            setLike(newLike)
        } catch (error) {
            console.log(error);
        }
    }

    const getComments = async()=>{
        try {
            const Req = await axios.get(`${UrlApi}/comments`)
            const ResData = Req.data
            const filterByIdBlog = ResData.filter(comment => comment.blogId === blog._id)
            console.log(filterByIdBlog);
            setComments(filterByIdBlog)
        } catch (error) {
            console.log(error);
        }
    }

    const postComment = async(name, comment)=> {
        try {
           const Req = await axios.post(`${UrlApi}/comments`, { name, comment, blogId: blog._id })
           const ResData = Req.data
           setComments(currComments => [...currComments, ResData])
           console.log(Req);
        } catch (error) {
            console.log(error);
        }
    }

    const handleLike =()=>{
        let newLike = like + 1
        putLike(newLike)
    }

    useEffect(()=>{
        getComments()
    }, [blog])

    useEffect(()=>{
            getBlog()
    }, [])
    return (
        <div className="w-full">
            <Navbar/>
            {
                blog ? (
                    <div className="mx-auto max-w-xl min-h-screen h-auto">
                        <h2 className="text-4xl text-gray-700 mt-6 font-bold">{blog?.title}</h2>
                        <p className="mt-5 text-gray-800"><span className="font-semibold text-blue-500">Author : </span> {blog?.author}</p>
                        <p className="text-gray-800"><span className="font-semibold text-blue-500">Publish : </span> {blog?.publish}</p>
                        <div className="mt-6 text-gray-700">
                            {blog?.content}
                        </div>
                        <BtnLike handleLike={handleLike} like={like}/>
                        <FormComment postComment={postComment}/>
                        <div className="mt-8">
                            {
                                comments.map(comment => <Comment key={comment?._id} name={comment?.name} comment={comment?.comment}/>)
                            }
                        </div>

                    </div>                    
                ) : (
                    <div className="mx-auto max-w-3xl">
                        <h2 className="mt-6 text-center font-bold text-gray-700">Wait...</h2>
                    </div>
                )
            }

        </div>
    )
}