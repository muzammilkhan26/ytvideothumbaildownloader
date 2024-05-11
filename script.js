let thumbnailUrl = '';

function fetchThumbnail() {
    const videoUrl = document.getElementById('videoUrl').value;
    const videoId = extractVideoId(videoUrl);
    thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const thumbnailDiv = document.createElement('div');
    thumbnailDiv.classList.add('thumbnail');
    thumbnailDiv.innerHTML = `<img src="${thumbnailUrl}" alt="YouTube Thumbnail">`;

    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.innerHTML = '';
    thumbnailContainer.appendChild(thumbnailDiv);

    document.getElementById('downloadBtn').style.display = 'block'; // Show download button
}

function extractVideoId(url) {
    let videoId = '';
    if (url.includes('youtube.com')) {
        videoId = url.split('v=')[1];
        const ampersandPosition = videoId.indexOf('&');
        if (ampersandPosition !== -1) {
            videoId = videoId.substring(0, ampersandPosition);
        }
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1];
    }
    return videoId;
}

function downloadThumbnail() {
    window.open(thumbnailUrl, '_blank');
}
