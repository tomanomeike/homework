import React from 'react';
import MoviesField from '../src/moviesField/moviesField';
import '../src/App.scss';

const App = () => {
  return (
    <div className='container'>
    <div className='header'>
      <div className='header-search'>
        <div className='header-search_field'>
        <MoviesField />
        </div>
      </div>
    </div>
  </div>
  )
}
 

export default App;
