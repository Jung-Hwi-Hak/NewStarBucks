var mobEl = window.matchMedia("screen and (max-width:768px)");      

if (mobEl.matches) {
    console.log('mob');
} else { 
var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    function onYouTubeIframeAPIReady() {
        new YT.Player('player', {
            videoId: '778JWi1rWuY',
            playerVars: {
                autoplay: true,
                loop: true,
                mute: true,
                playlist: '778JWi1rWuY',
                controls: 0,
                origin: 'http://127.0.0.1:5500',
            },
        });
    }
}