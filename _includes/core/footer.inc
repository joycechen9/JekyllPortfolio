{% assign footer = site._modules | where:"slug", "footer" | first %} {% assign
system = site._modules | where:"slug", "system" | first %}

<footer>
    <div class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="site-footer__container">
                        <a href="{{ footer.site-link_txt }}" class="site-link"
                            >{{ footer.site-address_txt }}</a
                        >
                        <ul class="site-menu__list">
                            {% for item in footer.site-menu_list %}
                            <li class="site-menu">
                                <a
                                    href="{{item.link_txt}}"
                                    class="site-top-menu"
                                    >{{item.item_txt}}</a
                                >
                                {% if item.sub_list.size > 0%}
                                <ul class="site-sub__list">
                                    {% for sub in item.sub_list %}
                                    <li class="site-sub">
                                        <a
                                            href="{{ sub.link_txt }}"
                                            class="site-sub-menu{% if sub.highlight_b == true %} highlight{% endif %}"
                                            >{{ sub.item_txt }}</a
                                        >
                                    </li>
                                    {% endfor %}
                                </ul>
                                {% endif %}
                            </li>
                            {% endfor %}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="oicr-footer">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="oicr-footer__container">
                        <div class="oicr-menu">
                            <div class="oicr-logo__container">
                                <a
                                    class="oicr-logo__link"
                                    href="{{ footer.logoLink_txt }}"
                                >
                                    <img
                                        class="oicr-logo"
                                        src="{{footer.general-oicr-img_txt}}"
                                        alt="{{ footer.imageAlt_txt }}"
                                    />
                                </a>
                            </div>
                            <div class="oicr-menu__list">
                                {% for item in footer.general-oicr_list %}
                                <div class="oicr-menu__item">
                                    <a
                                        href="{{item.link_txt}}"
                                        class="oicr-menu__link"
                                        >{{item.item_txt}}</a
                                    >
                                </div>
                                {% endfor %}
                            </div>
                        </div>
                        <div class="host-info">
                            {% for item in footer.final-link_list %}{{
                            item.content_txt}}
                            <a href="{{ item.link_txt }}">{{ item.item_txt }}</a
                            >{% endfor %}
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="oicr-footer__container">
                        <div class="oicr-host__container">
                            <p class="oicr-host">
                                {{ footer.oicrHostDesc_txt }}
                            </p>
                        </div>
                        {% if footer.ontarioFunding_txt.size > 0 %}
                        <div class="oicr-funder__container">
                            <img
                                class="ontario-logo oicr-funder__logo"
                                src="{{footer.ontarioLogo-img_txt}}"
                                alt="Government of Ontario"
                            />
                            <p class="oicr-funder__desc">
                                {{footer.ontarioFunding_txt}}
                            </p>
                        </div>
                        {% endif %}
                    </div>
                </div>
                <div
                    class="col-12"
                    id="app-siteinfo"
                    data-system="{{ system.info_obj | jsonify | escape }}"
                ></div>
            </div>
        </div>
    </div>
</footer>
