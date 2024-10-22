import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Blogs from './Componets/Blogs/Blogs'
import Header from './Componets/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>

    </>
  )
}

export default App
