var chakram = require('chakram'), //Recupera uma instancia do chakram
expect = chakram.expect;

describe("Criacao de uma conta corrente", function(){ //Descreve o que sera feito dentro do bloco
	
	before("Cria a conta corrente antes dos testes", function(){
		conta = chakram.post('http://localhost:3000/criar-conta' //Informa a URL a ser requisitada
			,{ correntista: 'José Renan'} //Informa os parâmetros a serem passados
			,{ json: true } //Informa se o parâmetro é JSON
			,{ headers: { 'Content-Type': 'application/json' }});
	});
	    
	
	it("deve retornar 200", function(){
		return expect(conta).to.have.status(200); //Status HTTP esperado do response
	});
	
	it("deve retornar o header", function(){ //Conteudo esperado do header no response
		expect(conta).to.have.header("content-type", /json/); 
		return chakram.wait();
	});
	
	it("deve possuir correntista e saldo", function(){ //Informa o modelo de JSON esperado no response
		return expect(conta).to.have.schema({
		 "required": [
                "correntista", 
                "saldo"
               ]
		});
	});
	
	it("deve retornar o nome do correntista e o saldo", function(){ //Informa exatamente como deve ser o JSON esperado
		return expect(conta).to.have.json({
			correntista: "José Renan",
			saldo: 0
		});
	});
	
});
