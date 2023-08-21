import React, { Suspense } from 'react';
import { useParams } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchMovieById } from '../components/api';
import { useLocation } from 'react-router-dom';
const Movie = () => {
  const { id } = useParams({});
  const [info, setInfo] = useState({ dafault: 1234 });
  const location = useLocation();
  console.log(location);
  const goBackLink = useRef(location.state?.from || '/');
  useEffect(() => {
    fetchMovieById(id).then(({ data }) => {
      setInfo(data);
    });
  }, [id]);

  const { title, genres, backdrop_path, vote_average, overview } = info;

  return (
    <div>
      <Link to={goBackLink.current}>Go back</Link>
      <img
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/w185/${backdrop_path}`
            : 'https://showmax.akamaized.net/i/12cdc789-bff1-47db-9f18-622c8565fa33/format=webp/q=70/850x'
        }
        alt={title}
        width={720}
      />
      <h1>{title}</h1>
      <div>User score: {vote_average}</div>
      <h2>Overview</h2>
      <p> {overview}</p>
      <div>
        Genres:
        {genres ? (
          genres.map(el => <p key={el.id}>{el.name}</p>)
        ) : (
          <div>No genres</div>
        )}
      </div>
      <div>Addition information</div>
      <li>
        <Link to="cast">Show Cast</Link>
      </li>
      <li>
        <Link to="reviews">Show Reviews</Link>
      </li>
      <Suspense fallback={<h1>Loading nested rotes</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Movie;