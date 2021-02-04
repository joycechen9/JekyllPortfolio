---
layout: default
---
<!-- ======= Intro Section ======= -->
<section id="hero">
  <div class="hero-container" data-aos="zoom-in" data-aos-delay="100">
    <h1>{{page.intro_txt.title_txt}}</h1>
    <h2>{{page.intro_txt.subtitle_txt}}</h2>
  </div>
</section>

<main id="main">
<!-- ======= About Section ======= -->
  <section id="about">
    <div class="container" data-aos="fade-up">
      <div class="row about-container">
        <div class="col-lg-6 content order-lg-1 order-2">
            <h2 class="title">{{ page.about_list.title_txt }}</h2>
                <p> {{ page.about_list.content_txt }} </p>
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon">
                <i class="fa fa-wrench"></i>
              </div>
                <h4 class="title"><a href="">{{ page.about_list.qual_list.firstTitle_txt }}</a></h4>
              <div class="description">
                {{ page.about_list.qual_list.first_txt | markdownify }}
              </div>
            </div>
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div class="icon">
                  <i class="fa fa-graduation-cap"></i>
                </div>
                <h4 class="title"><a href="">{{ page.about_list.qual_list.secondTitle_txt }}</a></h4>
                <div class="description">
                    {{ page.about_list.qual_list.second_txt | markdownify }}
                </div>
            </div>
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div class="icon">
                  <i class="fa fa-paint-brush"></i>
                </div>
                <h4 class="title"><a href="">{{ page.about_list.qual_list.thirdTitle_txt }}</a></h4>
                <p class="description">{{ page.about_list.qual_list.third_txt }}</p>
            </div>
        </div>
        <div class="col-lg-6 background order-lg-2 order-1" data-aos="fade-left" data-aos-delay="100">
        </div>
      </div>
    </div>
  </section>

<!-- ======= Resume Section ======= -->
  <section id="call-to-action">
    <div class="container">
      <div class="row" data-aos="zoom-in">
        <div class="col-lg-9 text-center text-lg-left">
            <h3 class="cta-title">{{ page.resume_list.title_txt }}</h3>
        </div>
        <div class="col-lg-3 cta-btn-container text-center">
            <a class="cta-btn align-right" href="{{site.baseurl}}/assets/site/files/Joyce Chen Resume.pdf" title="View and download my resume">{{page.resume_list.btn_txt}}</a>
        </div>
      </div>
    </div>
  </section>

