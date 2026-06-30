window.addEventListener(
    "load",
    ()=>{
        document.body.style.opacity="1";
    }
);

const exploreBtn =
document.getElementById("exploreBtn");

const projects =
document.getElementById("projects");

if(exploreBtn && projects){

    exploreBtn.addEventListener(
    "click",
    (e)=>{

        e.preventDefault();

        projects.scrollIntoView({

            behavior:"smooth",
            block:"start"

        });

    });

}

const glow = document.querySelector(".cursor-glow");
const cursor = document.querySelector(".matrix-cursor");
if(window.innerWidth > 900){

    document.addEventListener("mousemove",(e)=>{

        if(glow){
            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";
        }

        if(cursor){
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        }

    });

}

document.addEventListener("mousemove", (e) => {

    if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    }

    if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
}
});

document
.querySelectorAll("a, button")
.forEach(el=>{

    document.addEventListener("mouseover",(e)=>{

    if(
        e.target.closest("a") ||
        e.target.closest("button")
    ){

        cursor.classList.add("hidden");

    }

});

document.addEventListener("mouseout",(e)=>{

    if(
        e.target.closest("a") ||
        e.target.closest("button")
    ){

        cursor.classList.remove("hidden");

    }

});
});

const musicToggle =
document.getElementById("musicToggle");

const musicPlayer =
document.getElementById("musicPlayer");

if(musicToggle && musicPlayer){

    musicToggle.addEventListener("click", () => {

        musicPlayer.classList.toggle("hidden");

        if(musicPlayer.classList.contains("hidden")){

            musicToggle.innerHTML = "🎧";

        }
        else{

            musicToggle.innerHTML = "✕";

        }

    });

}

const songs = [
    "assets/precipice of defeat.mp3",
    "assets/la distancia para un duelo.mp3",
    "assets/clavar la espada.mp3",
    "assets/treachery.mp3",
    "assets/precipice of defeat orchestra.mp3",
    "assets/wandenriech.mp3",
    "assets/scar.mp3"
];

let shuffledSongs = [];
let currentIndex = 0;

const audio =
document.getElementById("audio");

const muteBtn =
document.getElementById("muteBtn");

const nextBtn =
document.getElementById("nextBtn");

function shufflePlaylist(){

    const lastSong =
    shuffledSongs.length
    ? shuffledSongs[
        shuffledSongs.length - 1
      ]
    : null;

    do{

        shuffledSongs = [...songs];

        for(
            let i = shuffledSongs.length - 1;
            i > 0;
            i--
        ){

            const j =
            Math.floor(
                Math.random() * (i + 1)
            );

            [
                shuffledSongs[i],
                shuffledSongs[j]
            ] =
            [
                shuffledSongs[j],
                shuffledSongs[i]
            ];

        }

    }while(
        songs.length > 1 &&
        shuffledSongs[0] === lastSong
    );

    currentIndex = 0;

}

if(audio){

    shufflePlaylist();

    currentIndex =
        Math.floor(
        Math.random() * shuffledSongs.length
        );

    audio.src =
    shuffledSongs[currentIndex];

    console.log(
    "Startup:",
    shuffledSongs[currentIndex]
    );

    audio.volume = 0.2;

    audio.loop = false;

    let musicStarted = false;

    document.addEventListener(
        "click",
        ()=>{

            if(!musicStarted){

                audio.play();

                musicStarted = true;

            }

        },
        { once:true }
    );

    function nextSong(){

        currentIndex++;

        if(
            currentIndex >=
            shuffledSongs.length
        ){

            shufflePlaylist();

        }

        audio.src =
        shuffledSongs[currentIndex];

        audio.play();

        console.log(
            "Playing:",
            shuffledSongs[currentIndex]
        );

    }

    nextBtn?.addEventListener(
        "click",
        nextSong
    );

    muteBtn?.addEventListener(
        "click",
        ()=>{

            audio.muted = !audio.muted;

            muteBtn.innerHTML =
            audio.muted
            ? "🔇"
            : "🔊";

        }
    );

    audio.addEventListener(
        "ended",
        nextSong
    );

}

const overlay =
document.getElementById(
"downloadOverlay"
);

document
.querySelectorAll(".download-btn")
.forEach(btn=>{

btn.addEventListener(
"click",
(e)=>{

if(btn.getAttribute("href") === "#"){
e.preventDefault();
overlay.classList.add(
"show"
);
}

});

});

overlay?.addEventListener(
"click",
()=>{

overlay.classList.remove(
"show"
);

});
