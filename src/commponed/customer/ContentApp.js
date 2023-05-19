import React from "react";
import img from '../../image/2.jpg';
import img1 from '../../image/3.png';
import img2 from '../../image/4.png';
import img3 from '../../image/5.png';
import img4 from '../../image/6.png';
import img5 from '../../image/7.png';
import img6 from '../../image/8.png';
function ContentApp(){
    return(
        <>

  
<section id="hero" class="hero pt-5 pb-3 ">
    <div class="container-lg" >
      <div class="row align-items-center align-content-center min-vh-100">
        <div class="col-md-6 mt-5 mt-md-0"data-aos="fade-up" data-aos-duration="1500">
          <div class="image text-center">
            <img src={img} class="rounded-circle mw-100 img-fluid" alt="Portfolio" />
          </div>
        </div>
        <div class="col-md-6 mt-5 mt-md-0 order-md-first"data-aos="fade-up" data-aos-duration="1500">
          <div class="heading-text ">
            <h1 class="text-danger fw-bold text-uppercase fs-1 ">Prit Ladani</h1>
            <div class="d-flex">
              <div class="iam">hello I'm react js developer&nbsp;</div>
              <div class="text text-danger"></div>
            </div>
            <a href="#portfolio" class="btn btn-danger px-4 mt-4">My Work</a>
          </div>
        </div>
      </div>
    </div>

  </section>

  <section class="about py-5" id="about">
    <div class="container-lg py-3">
      <div class="row py-3 ">
        <div class="section-titel text-center py-3">
          <h2 class="fw-bold "data-aos="fade-up" data-aos-duration="1500" >About Me</h2>
        </div>
      </div>
      <div class="row ">
        <div class="col-md-6" data-aos="fade-up" data-aos-duration="1500" >
          <div class="about">
            <h2 class="fs-3 ">i'm training for the last nine months in TOPS Technologies, i have exprience of given
              projects by company</h2>
            <p class="text-muted mt-3">The work I provide is of highest quality, fully responsive, and tested in a wide
              range of devices.</p>
            <p class=" mt-3"><span class="fw-bold"> skill -</span> i have
              knowledge
              in HTML, CSS ,bootstrap ,javascript,jquery,Reactjs.</p>
          </div>
          <div class="row text-center text-uppercase py-3">
            <div class="col-sm-6" data-aos="fade-up" data-aos-duration="1500">
              <div class="project">
                <h4 class="fs-1 fw-bold">03</h4>
                <p class="text-muted">PROJECT COMPLETE</p>
              </div>
            </div>
            <div class="col-sm-6" data-aos="fade-up" data-aos-duration="1500">
              <div class="project">
                <h4 class="fs-1 fw-bold">9/10</h4>
                <p class="text-muted">POSITIVE REVIEW</p>
              </div>
            </div>
          </div>
          <div class="row align-items-lg-center d-flex">
            <div class="col-6 col-sm-4 " data-aos="fade-up" data-aos-duration="1500">
              <a href="pdf/resume.pdf" download="resume" class="btn btn-danger">Download Resume</a>
            </div>
            <div class="col-6 col-sm-4">
              <div class="icon text-dark "data-aos="fade-up" data-aos-duration="1500">
                <a href="https://wa.me/9099525868?text=hello%20i'm%20prit%20ladani%20%0A" class="text-dark me-2 "><i
                    class="bi bi-whatsapp"></i></a>
                <a href="https://www.linkedin.com/in/prit-ladani-28a229248/" class="text-dark me-2"><i
                    class="bi bi-linkedin"></i></a>
                <a href="https://instagram.com/prit_ladani_?igshid=ZDdkNTZiNTM=" class="text-dark me-2"><i
                    class="bi bi-instagram"></i></a>
                <a href="https://www.facebook.com/ladani.prit.5?mibextid=ZbWKwL" class="text-dark me-2"><i
                    class="bi bi-facebook"></i></a>
              </div>
            </div>
          </div>
        </div>
    <div class="col-md-6"  >
          <div class="row py-3">
            <div class="labels mt-1" data-aos="fade-up" data-aos-duration="1500">
              <p class="mb-0 fs-5">Html</p>
              <div class="progress" >
                <div class="progress-bar bg-danger fw-bold " role="progressbar" >90%</div>
              </div>
            </div>
            <div class="labels mt-3" data-aos="fade-up" data-aos-duration="1500">
              <p class="mb-0 fs-5">Css</p>
              <div class="progress">
                <div class="progress-bar bg-danger fw-bold" role="progressbar">85%</div>
              </div>
            </div>
            <div class="labels mt-3" data-aos="fade-up" data-aos-duration="1500">
              <p class="mb-0 fs-5">Bootstrap</p>
              <div class="progress" >
                <div class="progress-bar bg-danger fw-bold" role="progressbar" >95%</div>
              </div>
            </div>
            <div class="labels mt-3" data-aos="fade-up" data-aos-duration="1500">
              <p class="mb-0 fs-5">Javascript</p>
              <div class="progress" >
                <div class="progress-bar bg-danger fw-bold" role="progressbar" >60%</div>
              </div>
            </div>
            <div class="labels mt-3" data-aos="fade-up" data-aos-duration="1500">
              <p class="mb-0 fs-5">React js</p>
              <div class="progress">
                <div class="progress-bar bg-danger fw-bold" role="progressbar">60%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>


  <section id="service" class="service py-3">
    <div class="container py-5">
      <div class="row justify-content-center" data-aos="fade-up" data-aos-duration="1500">
        <div class=" section-titel text-center py-5">
          <h2 class="fw-bold">Service</h2>
        </div>
      </div>
      <div class="row ">
        <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1500">
          <div class="service-text shadow-sm p-3 bg-white rounded my-3">
            <div class="icon-text text-center py-2 ">
              <i class="bi bi-code-slash text-danger fs-2 fw-bold"></i>
              <h5 class="py-3">Web Development</h5>
              <p class="text-muted">I offer both design and development</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4"data-aos="fade-up" data-aos-duration="1500">
          <div class="service-text shadow-sm p-3 bg-white rounded my-3">
            <div class="icon-text text-center py-2 ">
              <i class="bi bi-lightbulb-fill text-danger fs-2 fw-bold"></i>
              <h5 class="py-3">Creative Design</h5>
              <p class="text-muted">I design from PSD to HTML.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4"data-aos="fade-up" data-aos-duration="1500">
          <div class="service-text shadow-sm p-3 bg-white rounded my-3">
            <div class="icon-text text-center py-2 ">
              <i class="bi bi-filetype-js text-danger fs-2 fw-bold"></i>
              <h5 class="py-3">Platforms</h5>
              <p class="text-muted">ReactJs, AngularJs, Bootstrap.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>

  <section id="portfolio" class="portfolio py-3">
    <div class="container-lg" >
      <div class="row justify-content-center"data-aos="fade-up" data-aos-duration="1500">
        <div class=" section-titel text-center py-5">
          <h2 class="fw-bold">Latest work</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-6 col-lg-4"data-aos="fade-up" data-aos-duration="1500">
          <div class="portfoli-img py-3">
            <img class="img-thumbnail" src={img1} />
            <h4>Baber salun (responsive)
            </h4>
            <a class="text-danger text-decoration-none fs-5 mt-0 ms-0" href="https://prit07.github.io/project/">Live
              Demo</a>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-lg-4"data-aos="fade-up" data-aos-duration="1500">
          <div class="portfoli-img py-3">
            <img class="img-thumbnail" src={img2} />
            <h4>Apani dukan</h4>
            <a class="text-danger text-decoration-none fs-5 mt-0 ms-0" href="https://prit07.github.io/apnidukan/">Live
              Demo</a>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-lg-4"data-aos="fade-up" data-aos-duration="1500">
          <div class="portfoli-img py-3">
            <img class="img-thumbnail" src={img3} />
            <h4>Digital Watch</h4>
            <a class="text-danger text-decoration-none fs-5 mt-0 ms-0" href="http://ladaniprit.byethost6.com/">Live
              Demo</a>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-lg-4"data-aos="fade-up" data-aos-duration="1500">
          <div class="portfoli-img py-3">
            <img class="img-thumbnail " src={img4} />
            <h4>Private holiday</h4>
            <a class="text-danger text-decoration-none fs-5 mt-0 ms-0" href="image/6.png">Live Demo</a>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-lg-4"data-aos="fade-up" data-aos-duration="1500">
          <div class="portfoli-img py-3">
            <img class="img-thumbnail " src={img5} />
            <h4>Private holiday</h4>
            <a class="text-danger text-decoration-none fs-5 mt-0 ms-0" href="image/7.png">Live Demo</a>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-lg-4"data-aos="fade-up" data-aos-duration="1500">
          <div class="portfoli-img py-3">
            <img class="img-thumbnail" src={img6} />
            <h4>Private holiday</h4>
            <a class="text-danger text-decoration-none fs-5 mt-0 ms-0" href="image/8.png">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
   
  </section>

  </>
    );
};
export default ContentApp ;
