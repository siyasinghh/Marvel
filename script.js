let movies=[
    {
        name:"Deadpool & Wolverine",
        rating:7.9,
        poster:"https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg",
        description:"Deadpool's peaceful existence comes crashing down when the Time Variance Authority recruits him to help safeguard the multiverse. He soon unites with his would-be pal, Wolverine, to complete the mission and save his world from an existential threa"
    },
    {
        name:"Avengers: Infinity War",
        rating:8.4,
        poster:"https://cdn.marvel.com/content/1x/avengersinfinitywar_lob_crd_02_1.jpg",
        description:"As Thanos sets about his quest for finding the infinity stones and carrying out his twisted scheme, the Avengers join forces with their allies to stop him from causing chaos and destruction."
    },
    {
        name:"Avengers: Age of Ultron",
        rating:7.4,
        poster:"https://cdn.marvel.com/content/1x/avengersageofultron_lob_crd_03.jpg",
        description:"Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him."
    },
    {
        name:"Thor: Ragnarok",
        rating:7.9,
        poster:"https://cdn.marvel.com/content/1x/thorragnarok_lob_crd_03.jpg",
        description:"Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death."
    },
    {
        name:"Doctor Strange",
        rating:8,
        poster:"https://cdn.marvel.com/content/1x/doctorstrange_lob_crd_01_6.jpg",
        description:"In an accident, Stephen Strange, a famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage."
    },
    {
        name:"Spider-Man: Far From Home",
        rating:7.3,
        poster:"https://cdn.marvel.com/content/1x/spider-manfarfromhome_lob_crd_04_3.jpg",
        description:"Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins."
    },
    {
        name:"Black Panther",
        rating:7.3,
        poster:"https://cdn.marvel.com/content/1x/blackpanther_lob_crd_01_4.jpg",
        description:"After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation."
    },
    {
        name:"The Avengers",
        rating:8,
        poster:"https://cdn.marvel.com/content/1x/theavengers_lob_crd_03.jpg",
        description:"S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time."
    },
    {
        name:"Avengers: Endgame",
        rating:8.4,
        poster:"https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05_2.jpg",
        description:"After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."
    },
    {
        name:"Daredevil",
        rating:6,
        poster:"https://cdn.marvel.com/content/1x/daredevil_lob_crd_03.jpg",
        description:"Matt Murdoch, a blind lawyer, vows to fight crime in New York City and assumes a secret identity of Daredevil. However, his mission attracts the ire of Kingpin, who is determined to kill him"
    },
    {
        name:"Venom",
        rating:6.6,
        poster:"https://cdn.marvel.com/content/1x/venom_lob_crd_01.jpg",
        description:"While trying to take down Carlton, the CEO of Life Foundation, Eddie, a journalist, investigates experiments of human trials. Unwittingly, he gets merged with a symbiotic alien with lethal abilities"
    },
    {
        name:"Spider-Man: Homecoming",
        rating:7,
        poster:"https://cdn.marvel.com/content/1x/spider-manhomecoming_lob_crd_02.jpg",
        description:"Peter Parker tries to stop Adrian 'The Vulture' Toomes from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student"
    },
    {
        name:"Captain America: Civil War",
        rating:7.8,
        poster:"https://cdn.marvel.com/content/1x/captainamericacivilwar_lob_crd_01_9.jpg",
        description:"When the collective governments decide to ratify the Sokovia Accords, a legal document that regulates superhuman activity, it leads to a discordance between Captain America and Iron Man."
    },
    {
        name:"Black Widow",
        rating:6,
        poster:"https://cdn.marvel.com/content/1x/blackwidow_lob_crd_06.jpg",
        description:"Natasha Romanoff, a member of the Avengers and a former KGB spy, is forced to confront her dark past when a conspiracy involving her old handler arises."
    },
    {
        name:"Iron Man 3",
        rating:7.4,
        poster:"https://cdn.marvel.com/content/1x/ironman3_lob_crd_01_10.jpg",
        description:"Suffering from PTSD, Tony Stark encounters a formidable foe called the Mandarin. When he watches his world fall apart, he must rely on his own instincts as he embarks on a journey of retribution."
    },
    {
        name:"Guardians of the Galaxy",
        rating:8,
        poster:"https://cdn.marvel.com/content/1x/guardiansofthegalaxy_lob_crd_03.jpg",
        description:"A bunch of skilled criminals led by brash adventurer Peter Quill join hands to fight a villain named Ronan the Accuser who wants to control the universe with the help of a mystical orb."
    }
]

function searchmovie()
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
                        <p>${data[i].description}</p>

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
