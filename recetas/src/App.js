import React from "react";
import "./index.css";
import Buscar from "./components/Buscar";
function App() {
  return (
    <>
      <nav className="navbar nav-first navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="./imgs/navbar-brand.svg" alt="xxx" />
          </a>
          <Buscar />
        </div>
      </nav>
      <header class="header">
        <div class="overlay">
          <img src="imgs/logo.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page" class="logo" />
          <h1 class="subtitle">Bienvenido a mi restaurante</h1>
        </div>
      </header>
      <div class="container-fluid">
        <div class="row">
          <div class="col-6">
            <section id="about">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-md-6">
                    <h6 class="section-subtitle">Opening Times</h6>
                    <h3 class="section-title">Working Times</h3>
                    <p class="mb-1 font-weight-bold">
                      Monday - Thursday : <span class="font-weight-normal pl-2 text-muted">7:00 am - 12:00 pm</span>
                    </p>
                    <p class="mb-1 font-weight-bold">
                      Friday - Saturday : <span class="font-weight-normal pl-2 text-muted">7:00 am - Midnight</span>
                    </p>
                    <p class="mb-1 font-weight-bold">
                      Saturday - Sunday : <span class="font-weight-normal pl-2 text-muted">9:00 am - 12:00 pm</span>
                    </p>

                    <a href="#book-table" class="btn btn-primary btn-sm w-md mt-4">
                      Book a table
                    </a>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col">
                        <img alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page" src="./imgs/about-1.jpg" class="w-100 rounded shadow" />
                      </div>
                      <div class="col">
                        <img alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page" src="./imgs/about-2.jpg" class="w-100 rounded shadow" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="section-devider my-6 transparent"></div>
              </div>
            </section>
          </div>
          <div class="col-6 ">
            <form>
              <div class="mb-3">
                <label for="text" class="form-label">
                  Agregar Plato
                </label>
                <hr />
                <label for="text" class="form-label">
                  Nombre
                </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <label for="text" class="form-label">
                  Ingredientes
                </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <label for="text" class="form-label">
                  Preparacion
                </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
