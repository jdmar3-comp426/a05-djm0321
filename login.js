window.addEventListener( "load" , function() {
    function sendData() {
        const sendRequest = new XMLHttpRequest();
        let signupInfo = new FormData(form);

        sendRequest.addEventListener("error", function(event) {
            alert("Submission unsuccessful, please try again");
        });
        
        sendRequest.addEventListener("load", function(event) {
            alert("Your account was created!");
        });
        sendRequest.open("POST", "http://localhost:5000/app/new/");
        sendRequest.send(signupInfo);
    }
    const form = document.getElementById("signup");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        sendData();
    });
})