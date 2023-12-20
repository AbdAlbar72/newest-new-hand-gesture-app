Webcam.set({
    width: 640,
    height: 480,
    image_format: 'jpeg',
    jpeg_quality: 90
});

Webcam.attach('#webcam-container');

function captureImage() {
    Webcam.snap(function(data_uri) {
        document.getElementById('capturedImageContainer').innerHTML = '<img src="'+data_uri+'"/>';
    });
}
function identifyImage() {
    document.getElementById('gestureName').innerText = 'Hand Gesture: Thumbs Up'; 
    document.getElementById('gestureIcon').src = '&#128077';

    document.getElementById('gestureName').innerText = 'Hand Gesture: Peace'; 
    document.getElementById('gestureIcon').src = '&#9996';

    document.getElementById('gestureName').innerText = 'Hand Gesture: Perfect'; 
    document.getElementById('gestureIcon').src = '&#128076';
}


Webcam.attach('#webcam-container');

function captureImage() {
    Webcam.snap(function(data_uri) {
        document.getElementById('capturedImageContainer').innerHTML = '<img src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

const modelURL = 'Paste your model link here/model.json';

const handGestureModel = ml5.imageClassifier(modelURL, modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}


function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

document.getElementById('gestureIcon').img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5ZYWFfHBm644gpOMQb8C8Qj0cvDjTRSAsij1CPGytw&s';
document.getElementById('gestureIcon').img = 'https://www.crocs.com.my/media/catalog/product/cache/3f354f4955006fba9bb013076742094d/1/0/10007207-1_hzdqpg6amftogpgf.jpg';
document.getElementById('gestureIcon').img = 'stock-vector-ok-hand-emoji-icon-illustration-sign-human-gesture-vector-symbol-emoticon-design-vector-clip-art-2043716456.jpg (1500×1600)';

function gotResult(error, results)
{
    if (error) {
    console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_emoji_name").innerHTML = results[0].label;
      document.getElementById("result_emoji_name2").innerHTML = results[1].label;
      prediction_1 = results[0].label;
      prediction_2 = results[1].label;
      speak();
      if(results[0].label == "Thumbs Up")
      {
        document.getElementById("update_emoji").innerHTML = "&#128077"
      }
      if(results[0].label == "Peace")
      {
        document.getElementById("update_emoji").innerHTML = "&#9996"
      }
      if(results[0].label == "Perfect")
      {
        document.getElementById("update_emoji").innerHTML = "&#128076"
      }
    }
}