
async function imprimeTabla (base = 1, listar = false, hasta = 10) {
    console.clear();
    try {
        const fs = require('fs');
        let salida = '';
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`
        }

        if (listar) {
            const colors = require('colors/safe');
            console.log(colors.red.bold(`Tabla del ${base}`));
            console.log(colors.brightBlue(salida));
        }

        const nombreArchivo = `./salida/tabla del ${base}.txt`;
        fs.writeFileSync(nombreArchivo,salida);
        return `El archivo ${nombreArchivo} se creó correctamente`;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    imprimeTabla: imprimeTabla
}

