# Build a Front-End Website with Gulp

Used Gulp to concatenate and minify the JavaScript files, compile SCSS into CSS in a concatenated and minified file, generate JavaScript and CSS source maps, and compress any JPEG or PNG files. All output for the build process saved in a dist folder for distribution or deployment. Gulpfile built from scratch, all other project files provided.

## Gulp Commands Available

* gulp scripts: concatenates and minifies the JavaScript files and saves this to all.min.js files in a scripts folder inside of a dist folder.
* gulp styles: compiles SCSS into CSS in a concatenated and minified file called all.min.css in a styles folder inside of a dist folder.
* gulp images: compresses any JPEG or PNG files and saves them to a contect folder inside of a dist folder.
* gulp clean: wipes files and folders from the dist folder.
* gulp build: runs the clean task and then runs the scripts, styles, and images tasks.
* gulp: runs the build task and serves the project using a local web server to localhost:8080.
