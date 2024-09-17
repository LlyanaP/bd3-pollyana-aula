/*Nome do Banco de Dados*/
const database = 'BD3-POLLYANA-AULA';

/*Nome do Banco da Coleçãoo de Dados*/
const collection = 'LIVRARIA'

/* Criar ou Acessar o Banco de Dados */
use(database);

/*Lista todos os livros do Tolkien em ordem crescente de valor*/
db[collection].find({
    autor: 'J.R.R Tolkien'
}).sort({valor:1});

/* 1 = Crescente*/

/* -1 = Decrescente*/