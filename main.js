function check(){
    img=document.getElementById('capture_image');
    classifier.classify(img , gotResult)
}

function gotResult(error, results){
    if(error) {  
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("capture_image").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }