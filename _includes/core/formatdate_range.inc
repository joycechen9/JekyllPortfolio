{% assign format="%b %e, %Y %l:%M %p" %}

{% assign startDateRaw = include.startDate %}
{% assign endDateRaw = include.endDate %}

{% assign startDate = startDateRaw | slice: 0, 10 %}
{% assign endDate = endDateRaw | slice: 0, 10 %}

{% if startDate == endDate %}
    {% assign isOneDay = true %}
{% endif %}

{% if include.startDate == include.endDate %}
    {% assign isSameDate = true %}
{% endif %}

{% if include.toTxt %}
    {% assign toTxt = include.toTxt %}
{% else %}
    {% assign toTxt = "to" %}
{% endif %}

{% assign displayTimezone = include.displayTimezone %}

<div
    class="app-time-conversion-range"
    style="display: inline"
    data-startdate="{{ include.startDate }}"
    data-enddate="{{ include.endDate }}"
    {% if include.display == "withTime" %}
        data-withtime="true"
    {% elsif include.display == "withTimeFull" %}
        data-withtime="true"
        data-withtimefull="true"
    {% elsif include.display == "time" %}
        data-onlytime="true"
    {% endif %}
    {% if displayTimezone %}data-displaytimezone="true"{% endif %}
    data-totxt="{{ include.toTxt }}"
    data-year="numeric"
    {% if include.month == "short" %}data-month="short"{% else %}data-month="long"{% endif %}
    data-day="numeric" 
>
    {% if include.display == "withTimeFull" %}
        {% if isSameDate == true %}
            {% include core/formatdate.inc date=endDateRaw className="time-range" display="withTime" displayTimezone=displayTimezone %}
        {% else %}
            {% include core/formatdate.inc date=startDateRaw className="time-range" display="withTime" displayTimezone=displayTimezone %} {{ toTxt | escape }} {% include core/formatdate.inc className="time-range" date=endDateRaw display="withTime" displayTimezone=displayTimezone %}
        {% endif %}
    {% else %}
        {% if isSameDate == true %}
            {% include core/formatdate.inc date=startDateRaw className="time-range" %}
        {% elsif isOneDay == true %}
            {% include core/formatdate.inc date=startDateRaw className="time-range" display="withTime" %}
            {{ toTxt | escape }}
            {% include core/formatdate.inc date=endDateRaw className="time-range" display="time" displayTimezone=displayTimezone %}
        {% else %}
            {% include core/formatdate.inc date=startDateRaw className="time-range" %} {{ toTxt | escape }} {% include core/formatdate.inc className="time-range" date=endDateRaw %}
        {% endif %}
    {% endif %}

</div>