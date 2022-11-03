export const getFetchApi = async (apiUrl:string) => {
    //with axios test runner was having some issues so i use fetch here
    const response= fetch(apiUrl);

    return response;
};