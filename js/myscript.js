var movieData = JSON.parse(movieData);
//console.table(movieData);           // for testing
//console.log(movieData[1].name);     // for testing

// include json data in html incl. bootstrap
for (let i = 0; i < movieData.length; i++){
    console.log($(".row"))
    $(".row").append(`
        <div class="col col-md-6 movieBox">
            <img src=${movieData[i].img}></img>
            <ul>
                <li>${movieData[i].name}</li>
                <li>${movieData[i].year}</li>
                <li>${movieData[i].description}</li>
                <li>${movieData[i].likes}</li>
            </ul>
        </div>   
    `)
};