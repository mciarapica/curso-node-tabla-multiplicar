const colors = require('colors/safe');
const {imprimeTabla} = require('./multiplicar');
const argv = require('./config/yargs');

imprimeTabla(argv.b,argv.l,argv.h)
    .then((resultado) => console.log(colors.green(resultado)))
    .catch((err) => console.log(colors.bgRed(err)))    

    