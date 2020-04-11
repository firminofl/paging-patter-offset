# Função de tratamento de paginação

Como usar?

```shell
npm i paging-pattern-offset
```

```js
const { formatPagination } = require("paging-pattern-offset")
```

- formatPagination(value): 
    Essa função ira retornar um valor inteiro para ser inserido em querys SQL que requisitem do OFFSET.
    - value: parâmetro esperado nos tipos de string ou number.