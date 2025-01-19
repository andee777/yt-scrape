# yt-scrape

This guide explains how to extract video titles and links "manually" from a youtube page using JavaScript and run it directly in the browser console.

1. Navigate to the YouTube page

2. Scroll to bottom of page to load all videos

3. Open the Browser Console

4. Paste the JavaScript Code

   Copy the following JavaScript code and paste it into the console:
   ```javascript
   const videos = [...document.querySelectorAll('#contents a')]
       .map(a => ({
           title: (a.querySelector('yt-formatted-string#video-title')?.textContent || '').trim(),
           link: a.href
       }))
       .filter(video => video.title); // Only include objects where the title is not empty

   console.log(videos);

5. View the Output

    The extracted video titles and links will be displayed in the console as an array of objects.