<!-- ======= Portfolio Section ======= -->
  <section id="portfolio" class="portfolio">
      <div class="container" data-aos="faden-up">
        <div class="section-header">
          <h3 class="section-title">{{ page.art_list.title_txt}}</h3>
          <p class="section-description">
            {{ page.art_list.subtitle_txt }}<br>
            <a href="{{site.baseurl}}/art/" class="cta-btn" title="Visit my full art page">{{ page.art_list.btn_txt}}</a>
          </p>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <a href="{{page.art_list.one_txt.img_link}}" data-gall="portfolioGallery" class="venobox preview-link" title="{{page.art_list.one_txt.title_txt}}">
              <img src="{{page.art_list.one_txt.img_link}}" class="img-fluid" alt="">
            </a>
            <div class="portfolio-info">
              <h4><i>{{page.art_list.one_txt.title_txt}}</i></h4>
              <p>{{page.art_list.one_txt.desc_txt}}</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <a href="{{page.art_list.two_txt.img_link}}" data-gall="portfolioGallery" class="venobox preview-link" title="{{page.art_list.two_txt.title_txt}}">
              <img src="{{page.art_list.two_txt.img_link}}" class="img-fluid" alt="">
            </a>
            <div class="portfolio-info">
              <h4><i>{{page.art_list.two_txt.title_txt}}</i></h4>
              <p>{{page.art_list.two_txt.desc_txt}}</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <a href="{{page.art_list.three_txt.img_link}}" data-gall="portfolioGallery" class="venobox preview-link" title="{{page.art_list.three_txt.title_txt}}">
              <img src="{{page.art_list.three_txt.img_link}}" class="img-fluid" alt="">
            </a>
           <div class="portfolio-info">
            <h4><i>{{page.art_list.three_txt.title_txt}}</i></h4>
            <p>{{page.art_list.three_txt.desc_txt}}</p>
          </div>
        </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <a href="{{page.art_list.four_txt.img_link}}" data-gall="portfolioGallery" class="venobox preview-link"
            title="{{page.art_list.four_txt.title_txt}}"><img src="{{page.art_list.four_txt.img_link}}" class="img-fluid" alt=""></a>
          <div class="portfolio-info">
            <h4><i>{{page.art_list.four_txt.title_txt}}</i></h4>
            <p>{{page.art_list.four_txt.desc_txt}}</p>
          </div>
          </div>

    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
        <a href="{{page.art_list.five_txt.img_link}}" data-gall="portfolioGallery" class="venobox preview-link"
            title="{{page.art_list.five_txt.title_txt}}"><img src="{{page.art_list.five_txt.img_link}}" class="img-fluid" alt=""></a>
        <div class="portfolio-info">
            <h4><i>{{page.art_list.five_txt.title_txt}}</i></h4>
            <p>{{page.art_list.five_txt.desc_txt}}</p>
        </div>
    </div>

    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
        <a href="{{page.art_list.six_txt.img_link}}" data-gall="portfolioGallery" class="venobox preview-link"
            title="{{page.art_list.six_txt.title_txt}}"><img src="{{page.art_list.six_txt.img_link}}" class="img-fluid"
                alt=""></a>
        <div class="portfolio-info">
            <h4><i>{{page.art_list.six_txt.title_txt}}</i></h4>
            <p>{{page.art_list.six_txt.desc_txt}}</p>
        </div>
    </div>

    <div class="col-lg-4 col-md-6 portfolio-item filter-card">
        <a href="{{page.art_list.seven_txt.img_link}}" data-gall="portfolioGallery" class="venobox preview-link"
            title="{{page.art_list.seven_txt.title_txt}}"><img src="{{page.art_list.seven_txt.img_link}}" class="img-fluid" alt=""></a>
        <div class="portfolio-info">
            <h4><i>{{page.art_list.seven_txt.title_txt}}</i></h4>
            <p>{{page.art_list.seven_txt.desc_txt}}</p>
        </div>
    </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <a href="{{page.art_list.eight_txt.img_link}}" data-gall="portfolioGallery" class="venobox preview-link"
            title="{{page.art_list.eight_txt.title_txt}}"><img src="{{page.art_list.eight_txt.img_link}}" class="img-fluid" alt=""></a>
          <div class="portfolio-info">
            <h4><i>{{page.art_list.eight_txt.title_txt}}</i></h4>
            <p>{{page.art_list.eight_txt.desc_txt}}</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <a href="{{page.art_list.nine_txt.img_link}}" data-gall="portfolioGallery" class="venobox preview-link"
            title="{{page.art_list.nine_txt.title_txt}}"><img src="{{page.art_list.nine_txt.img_link}}" class="img-fluid" alt=""></a>
          <div class="portfolio-info">
            <h4><i>{{page.art_list.nine_txt.title_txt}}</i></h4>
            <p>{{page.art_list.nine_txt.desc_txt}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

<!-- ======= STEM Projects Section ======= -->
  <section id="team">
    <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h3 class="section-title" id="p-stem">{{page.eng_list.title_txt}}</h3>
          <p class="section-description">{{page.eng_list.subtitle_txt}}</p>
        </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="member" data-aos="fade-up" data-aos-delay="100">
            <div class="social">
              <h2><a href="{{site.baseurl}}/stem1/">{{page.eng_list.one_txt}}</a></h2>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="member" data-aos="fade-up" data-aos-delay="200">
            <div class="social">
              <h2><a href="{{site.baseurl}}/stem2/">{{page.eng_list.two_txt}}</a></h2>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="member" data-aos="fade-up" data-aos-delay="300">
            <div class="social">
              <h2><a href="{{site.baseurl}}/stem3/">{{page.eng_list.three_txt}}</a></h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  
<!-- ======= Contact Section ======= -->
  <section id="contact">
      {% include site/contact.inc %}
  </section>
</main>