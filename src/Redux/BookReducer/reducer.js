const initalstate ={
  isLoading: false,
  isError: false,
  books: [],
}
const reducer = (state = initalstate, action) =>
    {
        switch (action.type) {
            case 'BOOKS_REQUEST':
                return {...state, isLoading: true, isError: false};
                case 'BOOKS_SUCCESS':
                    return {...state, isLoading: false, books: action.payload};
                    case 'BOOKS_FAILURE':
                        return {...state, isLoading: false, isError: true};
                        default:
                            return state;
        }
    }