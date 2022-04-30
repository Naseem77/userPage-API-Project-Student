
class Renderer {
    constructor(data){
        this.data = data
    }
    renderData = function(){
        const myData = this.data
        $(".user-container").empty();
        const mainSource = $('#userName-template').html();
        const userTemplate = Handlebars.compile(mainSource)
        let mainSourceNewHTML = userTemplate(myData);
        $('.user-container').append(mainSourceNewHTML);

        $(".friends-container").empty();
        const friendsSource = $('#friends-template').html();
        const userFriendsTemplate = Handlebars.compile(friendsSource)
        let friendsSourceNewHTML = userFriendsTemplate(myData);
        $('.friends-container').append(friendsSourceNewHTML);

        $(".quote-container").empty();
        const quoteSource = $('#quote-template').html();
        const quoteTemplate = Handlebars.compile(quoteSource)
        let quoteSourceNewHTML = quoteTemplate(myData);
        $('.quote-container').append(quoteSourceNewHTML);

        $(".pokemon-container").empty();
        const pokemonNameSource = $('#pokemonName-template').html();
        const pokemonNameTemplate = Handlebars.compile(pokemonNameSource)
        let pokemonNameSourceNewHTML = pokemonNameTemplate(myData);
        $('.pokemon-container').append(pokemonNameSourceNewHTML);


        const pokemonImgSource = $('#pokemonImg-template').html();
        const pokemonImgTemplate = Handlebars.compile(pokemonImgSource)
        let pokemonImgSourceNewHTML = pokemonImgTemplate(myData);
        $('.pokemon-container').append(pokemonImgSourceNewHTML);

        $(".meat-container").empty();
        const meatSource = $('#meat-template').html();
        const meatTemplate = Handlebars.compile(meatSource)
        let meatSourceNewHTML = meatTemplate(myData);
        $('.meat-container').append(meatSourceNewHTML);

    }
}