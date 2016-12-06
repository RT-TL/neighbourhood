# Udacity Neighbourhood Map Project

This project contains an interactive map and a list view. The project is built on JavaScript/HTML/CSS using Twitter Bootstrap, Knockout.js, lodash and axios. Dependencies are managed with Bower.

## Table of contents

* [Quick start](#quick-start)
* [Requirements](#requirements)
* [Project Structure](#project-structure)
* [License](#license)


## Quick start

Clone repository:
```
git clone https://github.com/Roomtailors/neighbourhood.git
```

To begin you need to install all required modules by running 'bower i# Udacity Neighbourhood Map Project

This project contains an interactive map and a list view. The project is built on JavaScript/HTML/CSS using Twitter Bootstrap, Knockout.js, lodash and axios. Dependencies are managed with Bower.

## Table of contents

* [Quick start](#quick-start)
* [Requirements](#requirements)
* [Project Structure](#project-structure)
* [License](#license)


## Quick start

Clone repository:
```
git clone https://github.com/Roomtailors/neighbourhood.git
```

Currently all dependencies are directly included in the repository (to be removed). So to run it just open the index.html

## Requirements

1. Clone git repository
2. If needed install bower with 'npm install -g bower'
3. Install dependencies by 'bower install'
4. Open 'index.html' from root directory

## Project Structure

/bower_components/
/css/
/fonts/
/js/models/
/js/view-model/
/js/views/
/js/data.js
/js/init-maps.js

Resources can be modified through there add/edit/delete actions. URLs are build either by directly adressing resourdces (/posts/add/ or /posts/<id>/edit) or via their parent resource, for example:

```
/posts/<id#1>/like/<id#2>/delete    = removes a like with <id#2> from post with <id#1>
/posts/add                          = creates a new resource (add) in posts
/posts/<id>/edit                    = edits the resource post with <id>
```

To get the edit form, call the endpoint with GET method. To change it POST the data to the same endpoint.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for detailsnstall' from root directory.

## Requirements

1. Clone git repository
2. If needed install bower with 'npm install -g bower'
3. Install dependencies 'o'

## Project Structure

The blog is organized in a rest-like manner. Available endpoints are:

/posts/
/likes/
/comments/
/signup
/login
/logout

Resources can be modified through there add/edit/delete actions. URLs are build either by directly adressing resourdces (/posts/add/ or /posts/<id>/edit) or via their parent resource, for example:

```
/posts/<id#1>/like/<id#2>/delete    = removes a like with <id#2> from post with <id#1>
/posts/add                          = creates a new resource (add) in posts
/posts/<id>/edit                    = edits the resource post with <id>
```

To get the edit form, call the endpoint with GET method. To change it POST the data to the same endpoint.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details