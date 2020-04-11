/**
 * 
 * Desenvolvido por: Filipe Firmino Lemos
 * Github: firminofl
 * LinkedIn: https://www.linkedin.com/in/filipefirmino/
 * Data: 11/04/2020
 * 
 * Descrição: projeto criado para validação da paginação que será inserida em uma query SQL como no exemplo.
 * O qual estamos simulando paginar no banco de dados, os usuários que pertencem a uma determinada cidade.
 * 
 * Exemplo: SELECT * FROM usuarios, cidades  
    WHERE usuarios_fk = usuarios_id 
    ORDER BY usuarios_id 
    DESC LIMIT 10 OFFSET ${pagination};
 */

// Realizar o calculo da paginação
const calculatePagination = value => value * 10 - 10

// Validar se o numero informado é maior que zero
const validateSignal = value => value <= 0 ? 0 : value

// Validar se o tamanho da string formatada é igual a zero
const validateLength = value => value.length == 0 ? true : false

function formatPagination(value) {
    const originalValue = value
    const valueType = typeof value

    switch (valueType) {
        case "string":
            // Retirar letras caso tenha vindo na chamada do método
            value = String(value)
                .replace(/\D/g, "")

            //Validar se ao retirar letras, não ficou vazio
            if (validateLength(value))
                return {
                    error: true,
                    value: originalValue,
                    valueType,
                    message: `Número informado contém letras na sentença, verifique-o.`
                }

            // Validar se o número é maior que zero
            value = validateSignal(value)

            // Calcular a paginação
            value = calculatePagination(value)

            return {
                error: false,
                value: value,
                valueType,
                message: `Sucesso ao validar e transformar a paginação.`
            }

        case "number":
            // Validar se o número é maior que zero
            value = validateSignal(value)

            // Calcular a paginação
            value = calculatePagination(value)

            return {
                error: false,
                value,
                valueType,
                message: `Sucesso ao validar e transformar a paginação.`
            }

        case "object":
            return {
                error: true,
                value: originalValue,
                valueType,
                message: `Informe um número para validação e conversão da paginação.`
            }

        case "undefined":
            return {
                error: true,
                value: originalValue,
                valueType,
                message: `Não foi informado um parâmetro na chamada do método, verifique.`
            }

        case "boolean":
            return {
                error: true,
                value: originalValue,
                valueType,
                message: `Foi informado um tipo booleano na paginação, por favor verifique e tente novamente.`
            }

        case "function":
            return {
                error: true,
                value: originalValue,
                valueType,
                message: `Foi informado uma função na paginação, por favor verifique e tente novamente.`
            }
    }
}

module.exports = {
    formatPagination
}