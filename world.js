document.addEventListener("DOMContentLoaded", function(){
    var button1 = document.querySelector("#lookup");
    var button2 = document.querySelector("#butty");

    button1.addEventListener("click", function(event) {
        event.preventDefault();

        var value = document.querySelector("#country").value;
        
        fetch(`http://localhost/comp2245-assignment5/world.php?country=${value}`)
        .then(response => response.text())
        .then(data => {
            var result = document.querySelector("#result");

            result.innerHTML = data;
        })
        .catch(error => {

        })
    });

    button2.addEventListener("click", function(event) {
        event.preventDefault();

        var value = document.querySelector("#country").value;

        fetch(`http://localhost/comp2245-assignment5/world.php?country=${value}&lookup=cities`)
        .then(response => response.text())
        .then(data => {
          
            var result = document.querySelector("#result");

            result.innerHTML = data;
        })
        .catch(error => {

        })
    })


})