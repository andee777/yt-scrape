const videoContainers = document.querySelectorAll('#content');

// Map over each container to extract the details
const videos = Array.from(videoContainers).map(container => {
  // Extract the video title and its link (using the anchor with id "video-title-link")
  const titleAnchor = container.querySelector('#video-title-link');
  const title = titleAnchor ? titleAnchor.textContent.trim() : "";
  const link = titleAnchor ? "https://www.youtube.com" + titleAnchor.getAttribute("href") : "";

  // Extract the thumbnail image URL from the <yt-image> element inside the <a id="thumbnail">
  const thumbnailImg = container.querySelector('a#thumbnail yt-image img');
  const thumbnail = thumbnailImg ? thumbnailImg.getAttribute("src") : "";

  // Extract the duration from the element holding the badge text (e.g., with class "badge-shape-wiz__text")
  const durationElem = container.querySelector('.badge-shape-wiz__text');
  const duration = durationElem ? durationElem.textContent.trim() : "";

  // Extract metadata such as views and published time from the inline metadata items
  const metadataItems = container.querySelectorAll('#metadata-line .inline-metadata-item');
  let views = "";
  let publishedTime = "";
  if (metadataItems.length >= 2) {
    views = metadataItems[0].textContent.trim();
    publishedTime = metadataItems[1].textContent.trim();
  }
  
  return {
    title,
    link,
    thumbnail,
    duration,
    views,
    publishedTime
  };
});

// Output the video details to the console
console.log(videos);
