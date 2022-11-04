export const getFetchApi = async (apiUrl: string) => {
    try {
        //with axios test runner was having some issues so i use fetch here
        const response = fetch(apiUrl);

        return response;
    } catch (err) {
        console.error(err);
        return Promise.reject(new Error("fail"));
    }

};