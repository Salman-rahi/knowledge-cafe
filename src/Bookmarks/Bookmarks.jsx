import PropTypes from 'prop-types';
import Bookmark from './Bookmark/Bookmark';
import ReadingBtn from './ReadingBtn/ReadingBtn';

const Bookmarks = ({bookMarks,readingTime}) => {
    
    return (
        <div className="md:w-1/3 border-2 border-gray-100 rounded-xl bg-gray-100 p-2 ">
              <ReadingBtn readingTime={readingTime}>
              </ReadingBtn>

            <h1 className="text-2xl text-center border-b-2">Bookmarked Blogs:{bookMarks.length}</h1>
            
            {
                bookMarks.map((bookmark, idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookMarks: PropTypes.object,
    readingTime: PropTypes.number
}
export default Bookmarks;