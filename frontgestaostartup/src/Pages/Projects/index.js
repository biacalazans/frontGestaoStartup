import React from "react";
import Navbar from "../../Components/Navbar";
import "./projects.css";

export default function Projects() {
  var projects = [
    {
      name: "Projeto Brabo",
      responsible: "Beatriz Calazans",
      collaborators: ["Ana Paula", "Gean Carlos", "Grhamm Pabst"],
    },
    {
      name: "Projeto Brabo",
      responsible: "Beatriz Calazans",
      collaborators: ["Ana Paula", "Gean Carlos", "Grhamm Pabst"],
    },
    {
      name: "Projeto Brabo",
      responsible: "Beatriz Calazans",
      collaborators: ["Ana Paula", "Gean Carlos", "Grhamm Pabst"],
    },
  ];
  return (
    <>
      <Navbar />
      <main className="mainActiveGoods">
        <h1>Projetos</h1>
        <br />

        <a type="button" class="btn btn-primary" href="/createproject">
          Cadastrar projeto
        </a>

        <br />
        <br />
        <br />
        <br />
        <section>
          <ul>
            {projects.map((item) => (
              <li>
                <div>
                  <h3>Nome do projeto: {item.name}</h3>
                  <p>Responsável pelo projeto: {item.responsible}</p>
                  <p>Colaboradores:</p>
                  <ul>
                    {item.collaborators.map((c) => (
                      <li>{c}</li>
                    ))}
                  </ul>
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
