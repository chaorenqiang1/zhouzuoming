const audioElements = [
    document.getElementById('backgroundMusic1'),
    document.getElementById('backgroundMusic2'),
    document.getElementById('backgroundMusic3'),
    document.getElementById('backgroundMusic4'),
    document.getElementById('backgroundMusic5'),
    document.getElementById('backgroundMusic6')
];

const clickToPlay = document.getElementById('clickToPlay');

clickToPlay.addEventListener('click', () => {
    playNextAudio(0);
    clickToPlay.style.display = 'none';
});

function playNextAudio(index) {
    if (index >= audioElements.length) {
        return;
    }

    const currentAudio = audioElements[index];
    currentAudio.play().catch(error => {
        console.log('音频自动播放失败，用户可能未与页面交互');
        clickToPlay.style.display = 'block';
    });

    currentAudio.addEventListener('ended', () => {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        playNextAudio(index + 1);
    });
}