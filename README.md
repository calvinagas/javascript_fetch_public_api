# Fetch Data using Public API (no key)

## Descriptions
Fetch dog's image data from public API using JavaScript with WITHOUT API key

## Features
* Press Spacebar to see dog's images (CTRL Key = 32) 
```javascript
document.body.onkeyup = function(e){ 
    if(e.keyCode == 32){ //spacebar to pause timer
        fireDogImage(); 
    }
};
```

## HTML Image ID setup
```html
<div id="container">
  <image class="img1" src="" id="image"/>
</div>
```

## JavaScript Function - Inside script.js
* async function getapi()
```javascript
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
```

* function change_img_id
```javascript
function change_img_id(data) {
    var img_url = data['message'];
    // console.log(img_url);
    document.getElementById('image').src = img_url;
}
```

* function fireDogImage()
```javascript
function fireDogImage() {
    getapi(api_url);
}
```

## Frontend
* HTML
* CSS
* JavaScript

## Backend
* JavaScript

## Public API URL - Get Random Dog Images
[https://dog.ceo/api/breeds/image/random](https://dog.ceo/api/breeds/image/random)

## Authors
@calvinagas
