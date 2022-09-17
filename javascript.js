const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9640d9c5bemsh199d04278b48580p14930ejsnb0f02e284fec',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
};
var json = [
    {
        "name" :"Al filo del mañana",
        "img" : "https://image.tmdb.org/t/p/w300/v1IH8IvY0vwl4CIndaEO0d2mhAv.jpg"
    },
    {
        "name" :"Dragon Ball Z: La batalla de los dioses",
        "img" : "https://image.tmdb.org/t/p/w300/9TLr2vG9QjLRU78sQy7V4RElwc7.jpg"
    },
    {
        "name" :"Noche en el museo",
        "img" : "https://image.tmdb.org/t/p/w300/5XG0xupSju8QS4KBnM8181Ebt0B.jpg"
    },
    {
        "name" :"Jauja",
        "img" : "https://image.tmdb.org/t/p/w300/oSVFID7TiytpSXIfXLB6oaeW1eP.jpg"
    },
    {
        "name" :"Ellos Volvieron",
        "img" : "https://image.tmdb.org/t/p/w300/btamUdOUjc7jVG5gF0DdJiNulPK.jpg"
    },
    {
        "name" :"The Equalizer (El protector)",
        "img" : "https://image.tmdb.org/t/p/w300/6Hqn3WfEEdgQ5LW81XQiQUioD3q.jpg"
    },
    {
        "name" :"Ouija",
        "img" : "https://image.tmdb.org/t/p/w300/xUYXsFvP8VlbnijTkw7pl4tDxZP.jpg"
    },
    {
        "name" :"Obediencia Perfecta",
        "img" : "https://image.tmdb.org/t/p/w300/4KusYk0O2ixUQJr6BGyLla72KnP.jpg"
    },
    {
        "name" :"In Time",
        "img" : "https://image.tmdb.org/t/p/w300/2cX5gY6FFsJW6ZXi6PLB3zm0vHr.jpg"
    },
    {
        "name" :"Lucy",
        "img" : "https://image.tmdb.org/t/p/w300/zlrr7oO8sUSzDgVehP92zjlNQ58.jpg"
    },
]

    
//PHOTO response.data.opening[0].posterImage.url
//NAME response.data.opening[0].name
  function GetData() {
  // await fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1', options)
    // .then(response => response.json())
    //.then(function (response) {
         let x = (Math.round(Math.random() * 10));
         if(x==10)
         x-=1;
         console.log(x);
    // Delay();
         document.getElementById("centerpage").innerHTML =
         `
         <div class="card movie_card">
        <img src="${json[x].img}"
        class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${json[x].name}</h5>
        <center>
        <button type="button" class="btn btn-warning" id="btn1" onclick =GetData() >Click to Change Movie</button>
        </center>
        </div>
        </div>
        `;

        //})
        //.catch(err => console.error(err));
}
function Delay()
{

    setTimeout(function() {
      document.getElementById("centerpage").innerHTML = `    <div class="loader">
      <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
   </svg>`;
    }, 1000);
}
