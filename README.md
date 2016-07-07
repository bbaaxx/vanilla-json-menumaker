# A JSON-driven (mostly) VanillaJs standalone Menu Maker

This is a quick and not-so-dirty component to render a  navigation menu
from a Json data source (currently it supports a JSON endpoint but it can
be easily extended as required).

## Installation
For now you will have to clone this repo until fancy npm install is supported.

    $ git clone https://github.com/bbaaxx/vanilla-json-menumaker.git

Then include menumaker-json.js or menumaker-json-min.js in your markup.

    <script src="vanilla-json-menumaker/dist/menumaker-json.js"></script>

That's it for the installation.

## Configuration
Now add a configuration element in your markup to configure the data endpoint,
the element should have an id of `menu-maker-config` and the endpoint parameter
is set using a `data-menu-config` attribute like so:

    <div id="menu-maker-config" data-menu-config="data/cmf-config.json"></div>

The value on `data-menu-config` is a URL, it can currently be any GET endpoint
that returns a json configuration with the structure described below.


### Menu definition
The data structure is static for now, but it should have a structure like the
one in the example below and in the `data` directory:

    {
        "menus": {
            "primaryNav": [{
                "id": "itemOne",
                "index": 1
            }, {
                "id": "itemTwo",
                "index": 2
            }],
            "subnavOne": [{
                "id": "otherItemOne",
                "index": 1,
                "customClass": "highlight-item"
            }, {
                "id": "otherItemTwo",
                "index": 2,
                "customTag": "button"
            }]
        },
        "menuItemDefinitions": {
            "itemOne": {
                "index": 1,
                "name": "Item One",
                "href": "/itemOne",
                "subNav": "subnavOne"
            },
            "itemTwo": {
                "index": 2,
                "name": "Item Two",
                "href": "/itemTwo",
                "subNav": "subnavTwo"
            },
            "otherItemOne": {
                "index": 1,
                "name": "Other Item One",
                "href": "#"
            },
            "otherItemTwo": {
                "index": 2,
                "name": "Other Item Two",
                "href": "#"
            }
        }
    }

Once you get that going, you will need to configure the elements where the
menus will be rendered using the following format:

    <ANY data-menu-list="keyFromMenusObject" class="menu-maker" />

This is a working example:

    <header>
      <nav>
        <ul id="primary-nav" data-menu-list="primaryNav" class="menu-maker"></ul>
      </nav>
      <nav>
        <ul id="sub-nav" data-menu-list="subNav" data-menu-dynamic="true" class="menu-maker"></ul>
      </nav>
    </header>

The items will be inserted in those `<ul>` elements, a default result will look
something like:

    ...
    <nav>
      <ul id="primary-nav" data-menu-list="primaryNav" class="menu-maker">
        <li><a href="/itemOne" class="menumaker-clickable">Item One</a><li>
        [...]
      </ul>
    </nav>
    ...

## Building
You need node version 4 or higher for some of the dependencies in the package.
It is currently being built on 6.2.2, I'm installing stuff with npm 3.10.2

### Dependencies
I think it should be good with just a default node install as npm now resolves
to local modules by default, so as long as you stick to npm scripts (see below)
you should be ok.
Anyways if you like to have more control you will want to have these on your
global:

    $ npm i -g typescript lite-server mocha browserify uglify-js

### Npm scripts

    `"scripts": {
      "test": "mocha -c js/**/*.spec.js",
      "dev": "tsc -p . && lite-server",
      "typescript": "tsc -p .",
      "build": "browserify --debug -e js/index.js -o dist/menumaker-json.js",
      "minify": "uglifyjs dist/menumaker-json.js -o dist/menumaker-json.min.js"
    }`

If you don't know what this is [read about it here.](https://docs.npmjs.com/misc/scripts)

## Collaborating
Please feel free to report issues and submit PR's I'll try to update about three times per month.

## 2DO
- Custom classes and custom tagnames overriden by data element.
- Integrated Flyouts
- Complex and custom location resolvers

## License
MIT
