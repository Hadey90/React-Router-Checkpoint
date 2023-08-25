import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-4 mb-4 body">
      <div className="card h-100">
        {" "}
        {/* Set a fixed height for the card */}
        <img src={movie.posterURL} className="card-img-top" alt={movie.title} />
        <div className="card-body d-flex flex-column">
          {" "}
          {/* Flex-column layout for consistent height */}
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.description}</p>
          <p className="card-text mt-auto">Rating: {movie.rating}</p>{" "}
          {/* Align the rating to the bottom */}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
