import React from "react";
import Navbar from "../../Components/Navbar";
import "./createloan.css";

export default function CreateLoan() {
  return (
    <>
      <Navbar />
      <main className="mainCreateBook">
        <h1>Registrar novo empréstimo</h1>
        <br />
        <br />
        <section>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                ID livro emprestado
              </label>
              <input type="text" class="form-control" id="title" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Pessoa que será emprestado o livro
              </label>
              <input type="text" class="form-control" id="subtitle" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Responsável que autorizou o empréstimo
              </label>
              <input type="text" class="form-control" id="author" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Data do empréstimo
              </label>
              <input type="date" class="form-control" id="translator" />
            </div>

            <br />
            <button type="submit" class="btn btn-primary">
              Registrar
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
