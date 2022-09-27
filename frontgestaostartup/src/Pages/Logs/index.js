import React from "react";
import Navbar from "../../Components/Navbar";

export default function Logs() {
  var logs = [
    {
      user: "Beatriz",
      role: "Gestor",
      accessDate: "27/09/2022",
    },
    {
      user: "Beatriz",
      role: "Gestor",
      accessDate: "27/09/2022",
    },
    {
      user: "Beatriz",
      role: "Gestor",
      accessDate: "27/09/2022",
    },
    {
      user: "Beatriz",
      role: "Gestor",
      accessDate: "27/09/2022",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="mainActiveGoods">
        <h1>Logs de acesso ao sistema</h1>

        <br />
        <br />
        <br />
        <section>
          <ul>
            {logs.map((item) => (
              <li>
                <div>
                  <h3>Usuário: {item.user}</h3>
                  <p>Cargo: {item.role}</p>
                  <p>Data de acesso: {item.accessDate}</p>
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
