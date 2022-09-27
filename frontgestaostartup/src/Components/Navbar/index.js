import React from "react";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Gestão Startup
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/activegoods"
                >
                  Bens Ativos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/books">
                  Livros
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/loans">
                  Empréstimos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/projects">
                  Projetos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Logs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
