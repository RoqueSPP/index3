


const LIST = [
    {
        id: 1,
        nome: 'C3PO',
        avatar: './imagens/c3po.png'
    },
    {
        id: 2,
        nome: 'CHEWBACCA',
        avatar: './imagens/chewbacca.png'
    },
    {
        id: 3,
        nome: 'HANSOLO',
        avatar: './imagens/hansolo.png'
    },
    {
        id: 4,
        nome: 'Mestre Yoda',
        avatar: './imagens/c3po.png'
    },
    {
        id: 5,
        nome: 'Princesa LEIA',
        avatar: './imagens/leia.png'
    },
    {
        id: 6,
        nome: 'Luke Skywallker',
        avatar: './imagens/luke.png'
    },
    {
        id: 7,
        nome: 'R2D2',
        avatar: './imagens/r2d2.png'
    },
    {
        id: 8,
        nome: 'Vader',
        avatar: './imagens/vader.png'
    }
]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Personagens do filme Star Wors',
        userName: 'Olá Roque Chimull',
        characters: LIST,
        searchName: ''
    },
    methods: {
        Like(userN) {
            alert(`o Personagem preferido ${userN} ganhou um Gostei`)
        },
        remove(id) {
            const list = this.characters
            const result = list.filter((Item) => {
                return Item.id !== id
            })
            this.characters = result

        },
        search() {
            if (this.searchName === '') {
                return alert(' O campo busca é obrigatório')

            }
            const list = this.characters = LIST
            const result = list.filter((Item) => {
                return Item.nome === this.searchName
            })

            if (result.length <= 0) {
                alert('Nenhum Personagem foi encontrado')

            } else {
                this.characters = result

            }


        }


    }
})