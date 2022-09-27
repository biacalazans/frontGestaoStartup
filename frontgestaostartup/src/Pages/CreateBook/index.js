import React from "react";
import Navbar from "../../Components/Navbar";
import "./createbook.css";

export default function CreateBook() {
  return (
    <>
      <Navbar />
      <main className="mainCreateBook">
        <h1>Cadastrar novo livro</h1>
        <br />
        <br />
        <section>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Título
              </label>
              <input type="text" class="form-control" id="title" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Subítulo
              </label>
              <input type="text" class="form-control" id="subtitle" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Autor
              </label>
              <input type="text" class="form-control" id="author" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Tradutor
              </label>
              <input type="text" class="form-control" id="translator" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Local de publicação
              </label>
              <input type="text" class="form-control" id="placeOfPublication" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Editora
              </label>
              <input type="text" class="form-control" id="publisher" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Ano de publicação
              </label>
              <input type="text" class="form-control" id="yearOfPublication" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Número de páginas
              </label>
              <input type="text" class="form-control" id="numberOfPages" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Número de cópias
              </label>
              <input type="text" class="form-control" id="numberOfCopies" />
            </div>

            <br />
            <button type="submit" class="btn btn-primary">
              Cadastrar
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
