let player

function onYouTubeIframeAPIReady() {}

function createPlayer(ctrlq) {
    if(player) 
        player.destroy()

    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: ctrlq.dataset.video,
        playerVars: {
            autoplay: "0",
            loop: "1",
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange 
        } 
    })
} 

function togglePlayButton(play) {    
    const stopImg = currentAudio.firstElementChild.firstElementChild
    play ? stopImg.classList.add('none') : stopImg.classList.remove('none');
}

function toggleAudio() {
    if (player.getPlayerState() == 1 || player.getPlayerState() == 3 ) {
        player.pauseVideo()
        togglePlayButton(false)
    } else {
        player.playVideo()
        togglePlayButton(true)
    } 
} 

function onPlayerReady() {
    player.setPlaybackQuality("small")
    togglePlayButton(player.getPlayerState() !== 5)
    toggleAudio()
}

function onPlayerStateChange(event) {
    if (event.data === 0) 
        togglePlayButton(false) 
}