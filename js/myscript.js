var movieData = JSON.parse(movieData);

// include json data in html incl. bootstrap
for (let i = 0; i < movieData.length; i++){
    $(".row").append(`
        <div class="col-lg-6 movieBox">
        
            <img src=${movieData[i].img} class="rounded"></img>

            <div class="font-weight-light">
                <div class="card-body">
                <h5 class="card-title">${movieData[i].name}</h5>
                <p class="card-text">${movieData[i].genre}, ${movieData[i].year}</p>
                <p class="card-text">${movieData[i].description}</p><br>
                <span >
                    <i class="fas fa-thumbs-up"id=${i} ></i>
                    <span >${movieData[i].likes}</span>              
                </span>
            </div>
        </div>   
    `);
};

// event listener for the like button + incrementing the number of likes
$(".fa-thumbs-up").on('click', function(){
    let index = $(this).attr("id");
    let newLikes = movieData[index].likes += 1;
    $(this).siblings().first().html(`${newLikes}`);
});