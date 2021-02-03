<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">
<head>
{% include site/head.html %}
</head>
<body>
{{ content }}
{% include site/footer.inc %}
</body>
</html>