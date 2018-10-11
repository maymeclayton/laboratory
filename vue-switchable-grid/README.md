# Notes

## The Cat API key:

Your API Key: e505ef31-f61d-4814-b9d9-b636d0b99753
Just use it as the 'x-api-key' header when making requests to the API





    let apiRequest = new XMLHttpRequest();

    // Format a url
    let url = 'https://api.thecatapi.com/v1/images/search?limit=20';

    // Fetch from the url
    apiRequest.onload = onSuccess;
    apiRequest.onerror = onError;
    apiRequest.open('get', url, true);
    // apiRequest.setRequestHeader('x-api-key', 'e505ef31-f61d-4814-b9d9-b636d0b99753');
    apiRequest.send();



    function onError() {
        console.log("oops!");
    }


    function onSuccess() {

        if (apiRequest.status == "200") {

            console.log(apiRequest.responseText);

            console.log(JSON.parse(apiRequest.responseText));

        }
        else {
            onError();
        }

    }
