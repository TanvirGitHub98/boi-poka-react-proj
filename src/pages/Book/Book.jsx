import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { bookName, image, rating, category, author,bookId } = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm p-5 rounded-2xl m-5 border border-gray-200">
        <figure className="bg-[#F3F3F3] w-2/3 mx-auto p-5 rounded-2xl">
          <img className="w-[124px] h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By :{author} </p>
          <div className="flex justify-between">
            <div>{category}</div>
            <div className="flex items-center gap-1.5">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
