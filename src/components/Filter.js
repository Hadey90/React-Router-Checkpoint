import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
    onFilter({ title: e.target.value, rating: ratingFilter });
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
    onFilter({ title: titleFilter, rating: e.target.value });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" col-md-6 mb-4">
            <input
              type="text"
              placeholder="Filter by title"
              className="form-control mb-2 col-md-4"
              value={titleFilter}
              onChange={handleTitleChange}
            />
          </div>

          <div className="col-md-6">
            <input
              type="number"
              placeholder="Filter by rating"
              step="0.1"
              className="form-control "
              value={ratingFilter}
              onChange={handleRatingChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
