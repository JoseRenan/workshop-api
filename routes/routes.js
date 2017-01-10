var appRouter = function(app) {

	var contas = [];

	app.post("/criar-conta", function(req, res) {
		
		if(!req.body.correntista) {
			res.status(422)
        	return res.send({"status": "error", "message": "Nome do correntista é necessário"});
    	}

    	var conta = procura_conta(req.body.correntista)

    	if (conta){
    		res.status(409)
        	return res.send({"status": "error", "message": "Correntista já cadastrado"});
    	}
    	
    	req.body["saldo"] = 0.0;
    	contas.push(req.body);
    	return res.send(req.body);

	});

	app.post("/saque", function(req, res) {
		
		if(!req.body.correntista) {
			res.status(422)
        	return res.send({"status": "error", "message": "Nome do correntista é necessário"});
    	} else if(!req.body.valor) {
			res.status(422)
        	return res.send({"status": "error", "message": "Valor a ser depositado é necessário"});
    	}

    	var conta = procura_conta(req.body.correntista)

    	if (!conta){
    		res.status(412)
        	return res.send({"status": "error", "message": "Correntista ainda não cadastrado"});
    	} else if (conta.saldo < req.body.valor) {
    		res.status(412)
        	return res.send({"status": "error", "message": "Conta deve possuir saldo suficiente para realizar o saque"});
    	}
    	
    	conta.saldo -= req.body.valor;
    	return res.send(conta);

	});

	app.post("/deposito", function(req, res) {
		
		if(!req.body.correntista) {
			res.status(422)
        	return res.send({"status": "error", "message": "Nome do correntista é necessário"});
    	} else if(!req.body.valor) {
			res.status(422)
        	return res.send({"status": "error", "message": "Valor a ser depositado é necessário"});
    	}

    	var conta = procura_conta(req.body.correntista)

    	if (!conta){
    		res.status(412)
        	return res.send({"status": "error", "message": "Correntista ainda não cadastrado"});
    	}
    	
    	conta.saldo += req.body.valor;
    	return res.send(conta);
    	
	});

	app.get("/conta", function(req, res) {
    	res.send(procura_conta(req.query.correntista));
	});

	app.get("/contas", function(req, res) {
    	res.send(contas);
	});

	function procura_conta (correntista) {
		for (conta of contas) {
			if (conta.correntista === correntista)
				return conta;
		};
		return undefined;
	}
}
 
module.exports = appRouter;