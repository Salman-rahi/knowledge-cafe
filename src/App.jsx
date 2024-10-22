import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Blogs from './Componets/Blogs/Blogs'
import Header from './Componets/Header/Header'

function App() {
  const [bookMarks,setBookmarks]= useState([]);
  const handleAddTooBookmark=(blog) => {
   const newBookmarks = [...bookMarks, blog]
   setBookmarks(newBookmarks);
  }

  const [readingTime, setReadingTime] = useState(0);
  const handleMarkAsRead  = (id,time) =>{
    const newTime = readingTime + time;
    setReadingTime(newTime);
    // removed read blog 
    const reamingBookmarks = bookMarks.filter(bookMark => bookMark.id !== id);
    setBookmarks(reamingBookmarks);
  }
  return (
    <>

      <Header></Header>
      <main className='md:flex max-w-screen-xl mx-auto gap-2 mt-4'>
        <Blogs handleAddTooBookmark={handleAddTooBookmark}
        handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookMarks={bookMarks}
        readingTime={readingTime}></Bookmarks>
      </main>

    </>
  )
}

export default App
