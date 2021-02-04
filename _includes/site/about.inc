<div class="container" data-aos="fade-up">
    <div class="row about-container">


        <div class="col-lg-6 content order-lg-1 order-2">
            <h2 class="title">{{ page.about_list.title_txt }}</h2>
                <p> {{ page.about_list.content_txt }} </p>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="icon"><i class="fa fa-wrench"></i></div>
                <h4 class="title"><a href="">{{ page.about_list.qual_list.firstTitle_txt }}</a></h4>
                <div class="description">
                    {{ page.about_list.qual_list.first_list | markdownify }}
                </div>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div class="icon"><i class="fa fa-graduation-cap"></i></div>
                <h4 class="title"><a href="">{{ page.about_list.qual_list.secondTitle_txt }}</a></h4>
                <div class="description">
                    {{ page.about_list.qual_list.second_list | markdownify }}
                </div>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div class="icon"><i class="fa fa-paint-brush"></i></div>
                <h4 class="title"><a href="">{{ page.about_list.qual_list.thirdTitle_txt }}</a></h4>
                <p class="description">{{ page.about_list.qual_list.third_txt }}</p>
            </div>

        </div>

        <div class="col-lg-6 background order-lg-2 order-1" data-aos="fade-left" data-aos-delay="100"></div>
    </div>

</div>