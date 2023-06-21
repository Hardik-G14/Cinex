import { useEffect } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/api';
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/homeSlice';

function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    })
  }
  return (
    <div className="App">
      App
    </div>
  )
}

export default App
