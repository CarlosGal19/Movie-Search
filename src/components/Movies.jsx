function listOfMovies({ movies }) {
    return (
        <ul className="movies">
            {
                movies.map(movie => {
                    return (
                        <li className="movie" key={movie.id}>
                            <h2>{movie.title}</h2>
                            <p>{movie.year}</p>
                            <img src={movie.poster} alt={movie.title} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

function noMovies() {
    return (
        <p>No movies found</p>
    )
}

export default function Movies({ movies }) {
    const hasMovies = movies?.length > 0;
    return (
        hasMovies ? listOfMovies({ movies }) : noMovies()
    )
}
