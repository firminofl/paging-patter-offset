# Função de tratamento de paginação

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
    "error,"
    "value,"
    "valueType,"
    "message"
}
```

- error: boolean, informando se houve erro ao consultar API.
- value: number, valor da paginação tratado e que deverá ser utilizado na query SQL.
- valueType: typeof, informação do tipo do dado informado na chamada da do método formatPagination().
- message: string, messagem para informar um erro ou sucesso ao formatar a paginação.