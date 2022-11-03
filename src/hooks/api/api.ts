export const getFetchApi = async () => {
    //with axios test runner was having some issues so i use fetch here
    return fetch('bundle-api.json').then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error("Invalid response");
        }
    });
};