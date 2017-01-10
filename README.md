# Workshop API
Exemplo de sistema de contas bancárias para testes no Workshop da QA no embedded.

### Instalação
```sh
$ npm install
$ npm start
```
### Endpoints
* [POST] /criar-conta
    * Cria uma conta para um determinado correntista e armazena no sistema. Retorna um objeto representando a conta do              correntista criado. Segue abaixo um exemplo de body da requisição e de retorno.
    
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
    * Saca um determinado valor da conta de um determinado correntista. Segue abaixo um exemplo de body da requisição e de retorno.
    
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
