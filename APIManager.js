
class APIManager {
    constructor() {
        this.data = {}
    }

    getUserAndFriends(){
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=7',
            success: (response) => {
                const users = response.results.map((u) => {
                    return {
                        firstName: u.name.first,
                        lastName: u.name.last,
                        picture: u.picture.medium,
                        city: u.location.city,
                        state: u.location.state
                    }
                }) 
                this.data.mainUser = users[0]
                this.data.friends = users.splice(1,6)
            },
            error: function (xhr, text, error) {
                console.log(error)
            }
        })
    }

    getQuote(){
        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest',
            success: (response) => {
                this.data.quote = response.quote
            },
            error: function (xhr, text, error) {
                console.log(error)
            }
        })
    }

    getRandomId = function () {
        return Math.floor(Math.random() * 80);
    };

    getPokemon(){
        const id = this.getRandomId()
        $.ajax({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/type/10',
            success: (response) => {
                this.data.pokemonName = response.pokemon[id].pokemon.name;
                const pokemonUrl = response.pokemon[id].pokemon.url

                $.ajax({
                    method: "GET",
                    url: pokemonUrl,
                    success: (response) => {
                        this.data.pokemonUrl = response.sprites.front_default
                    },
                    error: function (xhr, text, error) {
                        console.log(error)
                    }
                })
            },
            error: function (xhr, text, error) {
                console.log(error)
            }
        })
    }
    getAboutMe(){
        $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?type=meat-and-filler',
            success: (response) => {
                this.data.aboutMe = response[Math.floor(Math.random() * 5)]
            },
            error: function (xhr, text, error) {
                console.log(error)
            }
        })
    }

}
// const ap = new APIManager()
// ap.getAboutMe()