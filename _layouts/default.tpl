<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">

<head>
{% include site/head.inc %}
    {% if page.layout == "art" %}
            <link href="{{site.baseurl}}/assets/site/css/art.css" rel="stylesheet">
    {% endif %}
</head>

<body>
<header id="header" class="header-transparent">
    <div class="container">
    {% include site/header.inc %}
    {% include site/nav.inc %}
    </div>
</header>

{{ content }}
{% include site/footer.inc %}
{% include site/back-to-top.inc %}
</body>

</html>