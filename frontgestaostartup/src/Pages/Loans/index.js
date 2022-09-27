import React from "react";
import Navbar from "../../Components/Navbar";
import "./loans.css";

export default function Loans() {
  var loans = [
    {
      bookTitle: "Livro top",
      person: "Beatriz Calazans",
      responsablePerson: "Ana Paula",
      loanDate: "22/01/2022",
      loanLimitDate: "02/02/2022",
    },
    {
      bookTitle: "Livro top",
      person: "Beatriz Calazans",
      responsablePerson: "Ana Paula",
      loanDate: "22/01/2022",
      loanLimitDate: "02/02/2022",
    },
    {
      bookTitle: "Livro top",
      person: "Beatriz Calazans",
      responsablePerson: "Ana Paula",
      loanDate: "22/01/2022",
      loanLimitDate: "02/02/2022",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="mainActiveGoods">
        <h1>Empréstimos</h1>
        <br />

        <a type="button" class="btn btn-primary" href="/createloan">
          Registrar empréstimo
        </a>

        <br />
        <br />
        <br />
        <br />
        <section>
          <ul>
            {loans.map((item) => (
              <li>
                <div>
                  <h3>Título: {item.bookTitle}</h3>
                  <p>Para quem foi emprestado: {item.person}</p>
                  <p>
                    Responsável que autorizou o empréstimo:{" "}
                    {item.responsablePerson}
                  </p>
                  <p>Data de empréstimo: {item.loanDate}</p>
                  <p>Data máxima de devolução: {item.loanLimitDate}</p>
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
