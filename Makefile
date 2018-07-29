game: game.es6
	babel game.es6 > build.js && minify -o build.js build.js

dependencies:
	npm install -g babel-cli
	npm install -g minifier
