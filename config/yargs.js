const argv = require('yargs')
.option('b',{
    alias:'base',
    default: 1,
    type: 'number',
    describe: 'Es la base de la tabla de multiplicar'
})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Indica si se imprime la tabla de multiplicar en pantalla'
})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Indica hasta que número se va a multplicar la base'
}

)
.check((argv,options) => {
    if (isNaN(argv.b)) {
        throw 'La parámetro b o base debe ser un número';
    }
    if (isNaN(argv.h)) {
        throw 'El parámetro h o hasta debe ser un número';
    }
    return true
} )
.argv;

module.exports = argv;