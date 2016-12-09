# Udacity Neighbourhood Map Project

This project contains an interactive map and a list view. The project is built on JavaScript/HTML/CSS using Twitter Bootstrap, Knockout.js, and axios. Dependencies are managed with Bower.

## Table of contents

* [Quick start](#quick-start)
* [Requirements](#requirements)
* [Structure & Instructions](#Structure-&-Instructions)
* [License](#license)


## Quick start

Clone repository:
```
git clone https://github.com/Roomtailors/neighbourhood.git
bower install
python -m SimpleHTTPServer 8080
```

Open 0.0.0.0:8080 in your browser (or 127.0.0.1).

## Requirements

1. GIT: https://www.git-scm.com
2. Bower: https://www.bower.io
3. Python or any other local HTTP server

## Structure & Instructions

The project is organized in an MVVM architecture. Models are in js/models, view-models in /js/view-model and views in js/views.
The app is centered around /js/init-maps.js. Start from here.

Data is stored in JSON-Format in locations.json in project root. You can add/change/delete locations in this file. Notice that running the app directly through index.html is not possible because of the restrictions of the file:// protocol.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.