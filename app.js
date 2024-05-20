
let searchQuery;

function searchVideos() {
  const apiKey = 'AIzaSyAMc0CRupQ7RUtrTUtdHRGDm4B2gXsyQrk';
  searchQuery = document.getElementById('search-input').value.trim();

  if (searchQuery === '') {
    alert('Please enter a search query.');
    return;
  }

  const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${searchQuery}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle the response data here
      displayVideos(data.items);
    })
    .catch(error => {
      // Handle errors here
      console.error('There was a problem with the fetch operation:', error);
    });
}

// Define the displayVideos function and other necessary functions here
function displayVideos(videos) {
    const container = document.getElementById('video-container');
  
    // Clear previous search results
    container.innerHTML = '';
  
    videos.forEach(video => {
      const videoTitle = video.snippet?.title;
      const videoId = video.id.videoId;
      const thumbnailUrl = video.snippet?.thumbnails?.default?.url;
  
      // Create elements to display video information
      const videoElement = document.createElement('div');
      videoElement.classList.add('video');
  
      const thumbnailElement = document.createElement('img');
      thumbnailElement.src = thumbnailUrl;
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = videoTitle;
  
      // Append elements to the container
      videoElement.appendChild(thumbnailElement);
      videoElement.appendChild(titleElement);
      container.appendChild(videoElement);
  
      // Add click event listener to open the video in a new tab when clicked
      videoElement.addEventListener('click', () => {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
      });
    });
  }