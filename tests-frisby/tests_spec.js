var frisby = require('frisby');

frisby.create('Criação de nova conta corrente') //Cria uma requisição para teste com uma breve descrição
	.post('http://localhost:3000/criar-conta' //Informa o endpoint a ser requisitado
	    ,{ correntista: 'José Renan'} //Informa os parâmetros a serem passados
	    ,{ json: true } //Informa se o parâmetro é JSON
	    ,{ headers: { 'Content-Type': 'application/json' }}) //Informa os headers da requisição
	.expectStatus(200) //Status HTTP esperado do response
	.expectHeaderContains('content-type', 'application/json') //Conteúdo esperado do header do response
	.expectJSONTypes({ //Informa o modelo de JSON esperado no response
		correntista: String,
		saldo: Number
	})
	.expectJSON({ //Informa exatamente como deve ser o JSON esperado
		correntista: "José Renan",
		saldo: 0
	})
	.afterJSON(criacao_conta_exixtente) //Determina uma função a ser executada após o teste
	.toss() //Executa a requisição

function criacao_conta_exixtente () {
	frisby.create('Criação de conta corrente já existente') //Cria uma requisição para teste com uma breve descrição
		.post('http://localhost:3000/criar-conta' //Informa o endpoint a ser requisitado
		    ,{ correntista: 'José Renan'} //Informa os parâmetros a serem passados
		    ,{ json: true } //Informa se o parâmetro é JSON
		    ,{ headers: { 'Content-Type': 'application/json' }}) //Informa os headers da requisição
		.expectStatus(409) //Status HTTP esperado do response
		.expectHeaderContains('content-type', 'application/json') //Conteúdo esperado do header do response
		.expectJSONTypes({
			status: String,
			message: String
		})
		.expectJSON({
			status: "error",
			message: "Correntista já cadastrado"
		}).toss() //Executa a requisição
}