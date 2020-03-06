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
};

axios.get('https://dog.ceo/api/breeds/list')
    .then(function(response){
        console.log(response)
        response.data.message.map(function(breed){
            var optionHTML = document.createElement("option");
            optionHTML.setAttribute("value", `${breed}`);
            optionHTML.innerHTML = `${breed}`;
            document.getElementById("selectlist").appendChild(optionHTML);
        })
    });

document.getElementById("selectlist").addEventListener("change", function(){
    axios.get(`https://dog.ceo/api/breed/${this.value}/images/random`)
        .then(function(response){
            document.getElementById("image").innerHTML = "";
            console.log(response.data);
            var dogPic = document.createElement('img');
            dogPic.setAttribute("src", `${response.data.message}`);
            document.getElementById("image").appendChild(dogPic);
})})