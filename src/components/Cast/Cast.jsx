import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { fetchCredits } from '../api';
import { StyledIMG } from './Cast.styled'
import { StyledItem } from './Cast.styled'
import { StyledList } from './Cast.styled'

const Cast = () => {
  const { id } = useParams({});
  const [credits, setCredits] = useState({ dafault: 1234 });

  useEffect(() => {
    fetchCredits(id).then(({ data }) => {
      setCredits(data.cast);
    });
  }, [id]);

  return (
    <div>
      <StyledList>
        {credits.length ? (
          credits.map(credit => (
            <StyledItem key={credit.id}>
              {credit.character}
              <StyledIMG
                src={
                  credit.profile_path
                    ? `https://image.tmdb.org/t/p/w500${credit.profile_path}`
                    : 'https://image.tmdb.org/t/p/w185/qoVESlEjMLIbdDzeXwsYrSS2jpw.jpg'
                }
                alt={credit.character}
              />
            </StyledItem>
          ))
        ) : (
          <li>Waiting</li>
        )}
      </StyledList>
    </div>
  );
};

export default Cast;