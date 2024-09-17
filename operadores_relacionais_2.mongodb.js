/*Nome do Banco de Dados*/
const database = 'BD3-POLLYANA-AULA';

/*Nome do Banco da Coleçãoo de Dados*/
const collection = 'LIVRARIA'

/* Criar ou Acessar o Banco de Dados */
use(database);

/* Seleciona livros entre os valores 100 e 150*/ 
db[collection].find({
    valor:{$gte:100, $lte:150}
})