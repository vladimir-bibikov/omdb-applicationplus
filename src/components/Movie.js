import './Movie.scss';

function Movie({ movie }) {
    let { Poster, Title, Year } = movie;

    return (<div className="movie movie-card">
        <img className='movie__poster' src={ Poster } />
        <h3>{ Title }</h3>
        <p>{ Year }</p>
    </div>)
}

export default Movie;