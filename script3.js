window.addEventListener('DOMContentLoaded', function() {
  var levels = [

    //#51
    { name: 'core bore glore', id: '92126842', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#52
    { name: 'fauxureta', id: '92003404', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#53
    { name: 'Sonic Wave Infinity', id: '97128437', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/Zv-vzQP4JRo', type: 'Challenge' },

    //#54
    { name: 'finley ohio trip', id: '92202872', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#55
    { name: 'microclick hell', id: '92127106', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#56
    { name: 'if i were a fish', id: '93197387', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#57
    { name: 'TheWholeWorldAndYou', id: '92081453', author: 'Shadowpan69420', verifier: 'Shadowpan69420', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#58
    { name: 'Greg', id: '95244928', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/TYGCov-nurY', type: 'Challenge' },

    //#59
    { name: '4  am chsallenge', id: '92668659', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#60
    { name: 'hi but not hi by krm', id: '93350188', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#61
    { name: '2  am chsallenge', id: '92491018', author: 'ache', verifier: 'ache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#62
    { name: 'dohiyo is dead', id: '92096970', author: 'Shadowpan69420 & xFinleyGD', verifier: 'Shadowpan69420', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#63
    { name: 'the first ever', id: '92002834', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#64
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#65
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#66
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#67
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#68
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#69
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#70
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#71
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#72
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#73
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#74
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#75
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#76
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#77
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#78
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#79
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#80
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#81
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#82
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#83
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#84
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#85
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#86
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#87
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#88
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#89
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#90
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#91
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#92
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#93
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#94
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#95
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#96
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#97
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#98
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#99
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    //#100
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' }
    
    //don't put a comma at the end of the last level..
  ];


  var extendedList = document.getElementById('extendedList');

  levels.forEach(function(level, index) {
    var listItem = document.createElement('div');
    listItem.classList.add('list-item');
    var listNumber = document.createElement('div');
    listNumber.classList.add('list-number');
    listNumber.textContent = '#' + (index + 51);
    var listThumbnail = document.createElement('div');
    listThumbnail.classList.add('list-thumbnail');
    listThumbnail.style.pointerEvents = 'none'; // Add this line
    var thumbnailLink = document.createElement('a');
    thumbnailLink.href = level.videoUrl;
    thumbnailLink.target = '_blank';
    var thumbnailImage = document.createElement('img');
    thumbnailImage.classList.add('list-image');
    thumbnailImage.alt = 'Level thumbnail';
    var videoId = extractVideoId(level.videoUrl);
    var thumbnailUrl = 'https://img.youtube.com/vi/' + videoId + '/mqdefault.jpg';
    thumbnailImage.src = thumbnailUrl;
    thumbnailLink.appendChild(thumbnailImage);
    listThumbnail.appendChild(thumbnailLink);
    var listInfo = document.createElement('div');
    listInfo.classList.add('list-info');
    var levelName = document.createElement('p');
    levelName.classList.add('level-name');
    levelName.textContent = level.name;
    listInfo.appendChild(levelName);
    listItem.appendChild(listNumber);
    listItem.appendChild(listThumbnail);
    listItem.appendChild(listInfo);
    extendedList.appendChild(listItem);

  
// Display the popup
listItem.addEventListener('click', function() {
  // Get the video ID from the video URL
  var videoId = extractVideoId(levels[index].videoUrl);

  // Create the iframe element for the embedded video
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/' + videoId;
  iframe.width = '560';
  iframe.height = '315';
  iframe.frameborder = '0';
  iframe.allowfullscreen = true;
  iframe.style.border = 'none';
  iframe.style.borderRadius = "10px";

  // Get the popup element
  var popup = document.getElementById('popup');

  // Clear the existing content of 'popup-video'
  var popupVideo = document.getElementById('popup-video');
  popupVideo.innerHTML = '';

  // Append the iframe to the popup video
  popupVideo.appendChild(iframe);

  // Populate the popup with the corresponding information
  document.getElementById('popup-name').textContent = levels[index].name;
  document.getElementById('popup-id').textContent = levels[index].id;
  document.getElementById('popup-author').textContent = levels[index].author;
  document.getElementById('popup-verifier').textContent = levels[index].verifier;

  // Display the popup
  popup.classList.add('visible');
});

// Close the popup when the close button is clicked
document.getElementById('popup-close').addEventListener('click', function() {
  var popup = document.getElementById('popup');
  popup.classList.remove('visible');

  // Get the iframe element
  var iframe = document.getElementById('popup-video').querySelector('iframe');

  // Pause the video and reset the source
  iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  iframe.src = '';
});

  function extractVideoId(url) {
    var match = url.match(/(?:[?&]v=|\/embed\/|\/\d\/|\/vi\/|youtu\.be\/|\/embed\/|\/\d\/|\/vi\/)([^#&?/]+)/i);
    if (match && match[1]) {
      return match[1];
    } else {
      return '';
    }
  }
})});
