import React, { useState } from 'react';
import useDebounce from '../use-debounce';
import { getMovies } from '../api/api';
import { ReactComponent as Movie } from '../../src/icons/movie.svg';
import { ReactComponent as Search } from '../../src/icons/search.svg';

const MAX_RESULTS = 8;

const MoviesField = () => {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const debouncedTitle = useDebounce(title, 500);

  const handleChange = e => {
    setTitle(e.target.value);
  };
  React.useEffect(() => {
    if (debouncedTitle && title.length >= 3) {
      setLoading(true);
      setError(false);
      getMovies(title)
        .then(response => {
          setMovies(response.data.results.slice(0, MAX_RESULTS));
        })

        .catch(error => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [debouncedTitle]);

  return (
    <React.Fragment>
      <form className='search'>
        <Movie className='movieIcon' />
        <input
          className='searchInput'
          onChange={handleChange}
          type='text'
          placeholder='Enter movie name'
        />
        <button className='searchIcon'  onChange={handleChange} value=''>
          <Search />
        </button>
      </form>
      <div>
      {loading && <div className='loader'>loading...</div>}
        <ul>
          {!error &&
            movies.map(movie => (
              <div key={movie.id} className='movie-container'>
                <Movie className='movieIcon2' />
                <div className='movies-title'>{movie.title}</div>
                <div>
                  {movie.vote_average} Raiting,
                  {movie.release_date.toString().substr(0, 4)}
                </div>
              </div>
            ))}
        </ul>        
      </div>
    </React.Fragment>
  );
};

export default MoviesField;
