import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}= bookmark;
    return (
        <div className='border-2 border-gray-300 rounded-lg mb-4'>
            <h3 className='text-xl p-2 bg-white border border-white rounded-lg'>{title}</h3>
        </div>
    );
};
Bookmark.propTypes ={
    bookMark: PropTypes.object
}
export default Bookmark;