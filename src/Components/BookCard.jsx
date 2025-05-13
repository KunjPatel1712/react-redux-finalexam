import React from "react";
import { Navigate, useNavigate } from "react-router-dom/dist";

export const BookCard = ({ id, cover_photo, book_name, author, category, release_year, chapters }) => {
  
   const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${id}`); // Assuming you want to pass the book ID to the edit page
  };

  return (
    <div className="book-card" >
  <div key={id}>
    <div data-testid="book-image" >
      <img src={cover_photo} alt={book_name} style={{ width: '200px', height: '300px' }} />
    </div>
    <div data-testid="book-name" >{book_name}</div>
    <div className="book-author" >{author}</div>
    <div className="book-category" >{category}</div>
    <div className="book-year" >{release_year}</div>
    <div className="book-chapter">{chapters} Chapters</div>
    <button className="edit-book" onClick={handleEdit}>
      Edit
    </button>
  </div>
</div>

  );
};


//  key={book.id} 
//       cover_photo={book.cover_photo} 
//       book_name={book.book_name}
//       author={book.author}
//       category={book.category}
//       release_year={book.release_year}
//       chapter={book.chapters}