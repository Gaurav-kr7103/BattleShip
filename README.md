# webpack-template
a blueprint of the configuration of weback to minimize time to effectively jump in the code



Steps that are done->
Step1> in terminal `npm init -y` (it makes package.json file)

Step2> install bundlers `npm install --save-dev webpack webpack-cli`(it installs webpack package in node_modules)

Step3> make your direction and in that index.js

Step4> Create webpack.config.js file (basically instruction on how to bundle files VVIMP)

Step5> hit `npx webpack` to Bundle everything into 'dist' directory if it does not exist it will make new 

Note-> Webpack only knows to bundle javascript files
        Below is handling Html file
Step6> hit `npm i -D html-webpack-plugin` (download packages in node_modules) 
Note-> Html plugin will inject all your scripts into the HTML file

Step7> Create boiler plate inside src .. name it src (html plugin will auto connect the scripts to it.. no need to add script file to it)

step8> add plugin to the webpack.config.js

Step9> Similarly we will have to do for css since webpack is only .js file bundlers
        hit `npm install --save-dev style-loader css-loader`... we actually need 2 packages for css
    Note-> css loader takes .css files and convert it into js module (ex in js file we do-> `import "./syles.css";`)

Step10> adding this to webpack.config.js as in module
    Note-> plugins means extension of webpack and module means tranformation

Step11> create `styles.css` in src directory
    Remember to use `import` statement in js file to use the particular css file


Step12> adding images 3 different ways
    i> use `url` in css
    ii> add images in html for that->
        use `html loader package` module and config it in the webpack.config.js
                hit`npm i -D html-loader`
    iii> add images to js file.. for that->
        add rules to configuration.

        to use similary like css we import-> just do import

Step13> Created a asset folder inside the src directory where images will be 
       stored locally.


Note->since every time change something we need to hit `npx webpack`
to avoid this we add 1 more package which would 
do the work only by reloading 

Step14> install webpack dev server for auto (`npx webcheck`)
hit `npm install --save-dev webpack-dev-server`
(what it would it do is open the preview..whensover refreshed the changes will be reflected)

Step15> Scripts are added to package.json

Step16>making diving webpack.config.js into webpack.common.js, webpack.dev.js, webpack.prod.js
       and changing the package.json script also