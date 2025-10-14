



// var saldo = 1000

// console.log(`seu saldo é de : ${saldo}`)

// function seque(valor) {
//     if (valor > saldo) {
//         console.log('o valor do saque é maior que o valor do saldo')
//     } else if (valor > 700){
//         console.log('o valor do saque é de 700 reias por dia')
//     } else {
//     saldo = saldo - valor

//     }

    
// }

// seque(701)

// console.log('seu saldo é de: '+ saldo)


// var personagens = ['Roque', 'Eliana', 'Santheygo', 'Maryana', 'igo', 'Marta', 'Carlito', 'Ilda']


// personagens.forEach(function(person) {
//     console.log(person)
// })

// for (var i in personagens){
//     console.log(personagens[i])
// }

// for (var i = 0; i < 10; i++ ){
//     console.log(i)
// }

var yoda = {
    nome: 'Mestre Yoda',
    idade:100,
    jedi:true,
    mostraIdade: function () {
        console.log(`a idade do ${this.nome} é de ${this.idade}`)
    }
}

console.log(yoda)
yoda.mostraIdade()