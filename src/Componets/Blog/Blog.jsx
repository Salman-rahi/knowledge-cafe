import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handleAddTooBookmark,handleMarkAsRead}) => {
    const{id,cover,title,reading_time,author_img,author,posted_date,hashtags}= blog;
    console.log(cover)
    return (
        <div className='mb-10 bg-white border border-white rounded-lg p-2'>
            <img className='w-[500px] border-2 rounded-xl mb-8' src={cover} alt={`cover picture of title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4 mb-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <p className='text-xl font-semibold'>{author}</p>
                        <p className='text-base text-gray-400'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time}min read</span>
                    <button className='' onClick={()=>handleAddTooBookmark(blog)}><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mb-4'>{title}</h2>
            <p className='space-x-2 text-gray-400'>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href=''>{hash}</a></span>)
                }
            </p>
            <button className='font-bold text-purple-900 underline' onClick={()=>handleMarkAsRead(id,reading_time)}>Mark as read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddTooBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;