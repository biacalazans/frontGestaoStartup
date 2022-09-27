import React from "react";
import Navbar from "../../Components/Navbar";
import "./createactivegoods.css";

export default function CreateActiveGoods() {
  return (
    <>
      <Navbar />
      <main className="mainCreateActiveGoods">
        <h1>Cadastrar novo Bem Ativo</h1>
        <br />
        <br />
        <section>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Nome
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Descrição
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Data de aquisição
              </label>
              <input
                type="date"
                class="form-control"
                id="exampleInputPassword1"
              />
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
