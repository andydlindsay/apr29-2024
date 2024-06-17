import './App.css';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { state } = useApplicationData();

  const mappedMovies = state.movies.map((movie) => {
    return <p key={movie.id}>{movie.title}</p>;
  });

  const mappedCast = state.cast.map((castMember) => {
    return <p key={castMember.role}>{castMember.name}</p>;
  });

  return (
    <div className="App">
      <h2>Movies</h2>
      { mappedMovies }
      <h2>Cast</h2>
      { mappedCast }
    </div>
  );
};

export default App;
