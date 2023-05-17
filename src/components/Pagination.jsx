import React from "react";

export default function Pagination({
  totalGames,
  gamesPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="space-x-2 mt-4 text-center my-8 border-b p-2 rounded">
      {pages.map((page, index) => (
        <button
          key={index}
          className={`bg-white text-black p-2 px-4 rounded font-bold border-black mb-2  ${currentPage === page && 'bg-yellow-500 !text-white'}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}