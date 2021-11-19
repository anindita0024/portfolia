const container= document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName =container.querySelector(".song-details .name"),
musicArtist = container.querySelector(".song-details .artist"),
mainAudio = container.querySelector("#main-audio"),
playPauseBtn = container.querySelector(".play-pause"),
prevBtn = container.querySelector("#prev"),
nextBtn = container.querySelector("#next"),
progressArea = container.querySelector(".porogress-area"),
progressBar = container.querySelector(".progress-bar"),
musicList = container.querySelector(".music-list"),
showMoreBtn = container.querySelector("#more-music"),
hideMusicBtn = musicList.querySelector("#close");



let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);

window.addEventListener("load" , () =>{
    loadMusic(musicIndex);
    playingNow();
})



function loadMusic(indexNum){
    musicName.innerText = allMusic[indexNum - 1].name;
    musicArtist.innerText = allMusic[indexNum - 1].artist;
    musicImg.src = `image/${allMusic[indexNum-1].img}.jpg`;
    mainAudio.src = `song/${allMusic[indexNum -1].src}.mp3`;

}

function playMusic(){
    container.classList.add("paused");
    playPauseBtn.querySelector("i").innerText="pause";
    mainAudio.play()
}

function pauseMusic(){
    container.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText="play_arrow"
    mainAudio.pause();
}


function prevMusic(){
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex
    loadMusic(musicIndex);
    playMusic();
    playingNow();


}

function nextMusic(){
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex
    loadMusic(musicIndex);
    playMusic();
    playingNow();


}




playPauseBtn.addEventListener("click" , ()=>{
    const musicPlay =container.classList.contains("paused");
    musicPlay ? pauseMusic() : playMusic();
    playingNow();
})

nextBtn.addEventListener("click", ()=>{
    nextMusic();
  });

prevBtn.addEventListener("click", ()=>{
    prevMusic();
  });

mainAudio.addEventListener("timeupdate", (e) =>{

    const currentTime = e.target.currentTime;
    const duration = e. target.duration;
    let progressWidth = (currentTime / duration) *100;
    progressBar.style.width =   `${progressWidth}%`;


    let musicCurrentTime = container.querySelector(".current");
    musicDuration = container.querySelector(".duration");

    mainAudio.addEventListener("loadeddata" , ()=>{
        

        let audioDuration = mainAudio.duration;
        let totalMin = Math. floor(audioDuration / 60);
        let totalSec = Math. floor(audioDuration % 60);
        if (totalSec < 10){
            totalSec =`0${totalSec}`;
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`;

});
    
let currentMin = Math. floor(currentTime / 60);
        let currentSec = Math. floor(currentTime % 60);
        if (currentSec < 10){
            currentSec =`0${currentSec}`;
        }
        musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
    
})



 progressArea.addEventListener("click" , (e) =>{
     let progressWidthval = progressArea.clientWidth;
     let clickedOffSetX = e.offsetX;
     let songDuration = mainAudio.duration;

     mainAudio.currentTime = (clickedOffSetX / progressWidthval) * songDuration;
     playMusic();
 })  
 
const repeatBtn = container.querySelector("#repeat-plist");
repeatBtn.addEventListener("click" , () => {
    let getText = repeatBtn.innerText;


    switch(getText){
        case "repeat": 
           repeatBtn.innerText = "repeat_one";
           repeatBtn.setAttribute("title","song looped");  
           break;

         case "repeat_one" :
            repeatBtn.innerText = "shuffle"; 
            repeatBtn.setAttribute("title","playback shuffled "); 
            break;

         case "shuffle" : 
            repeatBtn.innerText = "repeat";
            repeatBtn.setAttribute("title","playlist looped "); 
 
            break;


    }
})

mainAudio.addEventListener("ended" , () =>{
    let getText = repeatBtn.innerText;

    switch(getText){
        case "repeat": 
           nextMusic();
           break;

         case "repeat_one" :
            mainAudio.currentTime = 0;
            loadMusic(musicIndex);
            playMusic();
            break;

         case "shuffle" : 
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1);

            do{
                randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            }while(musicIndex == randIndex);

            musicIndex = randIndex;
            loadMusic(musicIndex);
            playMusic();
            playingSong();

            break;
    }
})


showMoreBtn.addEventListener("click" , () =>{
    musicList.classList.toggle("show");
});

hideMusicBtn.addEventListener("click" , () =>{
    showMoreBtn.click();
});

const ulTag = container.querySelector("ul");

for (let i =0; i< allMusic.length; i++){

    let liTag = `<li li-index="${i + 1}">
                   <div class="row">
                     <span>${allMusic[i].name}</span>
                        <p>${allMusic[i].artist}</p>
                    </div>

                    <audio class ="${allMusic[i].src}"src="song/${allMusic[i].src}.mp3"></audio>

                    <span id="${allMusic[i].src}" class="audio-duration">3:40</span>

                </li>`;
    ulTag.insertAdjacentHTML("beforeend" , liTag); 
    
    let liAudioDuration = ulTag.querySelector(`#${allMusic[i].src}`);
    let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);

    liAudioTag.addEventListener("loadeddata", ()=>{
        let audioDuration = liAudioTag.duration;
        let totalMin = Math. floor(audioDuration / 60);
        let totalSec = Math. floor(audioDuration % 60);
        if (totalSec < 10){
            totalSec =`0${totalSec}`;
        }
        liAudioDuration.innerText = `${totalMin}:${totalSec}`;
        liAudioDuration.setAttribute("t-duration" , `${totalMin}:${totalSec}`);
    })
    
}

const allLiTags = ulTag.querySelectorAll("li");
function playingNow(){
    for (let j = 0; j<allMusic.length; j++){
        let audioTag = allLiTags[j].querySelector(".audio-duration")

        if(allLiTags[j].classList.contains("playing")){
            allLiTags[j].classList.remove("playing");
            let adDuration = audioTag.getAttribute("t-duration");
            audioTag.innerText = adDuration;
        }

        if(allLiTags[j].getAttribute("li-index") == musicIndex){
            allLiTags[j].classList.add("playing");
            audioTag.innerText = "playing";
        }
    
        allLiTags[j].setAttribute("onClick" , "clicked(this)");
    }
}

function clicked(element){
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex;
    loadMusic(musicIndex);
    playMusic();
    playingNow()
}