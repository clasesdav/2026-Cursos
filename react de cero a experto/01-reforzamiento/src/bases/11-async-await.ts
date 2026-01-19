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

const getRandomGifUrl = async ():Promise<string> => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    const { data }: GyphyRandomResponse = await (response.json());

    return data.images.original.url;
}

getRandomGifUrl()
    .then(
        url => createImageInsideDOM(url)
    )

