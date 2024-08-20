/*Nome do Banco de Dados*/
const database = 'BD3-POLLYANA-AULA';

/*Nome do Banco da Coleçãoo de Dados*/
const collection = 'LIVRARIA'

/* Criar ou Acessar o Banco de Dados */
use(database);

/* Insere um registro na coleção de dados*/
db[collection].insertOne(    {
    "codigo":"2",
      "titulo": "O Sol Desvelado",
      "autor": "Isaac Asimov",
      "descricao": "Um homem morto, um robô danificado e um crime sem solução. Convocado para uma reunião em Washington, Elijah Baley descobre que foi escalado para investigar um novo crime. Desta vez, porém, o policial deverá deixar a segurança da Terra e enfrentar sua fobia de espaços abertos.",
      "imagem":"/livros/sol_desvelado.jpg",
      "valor": 100,
      "categoria":"Ficção Científica",
      "teste":"teste 123"
  }
)