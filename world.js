document.addEventListener("DOMContentLoaded", function(){

    let btn = document.querySelector("#lookup");

    btn.addEventListener("click", function(event){
        event.preventDefault();


        let value = document.querySelector("#country").value;
        console.log(value);


        fetch('http://localhost/comp2245-assignment5/world.php?country=${value}')
        .then(response => response.text())
        .then (data => {
            let result = document.querySelector("result");
            result.innerHTML = data;
        })
        .catch(error => {

        })
    })

})