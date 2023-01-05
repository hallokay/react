import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const {id} = useParams();
  const [detail, setDetail] = useState('');

  const getDetail = useCallback(async() => {
    const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    const jsonData = await(
      await fetch(url)
    ).json();
    setDetail(jsonData.data.movie);
  }, [id])
  useEffect(() => {
    getDetail();
  }, [getDetail]);

  return (
    <div>
      <img src={detail.medium_cover_image} alt={detail.title_english} />
      <h1>{detail.title_english}</h1>
      <p>{detail.description_intro}</p>
      
    </div>
  )
}

export default Detail