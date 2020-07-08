<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">

<head>
    {% include site/head.inc %}
</head>

<body
    class="moderation-preview-outer page-default {% if page.layout %}page-{{ page.layout }}{% endif %} {% if page.category %} category-{{ page.category }}{% endif %}{% if page.classname %} post-{{ page.classname }}{% endif %} {{ page.title | downcase | replace:' ','-' | replace:',','' | strip_html }}">
    <div role="alert" class="moderation-preview-message container alert alert-warning"><span>This page is in <b>preview mode</b></span></div>
    {{ content }}
    {% include core/footer_scripts.inc %}
    {% include dist/footer_scripts.inc %}
    {% include site/footer_scripts.inc %}
</body>

</html>
