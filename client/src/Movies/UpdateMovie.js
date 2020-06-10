import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from '@material-ui/core'
import { useParams } from "react-router-dom"


const UpdateMovie = props => {
  const [movie, setMovie] = useState(null)
  const params = useParams();

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const handleChange = e => {
    e.preventDefault();
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);



  return (
    <div>
      <form>
        <Input type="text" name="title" value={movie.title} onChange={handleChange} />
        <Input type="text" name="director" value={movie.director} onChange={handleChange} />
        <Input type="number" name="metascore" value={movie.metascore} onChange={handleChange} />
        <Input type="text" name="stars" value={movie.stars} onChange={handleChange} />
      </form>
    </div>

  )
}

export default UpdateMovie;