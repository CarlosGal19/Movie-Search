import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [title, setTitle] = useState('Avengers');

  let id = "4287ad07";

  useEffect(() => {
    console.log('App mounted');
    fetch(`http://www.omdbapi.com/?apikey=${id}&s=${title}`)
      .then(response => response.json())
      .then(data => console.log(data));
  }, [title]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log('Search button clicked');
    setTitle('Star Wars');
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>
        <form>
          <input type="text" placeholder='Avengers, Star Wars, Interestellar, ...' />
          {/* The last button of a form, is type submit */}
          <button onClick={handleClick}>Search</button>
        </form>
      </header>
      <main>
        There will be the results
      </main>
    </div>
  )
}

export default App
