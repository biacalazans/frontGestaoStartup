import React from "react";
import Navbar from "../../Components/Navbar";
import "./books.css";

export default function Books() {
  var books = [
    {
      id: 1,
      title: "Livro",
      subtitle: "Muito bom",
      author: "author top",
      placeOfPlubication: "Salvador",
      translator: "Tradutor",
      publisher: "editora braba",
      yearOfPublication: "2022",
      numberOfPages: "100",
      numberOfCopies: "4",
    },
    {
      id: 2,
      title: "Livro",
      subtitle: "Muito bom",
      author: "author top",
      placeOfPlubication: "Salvador",
      translator: "Tradutor",
      publisher: "editora braba",
      yearOfPublication: "2022",
      numberOfPages: "100",
      numberOfCopies: "4",
    },
    {
      id: 3,
      title: "Livro",
      subtitle: "Muito bom",
      author: "author top",
      placeOfPlubication: "Salvador",
      translator: "Tradutor",
      publisher: "editora braba",
      yearOfPublication: "2022",
      numberOfPages: "100",
      numberOfCopies: "4",
    },
    {
      id: 4,
      title: "Livro",
      subtitle: "Muito bom",
      author: "author top",
      placeOfPlubication: "Salvador",
      translator: "Tradutor",
      publisher: "editora braba",
      yearOfPublication: "2022",
      numberOfPages: "100",
      numberOfCopies: "4",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="mainActiveGoods">
        <h1>Livros</h1>
        <br />

        <a type="button" class="btn btn-primary" href="/createbook">
          Cadastrar Livro
        </a>

        <br />
        <br />
        <br />
        <br />
        <section>
          <ul>
            {books.map((item) => (
              <li>
                <div>
                  <h3>Título: {item.title}</h3>
                  <p>Subtítulo: {item.subtitle}</p>
                  <p>ID: {item.id}</p>
                  <p>Autor: {item.author}</p>
                  <p>Tradutor: {item.translator}</p>
                  <p>Local de publicação: {item.placeOfPlubication}</p>
                  <p>Editora: {item.publisher}</p>
                  <p>Ano de publicação: {item.yearOfPublication}</p>
                  <p>Número de páginas: {item.numberOfPages}</p>
                  <p>Número de copias: {item.numberOfCopies}</p>
                </div>
                <br />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
