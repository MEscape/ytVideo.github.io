let player

function onYouTubeIframeAPIReady() {
    const ctrlq = document.getElementById("youtube-audio");
    ctrlq.onclick = toggleAudio;
    
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

function toggleAudio() {
    if (player.getPlayerState() == 1 || player.getPlayerState() == 3 ) {
        player.pauseVideo()
    } else {
        player.playVideo()
    } 
} 

function onPlayerReady() {
    player.setPlaybackQuality("small")
    toggleAudio()
}
