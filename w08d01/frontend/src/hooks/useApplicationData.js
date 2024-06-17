import axios from 'axios';
import {useState, useEffect} from 'react';

const useApplicationData = () => {
  // const [movies, setMovies] = useState([]);
  // const [cast, setCast] = useState([]);

  const [state, setState] = useState({
    movies: [],
    cast: []
  });

  useEffect(() => {
    const movieRequest = axios.get('/movies');
    const castRequest = axios.get('/cast');

    const promises = [castRequest, movieRequest];

    Promise.all(promises)
      .then((arrOfResponseValues) => {
        // console.log(arrOfResponseValues);
        const castArr = arrOfResponseValues[0].data;
        const movieArr = arrOfResponseValues[1].data;

        // setMovies(movieArr);
        // setCast(castArr);

        const copyOfState = {
          ...state,
          movies: movieArr,
          cast: castArr,
        };

        setState(copyOfState);
      });
  }, []);

  return { state };
};

export default useApplicationData;
