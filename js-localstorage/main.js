let color = document.getElementById('color');
let message = document.getElementById('message');

document.onreadystatechange = () => {
    if (document.readyState == "interactive") {
        let saved = localStorage.getItem("favorite_color");
        // console.log(saved);
        if (saved) {
            message.innerHTML = "Your favorite color is <strong>" + saved + "</strong>!";
        }
    }
}

let saveInput = () => {

    // Get the value from the input field
    let input = color.value;

    // Save the value in localstorage
    localStorage.setItem("favorite_color", input);

    // Update the message to show we've saved the input
    message.innerHTML = "I just saved <strong>" + input + "</strong> as your favorite color.";

}
