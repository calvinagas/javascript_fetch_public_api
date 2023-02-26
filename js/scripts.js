document.body.onkeyup = function(e){ 
    if(e.keyCode == 32){ //spacebar to pause timer
        fireDogImage(); 
    }
};

const api_url = "https://dog.ceo/api/breeds/image/random";

async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();

    if (response) {
        change_img_id(data);
        // console.log(data['message']);
    }
}



function change_img_id(data) {
    var img_url = data['message'];
    // console.log(img_url);
    document.getElementById('image').src = img_url;
}

function fireDogImage() {
    getapi(api_url);
}