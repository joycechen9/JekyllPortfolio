{% assign nav = site._modules | where: "slug","nav" | first %}

{% if page.layout == "home" %}
<nav id="nav-menu-container">
  <ul class="nav-menu"> 
    <li class="menu-active"><a href="index.html">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#call-to-action">Resume</a></li>
    <li class="menu-has-children"><a href="#portfolio">Portfolio</a>
      <ul>
        <li><a href="{{site.baseurl}}/art/">Art</a>
        </li>
        <li><a href="#p-stem">STEM</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a>
    </li>
    <img id="mobile-nav-img" src="assets/site/images/logo.png" alt="Joyce Chen">
  </ul>
</nav>

{% elsif page.layout == "stem" %}
<nav id="nav-menu-container">
        <ul class="nav-menu">
          <li class="menu-active"><a href="{{site.baseurl}}/#portfolio">PORTFOLIO</a></li>
          <li><a href="{{site.baseurl}}/#p-stem">BACK</a></li>
          </li>
          <img id="mobile-nav-img" src="{{site.baseurl}}/assets/img/logo.png" alt="Joyce Chen">
        </ul>
</nav>

{% elsif page.layout == "art" %}
<nav id="nav-menu-container">
        <ul class="nav-menu">
          <li class="menu-active"><a href="{{site.baseurl}}/art/">Back to the top!</a></li>
          <li><a href="{{site.baseurl}}/">Go Home</a></li>
          <img id="mobile-nav-img" src="{{site.baseurl}}/assets/img/logo.png" alt="Joyce Chen">
        </ul>
</nav>

{% endif %}