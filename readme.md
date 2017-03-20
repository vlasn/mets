#### Metsahaldur

react-scss-webpack boilerplate.

1) Navigeeri varem loodud mets/www kausta
2) git clone https://SINUKASUTAJANIMI@github.com/vlasn/mets app
3) cd app && npm install
4) vaata et nginxi confis oleks / locationi all `sendfile: off;` - sa ei taha 5 tundi oma elust selle debugimisele raisata nagu Veljo tegi :)

Käsud:

`npm run dev` - käivitab webpack-dev-serveri ja hot-reloadingu - ei vaja virtualboxi käivitamist et ainult visuaali kallal tööd teha.

`npm run build` - development build - kompileerib ja bundleb kogu javascripti & cssi kahte faili, ligipääsetav VM-i kaudu.

`npm run prod` - production build - minify + uglify JS & CSS. vt. ka webpack.config.js-is olevaid minificationi käske.

