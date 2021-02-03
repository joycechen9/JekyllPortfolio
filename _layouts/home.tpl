---
layout: default
---
<header id="header" class="header-transparent">
    <div class="container">
    {% include site/header.inc %}
    {% include site/nav.inc %}
    </div>
</header>

<section id="hero">
   {% include site/hero.inc %}
</section>

<main id="main">
  <section id="about">
    {% include site/about.inc %}
  </section>

  <section id="call-to-action">
   {% include site/resume.inc %}
  </section>

  <!-- ======= Portfolio Section ======= -->
  <section id="portfolio" class="portfolio">
    <div class="container" data-aos="fade-up">
      <div class="section-header">
        <h3 class="section-title">Art</h3>
        <p class="section-description">I like to do some drawing, painting, graphic design, and sculpture!<br><a
            href="p-art.html" class="cta-btn" title="Visit my full art page">See more</a></p>
      </div>

      {% include site/featured.inc %}

    </div>
  </section><!-- End Portfolio Section -->

  <!-- ======= STEM Projects Section ======= -->
 <section id="team">
    <div class="container" data-aos="fade-up">
      <div class="section-header">
        <h3 class="section-title" id="p-stem">Engineering</h3>
        <p class="section-description">Take a look at some engineering design projects I've done:</p>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="member" data-aos="fade-up" data-aos-delay="100">
            <div class="social">
              <h2><a href="project1.html">Cell Phone Stand</a></h2>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="member" data-aos="fade-up" data-aos-delay="200">
            <div class="social">
              <h2><a href="project2.html">Hydraulic Arm Kit</a></h2>
            </div>
          </div>
        </div>
 
        <div class="col-lg-4 col-md-6">
          <div class="member" data-aos="fade-up" data-aos-delay="300">
            <div class="social">
              <h2><a href="project3.html">Homemade Ropebreak Dynamometer</a></h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section><!-- End Stem Projects Section -->

  <!-- ======= Contact Section ======= -->
  <section id="contact">
    <div class="container">
      <div class="section-header">
        <h3 class="section-title">Contact</h3>
      </div>
    </div>

    <div class="container mt-5">
      <div class="row justify-content-center">

        <div class="col-lg-3 col-md-4">

          <div class="info">
            <div>
              <i class="fa fa-envelope"></i>
              <p>joyce.chen1@uwaterloo.ca</p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>(647) 501-6661</p>
            </div>
          </div>

          <div class="social-links">
            <a href="https://www.instagram.com/joy.ceart/" class="instagram"><i class="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/joycechen9/" class="linkedin"><i class="fa fa-linkedin"></i></a>
          </div>

        </div>
      </div>

    </div>
  </section><!-- End Contact Section -->

</main>