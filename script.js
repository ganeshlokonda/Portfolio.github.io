let movies = [

    {
        name:"Avengers Endgame",
        poster:"https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg",
        rating:8.7
    },
    {
        name:"Ala vaikunthapuramlo",
        poster:"https://www.25cineframes.com/images/gallery/2019/09/allu-arjun-ala-vaikunthapuramulo-movie-first-look-ultra-hd-posters/16-Allu%20Arjun%20Ala%20Vaikunthapuramulo%20Movie%20First%20Look%20ULTRA%20HD%20Posters%20WallPapers.jpg",
        rating:9.1
    },
    {
        name:"Juliye",
        poster:"http://1.bp.blogspot.com/-rmELZ2-rm5k/UXo4i0EcPuI/AAAAAAAAMEs/yRaw3juaOyc/s1600/allu+arjun++16.JPG",
        rating:9.2
    },
    {
        name:"Rangasthalam",
        poster:"http://datastore02.rediff.com/h1500-w1500/thumb/69586A645B6D2A2E3131/e8kk9w9sqy0sysrk.D.0.Rangasthalam-Telugu-Movie-Poster.jpg",
        rating:7.2
    },
    {
        name:"Srimanthudu",
        poster:"https://www.chitramala.in/wp-content/gallery/srimanthudu-movie-posters/Srimanthudu-Telugu-Movie-Latest-Poster.jpg",
        rating:6.5
    },
    {
        name:"The Avengers",
        poster:"https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg",
        rating:7.6
    },
    {
        name:"Jhon Wick",
        poster:"https://rukminim2.flixcart.com/image/850/1000/k0lbdzk0/poster/4/w/g/medium-john-wick-poster-for-room-office-13-inch-x-19-inch-rolled-original-imafkc6fd8mc6jga.jpeg?q=90",
        rating:7.9
    },
    {
        name:"Mirchi",
        poster:"https://2.bp.blogspot.com/-nbsdHxzKNpI/UIQD4rfh-zI/AAAAAAAAPTE/Z7qHCucPRtM/s1600/Mirchi%2BHD%2BWP%2B003.jpg",
        rating:8.4
    },
    {
        name:"Leo",
        poster:"https://m.media-amazon.com/images/I/71c2cxxNQIL._AC_UF894,1000_QL80_.jpg",
        rating:8.7
    }
    


];



function searchMovie()
{
    let movieName = document.getElementById('search').value;
    
    if(movieName!=="")
    {

        let result =movies.filter(function(movie)
                    {
                        return movie.name.toUpperCase().includes(movieName.toUpperCase())
                    })

        if(result.length==0)
        {
            
        }


       displayMovies(result);


    }
    else 
    {
        displayMovies(movies);
    }
    


}


function displayMovies(data)
{
    
    document.getElementById("movies").innerHTML="";

    let htmlString = ``;


    for(let i=0;i<data.length;i++)
    {


        htmlString=htmlString+`
            <div class="movie">
                <div class="overlay">

                    <div class="video">

                    </div>

                    <div class="details">

                        <h1>${data[i].name}</h1>
                        <h2>IMDB : ${data[i].rating}</h2>
                        <p>Rami Malek . Jhon Jacobs . Emma Stone</p>

                    </div>

                </div>
                <img class="poster" src="${data[i].poster}" alt="poster">
            </div>
        `
    }

    console.log(htmlString);

    document.getElementById("movies").innerHTML=htmlString;

}


displayMovies(movies);









// let movieDIV = document.createElement("div");
//     movieDIV.classList.add("movie");


//     let overlayDIV = document.createElement("div");  
//     overlayDIV.classList.add("overlay")

//     movieDIV.appendChild(overlayDIV);
    

//     console.log(movieDIV);










