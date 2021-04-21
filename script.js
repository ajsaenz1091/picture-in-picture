const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass to video element, then play
async function selectMediaStream(){
    try {
        // Set constant to hold media stream data, and await until user selects the stream
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Pass media stream into videoElement as its source Object
        videoElement.srcObject = mediaStream;
        // When stream has loaded its metadata, it calls a function that it is going to play that content
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(error){
        // catch error here
        console.log('woops, error here:', error)
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

selectMediaStream();

