function newPokestop() {

    // We want to add the name and url from this form
    // to top of the unordered list of Pokestops

    // 1. Grab the input name
    new_name = document.getElementById('new_stop_name');

    // 2. Grab the input url
    new_url = document.getElementById('new_stop_url');

    // 2.a Make sure there is a protocol at the beginning of the url
    // TODO


    // 3. Grab the UL
    pokestops = document.getElementById('pokestops');

    // 4. Create a new list item
    new_li = document.createElement("li");

    // 5. Create a new anchor tag
    new_a = document.createElement("a");

    // 6. Create a new text node (something that would display on the screen)
    new_text = document.createTextNode(new_name.value);

    // 7. Add the text to the anchor (this is the text between <a> and </a>)
    new_a.appendChild(new_text);

    // 8. Add the href attribute to the anchor
    new_a.href = new_url.value;

    // 9. Add the anchor to the li
    new_li.appendChild(new_a);

    // 10. Prepend li before first li that's already there
    first_li = document.querySelector("#pokestops li:first-of-type");
    pokestops.insertBefore(new_li, first_li);

    // This method was suggested here:
    // https://www.w3schools.com/jsref/met_node_insertbefore.asp
    // pokestops.insertBefore(new_li, pokestops.childNodes[0]);

    // 11. Update the alert
    alert = document.getElementById('pokestop-message');
    alert.innerHTML = "Thanks for adding <strong>" + new_name.value + "</strong> to the list!";
    alert.classList.remove('alert-danger');
    alert.classList.add('alert-success');

    // 12. Blank out the name and the url
    new_name.value = '';
    new_url.value = '';






}
