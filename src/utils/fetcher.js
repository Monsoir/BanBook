export default class Fetcher {
    static fetch = (url) => {
        return fetch(url)
                .then(response => {
                    return response.json();
                })
                .then((responseData) => { return responseData; });
    };
}
