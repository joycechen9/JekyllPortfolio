{% assign className = "app-time-conversion" %}
{% if include.className %}
    {% assign className = include.className %}
{% endif %}

{% if include.month == "short" %}
    {% assign format="%b %e, %Y" %}
    {% assign formatWithTime="%b %e, %Y %l:%M %p" %}
{% else %}
    {% assign format="%B %e, %Y" %}
    {% assign formatWithTime="%B %e, %Y %l:%M %p" %}
{% endif %}

{% assign formatOnlyTime="%l:%M %p" %}

{% if include.date %}
    {% if include.format %}
        <time class="{{ className }}" datetime="{{ include.date }}" data-year="numeric" {% if include.month == "short" %}data-month="short"{% else %}data-month="long"{% endif %} data-day="numeric">{{ include.date | date: include.format }} {% if include.displayTimezone %} (UTC){% endif %}</time>
    {% else %}
        {% if include.display == "withTime" %}
            <time class="{{ className }}" datetime="{{ include.date }}" data-year="numeric" {% if include.month == "short" %}data-month="short"{% else %}data-month="long"{% endif %} data-day="numeric" data-withtime="true" {% if include.displayTimezone %}data-displaytimezone="true"{% endif %} >{{ include.date | date: formatWithTime }} {% if include.displayTimezone %} (UTC){% endif %}</time>
        {% elsif include.display == "time" %}
            <time class="{{ className }}" datetime="{{ include.date }}" data-year="numeric" {% if include.month == "short" %}data-month="short"{% else %}data-month="long"{% endif %} data-day="numeric" data-onlytime="true" {% if include.displayTimezone %}data-displaytimezone="true"{% endif %} >{{ include.date | date: formatOnlyTime }} {% if include.displayTimezone %} (UTC){% endif %}</time>
        {% else %}
            <time class="{{ className }}" datetime="{{ include.date }}" data-year="numeric" {% if include.month == "short" %}data-month="short"{% else %}data-month="long"{% endif %} data-day="numeric" {% if include.displayTimezone %}data-displaytimezone="true"{% endif %} >{{ include.date | date: format }} {% if include.displayTimezone %} (UTC){% endif %}</time>
        {% endif %}
    {% endif %}
{% else %}
<!-- Invalid Data Provided for formatdate.inc -->
{% endif %}