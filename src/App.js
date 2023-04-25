import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Rent from "./pages/Rent";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import About from "./pages/About";
import { useEffect } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
    {
      id: 8,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      author: "J. R. R. Tolkien",
      description:
        "The Fellowship of the Ring, also known as the Company of the Ring, was formed from nine members of the Free peoples during the War of the Ring...",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654215925i/61215351.jpg",
      isRented: false,
    },
    {
      id: 9,
      title: "The Lord of the Rings: The Two Towers",
      author: "J. R. R. Tolkien",
      description:
        "The Two Towers opens with the disintegration of the Fellowship, as Merry and Pippin are taken captive by Orcs after the death of Boromir in battle...",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654216149i/61215372.jpg",
      isRented: false,
    },
    {
      id: 10,
      title: "The Lord of the Rings: The Return of the King",
      author: "J. R. R. Tolkien",
      description:
        "While the evil might of the Dark Lord Sauron swarms out to conquer all Middle-earth, Frodo and Sam struggle deep into Mordor, seat of Sauron's power...",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654216226i/61215384.jpg",
      isRented: false,
    },
    {
      id: 11,
      title: "A Song of Ice and Fire: A Game of Thrones",
      author: "George R. R. Martin",
      description:
        "While the evil might of the Dark Lord Sauron swarms out to conquer all Middle-earth, Frodo and Sam struggle deep into Mordor, seat of Sauron's power...",
      imgURL:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91dSMhdIzTL.jpg",
      isRented: false,
    },
    {
      id: 12,
      title: "A Song of Ice and Fire: A Clash of Kings",
      author: "George R. R. Martin",
      description:
        "Clash of Kings depicts the Seven Kingdoms of Westeros in civil war, while the Night's Watch mounts a reconnaissance to investigate...",
      imgURL:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/A1ExVQ-oFNL.jpg",
      isRented: false,
    },
    {
      id: 13,
      title: "A Song of Ice and Fire: A Storm of Swords",
      author: "George R. R. Martin",
      description:
        "A Storm of Swords continues the story where A Clash of Kings ended. The novel describes the increasingly vicious War of Five Kings in Westeros...",
      imgURL:
        "https://english-book.rs/wp-content/uploads/2022/04/9780006479901-p-16486_600_840px.jpg",
      isRented: false,
    },
    {
      id: 14,
      title: "A Song of Ice and Fire: A Feast for Crows",
      author: "George R. R. Martin",
      description:
        "A Feast for Crows focuses on the Lannister family's continuing consolidation of power following victory in the “War of the Five Kings.”... ",
      imgURL:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71C3XvEayXL.jpg",
      isRented: false,
    },
    {
      id: 15,
      title: "A Song of Ice and Fire: A Dance with Dragons",
      author: "George R. R. Martin",
      description:
        "In the aftermath of a colossal battle, the future of the Seven Kingdoms hangs in the balance—beset by newly emerging threats from every direction...",
      imgURL:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91gJgXvn+jL.jpg",
      isRented: false,
    },
    {
      id: 16,
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      description:
        "The Little Prince is an honest and beautiful story about loneliness, friendship, sadness, and love. The prince is a small boy from a tiny planet, who travels the universe...",
      imgURL:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71OZY035QKL._AC_UF1000,1000_QL80_.jpg",
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

  const search = (e) => {
    setCurrentPage(1);
    setBooks(
      books.filter((book) => {
        return book.title.toLowerCase().includes(e.target.value.toLowerCase())
          ? true
          : false;
      })
    );
  };

  return (
    <div>
      <NavBar
        numberOfRentedBooks={books.filter((book) => book.isRented).length}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home
                books={books}
                rentBook={rentBook}
                search={search}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                numberOfBooks={books.length}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/rent"
          element={
            <Rent
              books={books.filter((book) => book.isRented)}
              rentBook={rentBook}
            />
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
