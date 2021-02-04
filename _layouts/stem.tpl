---
layout: default
---

<main id="main">

    <!-- ======= Breadcrumbs Section ======= -->
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>{{page.title_txt}}</h2>
          <ol>
            <li><a href="{{site.baseurl}}/">Home</a></li>
            <li><a href="{{site.baseurl}}/#p-stem">Projects</a></li>
            <li>{{page.title_txt}}</li>
          </ol>
        </div>

      </div>
    </section>

    <!-- ======= Portfolio Details Section ======= -->
    <section class="portfolio-details">
      <div class="container">

        <div class="portfolio-details-container">
        {% if page.permalink == "/stem1/" %}
          <div class="owl-carousel portfolio-details-carousel">
            <img src="{{site.baseurl}}/assets/site/images/stem details/PHONE STAND-1.jpg" class="img-fluid" alt="">
            <img src="{{site.baseurl}}/assets/site/images/stem details/PHONE STAND-2.jpg" class="img-fluid" alt="">
            <img src="{{site.baseurl}}/assets/site/images/stem details/PHONE STAND-3.jpg" class="img-fluid" alt="">
          </div>

        {% elsif page.permalink == "/stem2/" %}
          <div class="owl-carousel portfolio-details-carousel">
            <img src="{{site.baseurl}}/assets/site/images/stem details/KITINTRO.jpg" class="img-fluid" alt="Introduction to Hydraulic Pneumatic Hoist">
            <img src="{{site.baseurl}}/assets/site/images/stem details/KITDRAWING.jpg" class="img-fluid" alt="Hoist AutoCAD Drawing">
            <img src="{{site.baseurl}}/assets/site/images/stem details/KITPROGRESS.jpg" class="img-fluid" alt="Progress Photos">
            <img src="{{site.baseurl}}/assets/site/images/stem details/KITFINAL1.jpg" class="img-fluid" alt="Four Prototypes of the Hoist">
            <img src="{{site.baseurl}}/assets/site/images/stem details/KITFINAL2.jpg" class="img-fluid" alt="Detail Photos of the Air Prototype">
            <img src="{{site.baseurl}}/assets/site/images/stem details/KITDATA.jpg" class="img-fluid" alt="Data Analysis">
            <img src="{{site.baseurl}}/assets/site/images/stem details/KITSUMMARY.jpg" class="img-fluid" alt="Summary">
          </div>

        {% elsif page.permalink == "/stem3/" %}
          <div class="owl-carousel portfolio-details-carousel">
            <img src="{{site.baseurl}}/assets/site/images/stem details/DYNOINTRO.jpg" class="img-fluid" alt="Introduction to Homemade Ropebreak Dynamometer">
            <img src="{{site.baseurl}}/assets/site/images/stem details/DYNOSAFETY.jpg" class="img-fluid" alt="Wire Safety">
            <img src="{{site.baseurl}}/assets/site/images/stem details/DYNODESIGN1.jpg" class="img-fluid" alt="Design 1">
            <img src="{{site.baseurl}}/assets/site/images/stem details/DYNODESIGN2.jpg" class="img-fluid" alt="Design 2">
            <img src="{{site.baseurl}}/assets/site/images/stem details/DYNODESIGN34.jpg" class="img-fluid" alt="Design 3, 4">
            <img src="{{site.baseurl}}/assets/site/images/stem details/DYNOTEST1.jpg" class="img-fluid" alt="Testing">
            <img src="{{site.baseurl}}/assets/site/images/stem details/DYNODATA.jpg" class="img-fluid" alt="Data">
          </div>
        {% endif %}


        </div>

        <div class="portfolio-description">
          <h2>{{page.heading_txt}}</h2>
          <h3>{{page.date_txt}}</h3>
          <p>
            {{ page.desc_txt | markdownify }}
          </p>
          {% if page.permalink == "/stem3/" %}}
          <iframe height= 400px; width="500px" src="https://www.youtube.com/embed/uy4TcKKHLhI">
          </iframe>
          {% endif %}
        </div>
      </div>
    </section>

  </main>
