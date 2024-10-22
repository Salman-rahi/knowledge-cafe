
import PropTypes from 'prop-types';

const ReadingBtn = ({readingTime}) => {
    return (
        <div className='border-2 border-purple-200 rounded-xl bg-purple-200 p-2 mb-2'>
            <h2 className='text-2xl text-purple-900'>Reading Time : {readingTime}</h2>
        </div>
    );
};

ReadingBtn.propTypes = {
    
};

ReadingBtn.propTypes ={
    readingTime: PropTypes.number
}

export default ReadingBtn;