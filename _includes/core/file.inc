{% if include.file %}
    {% assign file = include.file %}
{% elsif include.filePath %}
    {% assign file = site._files | where: "path", include.filePath | first %}
{% else %}
    {% assign file = site._files | where: "slug", include.fileSlug | first %}
{% endif %}

{% if file.file.src.size > 0 %}
    <a class="file-link file-link-{{ file.file.id }} href="{{ file.file.src }}">{% if file.title.size > 0 %}{{ file.title }}{% elsif file.file.name.size > 0 %}{{ file.file.name }}{% else %}{{ file.file.src }}{% endif %}</a>
{% endif %}
