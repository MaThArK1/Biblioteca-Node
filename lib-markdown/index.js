//const chalk = require('chalk')
import chalk from "chalk";
import fs from "fs";

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Não foi possível encontrar o arquivo!'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminhoDoArquivo, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch((erro) => trataErro(erro)) ;
    
}

/* function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
} */

pegaArquivo('./arquivos/texto1.md');

//const chalk = require('chalk');
//const fs = require('fs');
//
////encadear métodos para colorir texto, cor de fundo e texto em negrito
//console.log(chalk.blue.bgWhite.bold('Alura'));
//
////receber múltiplos argumentos
//console.log(chalk.blue('curso', 'de', 'NodeJS'));
//
////métodos aninhados
//console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));
//
//// uso de template strings e placeholders
//console.log(`
//CPU: ${chalk.red('90%')}
//RAM: ${chalk.green('40%')}
//DISK: ${chalk.yellow('70%')}
//`);