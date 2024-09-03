/*Nome do Banco de Dados*/
const database = 'BD3-POLLYANA-AULA';

/*Nome do Banco da Coleçãoo de Dados*/
const collection = 'LIVRARIA'

/* Criar ou Acessar o Banco de Dados */
use(database);

/*Altera os dados de um documento da collection*/
db[collection].updateMany(
    {autor:'J.R.R Tolkien'},
    { $set:{autor:'Jonh Ronald Reuel Tolkien'}}
)
