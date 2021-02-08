---
layout: default
---

<!-- ======= INTRO Section ======= -->
  <section id="hero">
    <div class="hero-container" data-aos="zoom-in" data-aos-delay="100">
      <h1>{{page.intro_list.title_txt}}</h1>
      <a href="#p-art-2d" class="btn-get-started">{{page.intro_list.sec1_txt}}</a>
      <a href="#p-art-3d" class="btn-get-started3">{{page.intro_list.sec2_txt}}</a>
      <a href="#p-art-graphic" class="btn-get-started2">{{page.intro_list.sec3_txt}}</a>
    </div>
  </section>

<main id="main">
<!-- ======= 2D SECTION BEGINS ======= -->
  <section id="p-art-2d">
    <div class="container" data-aos="fade-up">
      <div class="row about-container">
<!-- Header -->
        <div class="col-lg-6 content order-lg-1 order-2">
          <h2 class="title">{{page.main_list.sec1_list.title_txt}}</h2>
        </div>
      </div>
<!-- Data Filter -->
      <div class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">ALL</li>
            <li data-filter=".filter-app">{{page.main_list.sec1_list.fil1_txt}}</li>
            <li data-filter=".filter-card">{{page.main_list.sec1_list.fil2_txt}}</li>
            <li data-filter=".filter-web">{{page.main_list.sec1_list.fil3_txt}}</li>
          </ul>
        </div>
      </div>
<!-- Photo Grid -->
      <div class="row" data-aos="fade-up" data-aos-delay="200">
        <div class="column">
        {% for content in page.my2dArt_list.colLeft_list %}
          <img src="{{site.baseurl}}{{content.img_txt}}" style="width:100%" class="img-fluid">
        {% endfor %}
        </div>

        <div class="column">
        {% for content in page.my2dArt_list.colMid_list %}
          <img src="{{site.baseurl}}{{content.img_txt}}" style="width:100%"class="img-fluid">
        {% endfor %}
        </div>

        <div class="column">
        {% for content in page.my2dArt_list.colRight_list %}
          <img src="{{site.baseurl}}{{content.img_txt}}" style="width:100%"class="img-fluid">
        {% endfor %}
        </div>
      </div>
    </div>
  </section>

<!-- ======= 3D SECTION BEGINS ======= -->
  <section id="p-art-3d">
    <div class="container" data-aos="fade-up">
        <div class="row about-container">
<!-- Header -->
          <div class="col-lg-6 content order-lg-1 order-2">
            <h2 class="title2">{{page.main_list.sec2_list.title_txt}}</h2>
          </div>
        </div>
<!-- Photo Grid -->
      <div class="row" data-aos="fade-up" data-aos-delay="200"> 
        <div class="column2">
        {% for content in page.my3dArt_list.colLeft_list %}
          <img src="{{site.baseurl}}{{content.img_txt}}" style="width:100%" class="img-fluid">
        {% endfor %}
        </div>
        <div class="column2">
        {% for content in page.my3dArt_list.colRight_list %}
          <img src="{{site.baseurl}}{{content.img_txt}}" style="width:100%"class="img-fluid">
        {% endfor %}
        </div>  
      </div> 
    </div>
  </section>  

<!-- ======= GRAPHIC SECTION BEGINS ======= -->
  <section id="p-art-graphic">
    <div class="container" data-aos="fade-up">
       <div class="row about-container">
<!-- Header -->
          <div class="col-lg-6 content order-lg-1 order-2">
            <h2 class="title3">{{page.main_list.sec3_list.title_txt}}</h2>
          </div>
        </div>
<!-- Data Filter -->
        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters2">
              <li data-filter="*" class="filter-active2">{{page.main_list.sec3_list.fil1_txt}}</li>
              <li data-filter=".filter-app">{{page.main_list.sec3_list.fil2_txt}}</li>
            </ul>
          </div>
        </div>
<!-- Photo Grid -->
        <div class="row" data-aos="fade-up" data-aos-delay="200"> 
          <div class="column2">
          {% for content in page.graphic_list.colLeft_list %}
            <img src="{{site.baseurl}}{{content.img_txt}}" style="width:100%" class="img-fluid">
          {% endfor %}
          </div>
          <div class="column2">
          {% for content in page.graphic_list.colRight_list %}
            <img src="{{site.baseurl}}{{content.img_txt}}" style="width:100%"class="img-fluid">
          {% endfor %}
          </div>  
        </div> 
        <div class="column2">
        {% for content in page.graphic_list.colBottom_list %}
          <img src="{{site.baseurl}}{{content.img_txt}}" style="width:100%"class="img-fluid">
        {% endfor %}
        </div>  
    </div> 
  </section>

<!-- ======= CONTACT Section ======= -->
  <section id="contact">
      {% include site/contact.inc %}
  </section>
</main>
      