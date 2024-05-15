import React, { useState, useEffect } from "react";
import RenderMovies from "../../components/RenderMovies";
import Pagination from "../../components/Pagination";

const PopularPage = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzJlMTc4NmMzOTRiNTNiNDE0YjI4OWY0ZWU5YTk4NyIsInN1YiI6IjY2MzM0N2U5ODEzY2I2MDEyMTg2ZTlhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A159m_rOX_HnuFPW_aHnMOTiMYyXhQbT3yMamEeazCg'
          }
        });
        const data = await response.json();
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPopularMovies();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <RenderMovies fetchUrl={`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`} />
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default PopularPage;
