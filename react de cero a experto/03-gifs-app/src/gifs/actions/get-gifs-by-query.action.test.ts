import { beforeEach, describe, expect, test, vi } from "vitest";
import { getGifsByQuery } from './get-gifs-by-query.action';

import AxiosMockAdapter from 'axios-mock-adapter';

import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from '../../../test/mocks/gifphy.response.data';


describe('getGifsByQuery', () => {

    let mock = new AxiosMockAdapter(giphyApi);

    beforeEach(() => {
        // mock.reset();
        mock = new AxiosMockAdapter(giphyApi);
    });

    // test('should return a list of gifs', async () => {

    //     const gifs = await getGifsByQuery('goku');
    //     const [gif1] = gifs;

    //     expect(gifs.length).toBe(10);

    //     // console.log(gifs);
    //     expect(gif1).toEqual({
    //         id: expect.any(String),
    //         height: expect.any(Number),
    //         width: expect.any(Number),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //     });
    // });


    //test con AXIOS MOCK

    test('Should return a list of gifs', async () => {

        mock.onGet('/search').reply(200, giphySearchResponseMock)
        const gifs = await getGifsByQuery('goku');
        // console.log(gifs);
        expect(gifs.length).toBe(10);

        gifs.forEach(gif => {

            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');
        });
    });

    test('Should return an empty listt of gifs if query is empty', async () => {

        // mock.onGet('/search').reply(200, { data: [] });
        mock.restore();
        const gifs = await getGifsByQuery('');
        // console.log(gifs);
        expect(gifs.length).toBe(0);
    });

    test('Should handle error when the API returns error', async () => {

        const consoleErrorSpy = vi.spyOn(console, 'error')
            .mockImplementation(() => {
                // console.log('Hola david');

            });

        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad Request'
            }
        });

        const gifs = await getGifsByQuery('goku');
        // console.log(gifs);
        expect(gifs.length).toBe(0);
        expect(consoleErrorSpy).toHaveBeenCalled();
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything());
    });
});