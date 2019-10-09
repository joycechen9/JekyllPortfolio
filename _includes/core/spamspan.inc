{% if include.email.size > 0 %}
    {% assign emailSplit = include.email | split: "@" %}
    {% if emailSplit.size == 2 %}
        <span class="spamspan">
            <span class="u">{{ emailSplit[0] }}</span>
            <img alt="at" width="10" src="/assets/site/images/at.png">
            <span class="d">{{ emailSplit[1] }}</span>
        </span>
    {% endif %}
{% endif %}