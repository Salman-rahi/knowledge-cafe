import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleAddTooBookmark,handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3 border-2 border-gray-100 rounded-xl bg-gray-100 p-2">
            <h1 className="text-4xl text-center mb-4">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} 
                    blog={blog}
                    handleAddTooBookmark={handleAddTooBookmark}
                    handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    handleAddTooBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;