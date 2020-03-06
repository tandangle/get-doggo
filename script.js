function changeText(){
    var button = document.getElementById("generate");
    var imageHTML = document.getElementById("image");
    button.innerHTML = "Generating doggo..."
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(function(response){
            document.getElementById("image").innerHTML = "";
            console.log(response.data);
            var dogPic = document.createElement('img');
            dogPic.setAttribute("src", `${response.data.message}`);
            document.getElementById("image").appendChild(dogPic);
            button.innerHTML = "Generate doggo"
        })
}