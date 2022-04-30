const apiManager = new APIManager();

$('.buttons').on('click', "#btn1",function(){
    apiManager.getUserAndFriends();
    apiManager.getQuote();
    apiManager.getPokemon();
    apiManager.getAboutMe();

})

$('.buttons').on('click', "#btn2",function(){
   const render = new Renderer(apiManager.data);
   render.renderData();
})