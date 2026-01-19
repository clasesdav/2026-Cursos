import type { GyphyRandomResponse } from '../data/gyphy.response';

const API_KEY = '3aZyXSO662VuyNWNyDudTVJJQugAn8nB';

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}

myRequest
    .then((response) => response.json())
    .then(({ data }: GyphyRandomResponse) => {

        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl);



        // const imageUrl = data.data.images.original.url;
        // console.log(imageUrl);

        // const imgElement = document.createElement('img');
        // imgElement.src = imageUrl;
        // document.body.append(imgElement);
    })
    .catch((err) => {
        console.log(err);
    });

// myRequest.then((response) => {

//     console.log(response);
//     response.json().then((data) => {
//         console.log(data);
//     });
// })
//     .catch((err) => {
//         console.log(err);
//     })
//     ;