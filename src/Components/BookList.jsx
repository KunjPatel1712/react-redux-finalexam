
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";

export const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div data-testid="book-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', margin: '20px' }}>
      {/* Map over books array and pass each book object to the BookCard */}
      {books.map((book) => (
        <BookCard
     
      key={book.id} 
      cover_photo={book.cover_photo} 
      book_name={book.book_name}
      author={book.author}
      category={book.category}
      release_year={book.release_year}
      chapter={book.chapters}
    />
        
      ))}
    </div>
  );
};

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BookCard } from "./BookCard";

//  export const BookList = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/books")
//       .then((res) => setBooks(res.data))
//       .catch((err) => console.log("err", err));
//   });

//   return (
//     <div data-testid="book-list">
//       {books.map((book) => (
//         <BookCard key={book.id} book={books.id} title={books.name} image={books.book_image} category={books.category}/>
//       ))}
//     </div>
//   );
//  }

// import React from "react";
// import { BookCard } from "./BookCard";

// export const BookList = () => {
//   return (
//     <div data-testid="book-list">

//   {books.map((book, index) => (
//     <BookCard
//       key={index}
//       image={book.image}
//       name={book.name}
//       author={book.author}
//       category={book.category}
//       year={book.year}
//       chapters={book.chapters}
//     />
//   ))}
// </div>
  
//   );
// };
// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";

// // export const BookList = () => {
// //   const [books, setBooks] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:8080/books")
// //       .then((res) => {
// //         setBooks(res.data);
// //       })
// //       .catch((err) => {
// //         console.log("err", err);
// //       });
// //   }); 

// //   return (
// //     <div
// //       data-testid="book-list"
// //       style={{
// //         display: "grid",
// //         gap: "20px",
// //         gridTemplateColumns: "repeat(3, 1fr)",
// //         margin: "20px",
// //       }}
// //     >
// //       {books.map((book) => (
// //         <div
// //           key={book.id}
// //           style={{
// //             border: "1px solid #ddd",
// //             borderRadius: "10px",
// //             padding: "12px",
// //             backgroundColor: "#f9f9f9",
// //           }}
// //         >
// //           <Link to={`/bookcard/${book.id}`} style={{ textDecoration: "none" }}>
// //             <img
// //               src={book.cover_photo}
// //               alt={book.book_name}
// //               style={{
// //                 width: "100%",
// //                 height: "200px",
// //                 borderRadius: "8px",
                
// //               }}
// //             />
// //             <div
// //               style={{
// //                 fontSize: "18px",
// //                 fontWeight: "bold",
// //                 color: "#333",
// //                 margin: "8px 0",
// //               }}
// //             >
// //               {book.book_name}
// //             </div>
// //             <div style={{ fontSize: "14px", color: "#555" }}>{book.author}</div>
// //             <div style={{ fontSize: "14px", color: "#555" }}>{book.category}</div>
// //             <div style={{ fontSize: "14px", color: "#555" }}>{book.year}</div>
// //             <div style={{ fontSize: "14px", color: "#555" }}>
// //               {book.no_of_chapters} Chapters
// //             </div>
// //           </Link>
// //           <button
// //             style={{
// //               backgroundColor: "blue",
// //               color: "white",
// //               padding: "8px 12px",
// //               fontSize: "14px",
             
// //             }}
// //           >
// //             Edit
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };
