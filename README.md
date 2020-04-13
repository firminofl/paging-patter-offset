# Função de tratamento de paginação

## Descrição
Projeto criado para validação da paginação que será inserida em uma query SQL como no exemplo.
O qual estamos simulando paginar no banco de dados, os usuários que pertencem a uma determinada cidade.

Exemplo: SELECT * FROM usuarios, cidades  
    WHERE usuarios_fk = usuarios_id 
    ORDER BY usuarios_id 
    DESC LIMIT 10 OFFSET ${pagination};

## Como usar?

```shell
npm i paging-pattern-offset
```

```js
const { formatPagination } = require("paging-pattern-offset")
```

- formatPagination(value): 
    Essa função ira retornar um valor inteiro para ser inserido em querys SQL que requisitem do OFFSET.
    - value: parâmetro esperado nos tipos de string ou number.

## Retorno obtido ao consultar API

```json
{
    "error": false,
    "value": 10,
    "valueType": "Number",
    "message": "Sucesso ao validar e transformar a paginação."
}
```

- error: boolean, informando se houve erro ao consultar API.
- value: number, valor da paginação tratado e que deverá ser utilizado na query SQL.
- valueType: typeof, informação do tipo do dado informado na chamada da do método formatPagination().
- message: string, messagem para informar um erro ou sucesso ao formatar a paginação.