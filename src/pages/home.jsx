import axios from "axios";
import { useEffect, useState } from "react";
import CardBlog from "../components/cardBlog";
import Navbar from "../components/navbar";

export default function Home(params) {
    const UrlApi = import.meta.env.VITE_URL_API
    const [blogs, setBlogs] = useState([])

    const getBlogs = async()=>{
        try {
          const Req = await axios.get(`${UrlApi}/blog-reacts`)  
          const ResData = Req.data
          setBlogs(ResData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getBlogs()
    }, [])

    return (
        <div className="w-full">
            <Navbar/>
            <main className="mx-auto max-w-xl">
                <h2 className="text-gray-800 mt-6 text-xl">Recent Blog</h2>
                <hr className="w-10 inline-block h-1 mt-0 bg-red-500"/>
                <div className="mt-10">
                    {
                        blogs.length > 0 ? blogs.map(blog => <CardBlog key={blog._id} dataBlog={blog}/>) : <p>Loading Slurr..</p>
                    }
                </div>
            </main>
        </div>
    )
}