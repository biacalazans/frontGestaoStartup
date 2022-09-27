import React from "react";
import Navbar from "../../Components/Navbar";
import "./activegoods.css";

export default function ActiveGoods() {
  var activeGoods = [
    {
      name: "Notebook",
      description:
        "Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers.",
      date: "27/09/2022",
    },
    {
      name: "Desktop",
      description:
        "Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers.",
      date: "27/09/2022",
    },
    {
      name: "Sofá",
      description:
        "Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers.",
      date: "27/09/2022",
    },
    {
      name: "Cadeira",
      description:
        "Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers.",
      date: "27/09/2022",
    },
    {
      name: "Televisor",
      description:
        "Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers.",
      date: "27/09/2022",
    },
    {
      name: "Projetor",
      description:
        "Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers.",
      date: "27/09/2022",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="mainActiveGoods">
        <h1>Bens Ativos</h1>
        <br />

        <a type="button" class="btn btn-primary" href="/createactivegood">
          Adicionar Bem Ativo
        </a>
        <br />
        <br />
        <br />
        <br />
        <section>
          <ul>
            {activeGoods.map((item) => (
              <li>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>
                    <strong>Data de aquisição: </strong>
                    {item.date}
                  </p>
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
