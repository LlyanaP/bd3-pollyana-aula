/*Nome do Banco de Dados*/
const database = 'BD3-POLLYANA-AULA';

/*Nome do Banco da Coleçãoo de Dados*/
const collection = 'LIVRARIA'

/* Criar ou Acessar o Banco de Dados */
use(database);

/*Seleciona um livro de uma categoria e um valor determinado*/
db[collection].find({
    $and:[
        {categoria:{$eq: 'Fantasia Heroica'}},
        {valor:{$lte:100}}
    ]
});