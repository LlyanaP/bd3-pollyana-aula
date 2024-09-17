/*Nome do Banco de Dados*/
const database = 'BD3-POLLYANA-AULA';

/*Nome do Banco da Coleçãoo de Dados*/
const collection = 'LIVRARIA'

/* Criar ou Acessar o Banco de Dados */
use(database);

/*Fantasia heroica com um valor menor igual a 100 ou algo que se qualifique*/
db[collection].find({
    $or:[
        {categoria:{$eq: 'Fantasia Heroica'}},
        {valor:{$lte:100}}
    ]
});