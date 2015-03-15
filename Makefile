game: game.es6
	babel game.es6 > build.js && minify -o build.js build.js

dependencies:
	npm install -g babel
	npm install -g minifier
