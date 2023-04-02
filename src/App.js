import "./App.css";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Rent from "./pages/Rent";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K.Rowling",
      description:
        "The book is about 11 year old Harry Potter, who receives a letter saying that he is invited to attend Hogwarts, school of witchcraft and wizardry.",
      /*He then learns that a powerful wizard and his minions are after the sorcerer's stone that will make this evil wizard immortal and undefeatable.*/
      imgURL:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81m1s4wIPML._AC_UF1000,1000_QL80_.jpg",
      isRented: false,
    },
    {
      id: 2,
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K.Rowling",
      description:
        "The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's...",
      /* corridors warn that the Chamber of Secrets has been opened and that the heir of Slytherin would kill all pupils who do not come from all-magical families."*/
      imgURL:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81THMAxo+pL._AC_UF1000,1000_QL80_.jpg",
      isRented: false,
    },
    {
      id: 3,
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "J.K.Rowling",
      description:
        "The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley...",
      /* and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort's old allies."*/
      imgURL:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81f7bXC-tTL.jpg",
      isRented: false,
    },
    {
      id: 4,
      title: "Harry Potter and the Goblet of Fire",
      author: "J.K.Rowling",
      description:
        "It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding...",
      /*  the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete. The book was published in the United Kingdom by Bloomsbury and in the United States by Scholastic."*/
      imgURL:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/810jKiNChxL.jpg",
      isRented: false,
    },
    {
      id: 5,
      title: "Harry Potter and the Order of the Phoenix",
      author: "J.K.Rowling",
      description:
        "It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry including the surreptitious...",
      /*  return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic.*/
      imgURL: "https://m.media-amazon.com/images/I/519jC3ZUisL.jpg",
      isRented: false,
    },
    {
      id: 6,
      title: "Harry Potter and the Half-Blood Prince",
      author: "J.K.Rowling",
      description:
        "Set during Harry Potter's sixth year at Hogwarts, the novel explores the past of the boy wizard's nemesis, Lord Voldemort...",
      /*, and Harry's preparations for the final battle against Voldemort alongside his headmaster and mentor Albus Dumbledore. */
      imgURL:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81p2+4nYtkL.jpg",
      isRented: false,
    },
    {
      id: 7,
      title: "Harry Potter and the Deathly Hallows",
      author: "J.K.Rowling",
      description:
        "The Deathly Hallows is about Harry Potter and his friends finding ways to destroy Voldemort. They learn that even good contains a bit of evil...",
      /*, and vise versa. Even though the trio faces many difficulties, they persevere."*/
      imgURL:
        "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781408855713.jpg",
      isRented: false,
    },
  ]);
  const rentBook = (id) => {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          book.isRented = !book.isRented;
        }
        return book;
      })
    );
  };

  return (
    <div>
      <NavBar
        numberOfRentedBooks={books.filter((book) => book.isRented).length}
      />
      <Routes>
        <Route path="/" element={<Home books={books} rentBook={rentBook} />} />
        <Route
          path="/rent"
          element={
            <Rent
              books={books.filter((book) => book.isRented)}
              rentBook={rentBook}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
