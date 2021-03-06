# Workshop API
Exemplo de sistema de contas bancárias para testes no Workshop da QA no embedded.

### Instalação
```sh
$ git clone https://github.com/JoseRenan/workshop-api.git
$ cd workshop-api
$ npm install
$ npm start
```

### Execução testes frisby
```sh
$ npm test
```

### Endpoints
* [POST] /criar-conta
    * Cria uma conta para um determinado correntista e armazena no sistema. Retorna um objeto representando a conta do              correntista criado. Segue abaixo um exemplo de body da requisição e de retorno. OBS: Não são aceitas requisições com nomes de correntistas nulos ou já criados.
    
        Request:
        ```JSON
        {"correntista": "Nome do correntista"}
        ```
        Response:
        ```JSON
        {
            "correntista": "Nome do correntista",
            "saldo": 0.0
        }
        ```
* [POST] /saque
    * Saca um determinado valor da conta de um determinado correntista. Segue abaixo um exemplo de body da requisição e de retorno. OBS: Para realizar um saque, é necessário ter saldo
    suficiente (Veja o endpoint /deposito).
    
        Request:
        ```JSON
        
        {
            "correntista": "Nome do correntista",
            "valor": 10.0 //Exemplo de valor em double a ser sacado
        }
        
        ```
        
        Response:
        ```JSON
        {
            "correntista": "Nome do correntista",
            "saldo": 20.0 //Saldo atual após saque
        }
        ```
* [POST] /deposito
    * Deposita um determinado valor da conta de um determinado correntista. Segue abaixo um exemplo de body da requisição e de retorno.
        
        Request:
        ```JSON
        {
            "correntista": "Nome do correntista",
            "valor": 10.0 //Valor em double a ser sacado
        }
        ```
        
        Response:
        ```JSON
        {
            "correntista": "Nome do correntista",
            "saldo": 0.0 //Saldo atual após depósito
        }
        ```
* [GET] /conta?correntista=[Nome do correntista]
    * Retorna a conta de um determinado correntista. Segue um exemplo de retorno.
        
        Response:
        ```JSON
        {
            "correntista": "Nome do correntista",
            "saldo": 0.0 //Saldo atual após depósito
        }
        ```
        
* [GET] /contas
    * Retorna as contas de todos os correntistas cadastrados. Segue abaixo um exemplo de retorno.
        
        Response:
        ```JSON
        [{
            "correntista": "Nome do correntista",
            "saldo": 0.0 //Saldo atual após depósito
        },
        {
            "correntista": "Nome do correntista 2",
            "saldo": 0.0 //Saldo atual após depósito
        }]
        ```
