import React from "react";
import Navbar from "../../Components/Navbar";
import "./createproject.css";

export default function CreateProject() {
  return (
    <>
      <Navbar />
      <main className="mainCreateBook">
        <h1>Cadastrar novo projeto</h1>
        <br />
        <br />
        <section>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Nome do projeto
              </label>
              <input type="text" class="form-control" id="title" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Responsável pelo projeto (utilizar username)
              </label>
              <input type="text" class="form-control" id="subtitle" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Colaboradores do projeto (utilizar username e separar eles com
                vírgula)
              </label>
              <input type="text" class="form-control" id="author" />
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
