---
# User Services
layout: default_system
date: 2017-03-06 10:00:00 -0500
author: OICR Genomics and Bioinformatics
permalink: /user/
isPublic_b: true
published: true
---

{% assign system = site._modules | where:"slug", "system" | first %}

<div id="app-user-services" data-system="{{ system.info_obj | jsonify | escape }}"></div>
