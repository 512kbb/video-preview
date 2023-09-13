console.log("page loaded...");

const video = document.getElementById('video')

video.addEventListener('mouseover', (e) => {
  video.play()
})

video.addEventListener('mouseout', (e) => {
  video.pause()
})