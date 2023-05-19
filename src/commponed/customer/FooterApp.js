import React from "react"

function FooterApp(){
    return(
        <>
 
<section id="contact" class="contact py-3">
    <div class="container-lg py-4"  >
      <div class="row justify-content-center">
        <div class="section-titel text-center py-5"data-aos="fade-up" data-aos-duration="1500">
          <h2 class="fw-bold">Contact</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5"data-aos="fade-up" data-aos-duration="1500">
          <div class="contact-text d-flex mb-3 py-3">
            <div class="icon-item">
              <i class="bi bi-envelope-check-fill text-danger fs-3"></i>
            </div>
            <div class="contact-text ps-4"data-aos="fade-up" data-aos-duration="1500">
              <h4 class="">Email</h4>
              <a href="mailto:pritladani07@gmail.com" class="text-muted text-decoration-none">pritladani07@gmail.com</a>
            </div>
          </div>
          <div class="contact-text d-flex mb-3 py-3"data-aos="fade-up" data-aos-duration="1500">
            <div class="icon-item">
              <i class="bi bi-telephone-fill text-danger fs-3"></i>
            </div>
            <div class="contact-text ps-4">
              <h4 class="">Phone</h4>
              <a href="tel:+9199525868" class="text-muted text-decoration-none">(+91)9099525868</a>
            </div>
          </div>
          <div class="contact-text d-flex mb-3 py-3"data-aos="fade-up" data-aos-duration="1500">
            <div class="icon-item">
              <i class="bi bi-geo-alt-fill text-danger fs-3"></i>
            </div>
            <div class="contact-text ps-4 ">
              <h4 class="">visit</h4>
              <a href="https://goo.gl/maps/hc6RMqokpWvc8Ve69" class="text-muted text-decoration-none">Rajkot</a>
            </div>
          </div>
        </div>
        <div class="col-md-7"data-aos="fade-up" data-aos-duration="1000">
          <form class="myfrom" method="post" action="mail.php">
            <div class="row">
              <div class="form-group mt-2 col-md-6">
                <input type="text" name="fname" placeholder="FirstName *" required class="form-control" />
              </div>
              <div class="form-group mt-2 col-md-6">
                <input type="text" name="lname" placeholder="LastName *" required class="form-control" />
              </div>
            </div>
            <div class="input-group mt-2">
              <input type="text" name="email" placeholder="Email *" required class="form-control" />
            </div>
            <div class="input-group mt-2">
              <input type="text" name="phone" placeholder="Phone *" required class="form-control" />
            </div>
            <div class="input-group mt-2">
              <textarea name="message" placeholder="Message *" required class="form-control"></textarea>
            </div>

            <div class="row">
              <div class="form-group mt-2 col-sm-2">
                <input type="submit" name="register" value="Send" class="btn1 btn-danger text-white" />
              </div>
              <div class="form-group mt-2 col-sm-2">
                <input type="reset" value="reset" class="btn1 btn-danger text-white" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <footer class="footer border-top py-4">
    <div class="container-lg">
      <div class="row">
        <div class="col-lg-12">
          <p class="m-0 text-center text-muted fw-light">Developed by <span class="fw-bold text-dark">@Prit Ladani</span></p>
        </div>
      </div>
    </div>
  </footer>


           
</>
);
}

export default FooterApp;


