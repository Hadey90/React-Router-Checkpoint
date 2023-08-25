import React from "react";
import { useParams, Link } from "react-router-dom";
import Navibar from "./NaviBar";

const MovieDetail = ({ movies }) => {
  const { index } = useParams();
  const movie = movies[index];

  if (!movie) {
    return <div>Loading...</div>; // Handle the case when movie is not found
  }

  return (
    <div>
      <div className="text-center">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
      </div>
      <div className="container">
        <div className="row">
          <div className=" col-md-12 mb-4 d-flex justify-content-center">
            <iframe
              width="560"
              height="315"
              src={movie.trailerLink}
              title={`${movie.title} Trailer`}
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div className="row d-flex justify-content-center">
            <div className=" col-md-10 mb-4 d-grid gap-2">
              <button className="custom-button">
                <Link to="/">Back to Home</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
