function newPokestop() {

    // We want to add the name and url from this form
    // to top of the unordered list of Pokestops

    // 1. Grab the input name
    var new_name = document.getElementById('new_stop_name');

    // 2. Grab the input url
    var new_url = document.getElementById('new_stop_url');

    // 2.a Make sure there is a protocol at the beginning of the url
    // That is, either new_url starts with "http://" or new_url starts
    // with "https://"
    if (new_url.value.substring(0, 7) == "http://" || new_url.value.substring(0, 8) == "https://") {

        // 3. Grab the UL
        var pokestops = document.getElementById('pokestops');

        // 4. Create a new list item
        var new_li = document.createElement("li");

        // 5. Create a new anchor tag
        var new_a = document.createElement("a");

        // 6. Create a new text node (something that would display on the screen)
        var new_text = document.createTextNode(new_name.value);

        // 7. Add the text to the anchor (this is the text between <a> and </a>)
        new_a.appendChild(new_text);

        // 8. Add the href attribute and a blank target to the anchor
        new_a.href = new_url.value;
        new_a.target = "_blank";

        // 9. Add the anchor to the li
        new_li.appendChild(new_a);

        // 10. Prepend li before first li that's already there
        var first_li = document.querySelector("#pokestops li:first-of-type");
        pokestops.insertBefore(new_li, first_li);

        // This method was suggested here:
        // https://www.w3schools.com/jsref/met_node_insertbefore.asp
        // pokestops.insertBefore(new_li, pokestops.childNodes[0]);

        // 11. Update the alert
        var alert = document.getElementById('pokestop-message');
        alert.innerHTML = "Thanks for adding <strong>" + new_name.value + "</strong> to the list!";
        alert.classList.remove('alert-danger');
        alert.classList.add('alert-success');

        // 12. Blank out the name and the url
        new_name.value = '';
        new_url.value = '';

    }

    else {

        var alert = document.getElementById('pokestop-message');
        alert.innerHTML = "The Pokestop URL must begin with <code>http://</code> or <code>https://</code> - please correct it.";
        alert.classList.remove('alert-success');
        alert.classList.add('alert-danger');

    }

}

function newGym() {

    var message = document.getElementById('gym-message');
    var gyms = document.getElementById('gyms');
    var new_name = document.getElementById('new_gym_name');
    var new_url = document.getElementById('new_gym_url');

    const valid_match = /^https?:\/\//i;

    if (new_url.value.search(valid_match) === 0) {

        var new_item = document.createElement("li");
        var new_a = document.createElement("a");
        var new_text = document.createTextNode(new_name.value);
        new_a.appendChild(new_text);
        new_a.target = "_blank";
        new_a.href = new_url.value;
        new_item.appendChild(new_a);

        console.log(new_item);

        // *** magic ***
        var first_li = document.querySelector("#gyms li:first-of-type");
        gyms.insertBefore(new_item, first_li);

        message.innerHTML = "Thanks for adding <strong>" + new_name.value + "</strong> to the list!";
        message.classList.add("alert-success");
        message.classList.remove("alert-danger");

        new_name.value = '';
        new_url.value = '';

    }
    else {

        message.innerHTML = "The gym URL needs to begin with <code>http://</code> or <code>https://</code> - please correct it.";
        message.classList.add("alert-danger");
        message.classList.remove("alert-success");

    }


}
