export const articleReducer = (state: any, action: any) => {
    switch (action.type) {
        case "DATA_SUCCESS":
            return {
                ...state,
                articleData: action.payload,
                error: '',
                loading: false
            }
            break;
        case "DATA_ERROR":
            return {
                ...state,
                articleData: {},
                error: action.payload,
                loading: false
            }
            break;
        default:
            return state;
    }
}

export const InitialState = {
    articleData: {},
    error: '',
    loading: true
}