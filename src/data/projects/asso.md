---
title: Paper Parser for Design Pattern Repository
cover: ./images/asso.png
github_link: https://github.com/EduRibeiro00/PatternParser-feup-asso
start_date: Mar 2021
end_date: Jun 2021
team_size: 5
techs: [Typescript, Node, PostgreSQL, MQTT, Docker]
project: true
project_page_order: 2
---
* Developed a microservice, part of a design pattern repository application, that parses and extracts all relevant information that can be found on research papers, such as the paper's title, authors, abstract, list of described patterns, and footer information.
* Allowed the support for different paper structures and types by implementing design patterns such as the Strategy and Builder patterns.
* Increased the reliability of the system and made it robust to crashes and failures by using a crash recovery database, that allows to ensure that if the parser starts processing a paper, it will eventually output its details.