<h1>Real Estate Agency SPA</h1>



<p>Author: <a href="https://www.linkedin.com/in/vasyl-melnychuk-231763132/" target="_blank">Vasyl Melnychuk</a></p>

The final project for front-end programming (javascript) training. The project is implemented as a one-page application using summy.js and hundlebars. All data in the project is generated from the json file. When you enter the correct username and password is redirected to the user page. On the services page, it is possible to display services from one category. Categories are loaded automatically from the json file and displayed in the drop-down list without duplication. On the feedback page, a search by name is implemented, when the user begins to enter a name, only those reviews that match the ones entered in the search field remain. In the header of the site there is a search that looks for matches on the page. On the catalog page implemented pagination pages. Each ad has a slider with pictures in which the pictures adapt to the size of the slider, and are well displayed on different screens. The application has a responsive design using media queries. Also implemented a mobile menu, which leaves the right side when you press a button. On the "Contacts" page there is a map implemented via google api.

The whole project is built using Gulp version 3.9.1. The following utilities are also used:
* "gulp-autoprefixer": "^6.0.0" - Autoprefixer
* "gulp-clean-css": "^4.0.0" - minify CSS
* "gulp-concat": "^2.6.1" - Concatenates files
* "gulp-notify": "^3.2.0" - Send messages to Notification Center
* "gulp-rename": "^1.4.0" - rename files
* "gulp-rsync": "0.0.8" - upload to server
* "gulp-sass": "^4.0.2" - Sass (scss) preprocessor
* "gulp-uglify": "^3.0.1" - Minify JavaScript with UglifyJS3
* "gulp-util": "^3.0.8" - Utility functions for gulp plugins

## Built With

* [jquery.js](https://jquery.com/) - Javascript library
* [Summy.js](http://sammyjs.org/) - Routing
* [Bootstrap 4](https://getbootstrap.com/) - css framework
* [slick](http://kenwheeler.github.io/slick/) - Jquery slider plugin
* [handlebars](https://handlebarsjs.com/) - Javascript library for repeat content with routing
* [select2](https://select2.org/) - Multiple select in input
* [jquery-ui](https://jqueryui.com/) - Using for autocomplite in input
* [highlight.js](https://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html) - text higlighting jQuery plugin
* [hilitor](https://www.the-art-of-web.com/javascript/search-highlight/) - Search Keyword Highlighting
* [twbsPagination](https://) - jQuery pagination plugin (bootstrap powered)
* [json-easy-filter](https://) - Javascript node module for programmatic filtering and validation of Json objects.


<h2>How to use Real Estate Agency </h2>

<ol>
	<li><a href="https://github.com/vasya-skery/RealEstateAgency/archive/master.zip">Download</a> <strong>Real Estate Agency SPA</strong> from GitHub;</li>
	<li>Install Node Modules: <strong>npm i</strong>;</li>
	<li>Run the template: <strong>gulp</strong>.</li>
</ol>

<h2>Gulp tasks:</h2>

<ul>
	<li><strong>gulp</strong>: run default gulp task (sass, js, watch, browserSync) for web development;</li>
	<li><strong>rsync</strong>: project deployment on the server from <strong>dist</strong> folder via <strong>RSYNC</strong>;</li>
</ul>

<h2>Rules for working with the Real Estate Agency SPA</h2>

<ol>
	<li>All HTML files should have similar initial content as in <strong>app/index.html</strong>;</li>
	<li><strong>Template Basic Images Start</strong> comment in app/index.html - all your custom template basic images (og:image for social networking, favicons for a variety of devices);</li>
	<li><strong>Custom Browsers Color Start</strong> comment in app/index.html: set the color of the browser head on a variety of devices;</li>
	<li><strong>Custom HTML</strong> comment in app/index.html - all your custom HTML;</li>
	<li>For installing new jQuery library, just run the command "<strong>bower i plugin-name</strong>" in the terminal. Libraries are automatically placed in the folder <strong>app/libs</strong>. Bower must be installed in the system (npm i -g bower). Then place all jQuery libraries paths in the <strong>'libs'</strong> task (gulpfile.js);</li>
	<li>All custom JS located in <strong>app/js/common.js</strong>;</li>
	<li>All Sass vars placed in <strong>app/sass/_vars.sass | app/scss/_vars.scss</strong>;</li>
	<li>All Bootstrap media queries placed in <strong>app/sass/_media.sass | app/scss/_media.scss</strong>;</li>
	<li>All libraries CSS styles placed in <strong>app/sass/_libs.sass | app/scss/_libs.scss</strong>;</li>
	<li>Rename <strong>ht.access</strong> to <strong>.htaccess</strong> before place it in your web server. This file contain rules for files caching on web server.</li>
</ol>
# RealEstateAgency
