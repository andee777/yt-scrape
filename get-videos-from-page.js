const videos = [...document.querySelectorAll('#contents a')]
    .map(a => ({
        title: (a.querySelector('yt-formatted-string#video-title')?.textContent || '').trim(),
        link: a.href
    }))
    .filter(video => video.title); // Only include objects where the title is not empty

console.log(videos);
