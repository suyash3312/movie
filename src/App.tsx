import { useState , useEffect} from 'react'
import Search from './components/search.jsx'

import './App.css'
// const API_BASE_URL = 'https://api.themoviedb.org/3/trending/movie/{time_window}'
const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
}
function App() {
    const [search, setSearch] = useState('')
    const [error, setError] = useState('')

    const getTrendingMovies = async () => {
        try {
            const response = `${API_BASE_URL}/trending/movie/day?language=en-US`
            const data = await fetch(response, API_OPTIONS)

            if(!data.ok){
                throw new Error('Something went wrong')
            }
            const json = await data.json()
            console.log(json)
        }catch (e){
            const errorMessage = e instanceof Error ? e.message : 'Unknown error';
            console.log(`Error: ${errorMessage}`);
            setError(`Error Fetching Movies. Please try again later.`)
        }
    }

    useEffect(() => {
        getTrendingMovies();
    }, [])
    return (
        <main>
            <div className="pattern"/>

            <div className="wrapper">
                <header>
                    <img src="./hero-img.png" alt="Hero Banner"/>
                    <h1>Find <span className={'text-gradient'}>Movies</span> you'll enjoy without the hassle</h1>
                    <Search searchTerm={search} setSearchTerm={setSearch}/>
                </header>
                <section className={'trending-movies'}>
                    <h2>Trending Movies</h2>
                    <p className={'text-red-500'}>{error}</p>
                </section>
            </div>
        </main>
    )
}

export default App