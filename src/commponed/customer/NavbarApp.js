import React from "react";

function NavbarApp(){
  return(
    <>
        <nav class="shadow-sm  navbar-expand-md nav1">
    <div class="container-fluid ">
      <div class="row py-2">
        <div class="col-md-2 col-3 text-center">
          <a href="#" class="nav-link navbar-brand text-danger fw-bold">Prit</a>
        </div>
        <div class="col-md-8 col-6  ">
          <div class="collapse" id="btt">
            <ul class="navbar-nav mb-auto  d-flex justify-content-center">
              <li class="nav-item mt-2 m-2">
                <a class="nav-link text-dark text-center" href="#hero">Home</a>
              </li>
              <li class="nav-item mt-2 m-2">
                <a class="nav-link text-dark text-center" href="#about">About</a>
              </li>
              <li class="nav-item mt-2 m-2">
                <a class="nav-link text-dark text-center" href="#service">Service</a>
              </li>
              <li class="nav-item mt-2 m-2 ">
                <a class="nav-link text-dark text-center" href="#portfolio">Portfolio</a>
              </li>
              <li class="nav-item mt-2 m-2">
                <a class="nav-link text-dark text-center" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2 col-3 text-center pt-3">
          <button type="button" class="btn btn-danger" data-bs-target="#btt" data-bs-toggle="collapse">
            <i class="bi bi-list text-white" btn></i>
          </button>
        </div>
      </div>
    </div>
  </nav> 


    </>
  )
}

export default NavbarApp ;