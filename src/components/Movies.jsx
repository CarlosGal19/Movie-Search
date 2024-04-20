function listOfMovies({movies}) {
    return (
        <ul>
            {
                movies.map( movie => {
                    return (
                        <li key={movie.imdbID}>
                            <h2>{movie.Title}</h2>
                            <p>{movie.Year}</p>
                            <img src={movie.Poster} alt={movie.Title} />
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

export default function Movies({movies}) {
    const hasMovies = movies?.length > 0;
    return(
        hasMovies ? listOfMovies({movies}) : noMovies()
    )
}
