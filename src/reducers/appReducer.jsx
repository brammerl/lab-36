export const initialState = {
  character: [],
  characterDetails: {},
  theme: 'light',
  page: 1
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_CHARACTER':
      return {...state, character: action.payload};
    case 'TOGGLE_THEME': 
      return {...state, theme: state.theme === 'light' ? 'dark' : 'light'};
    case 'ADD_PAGE':
      return { ...state, page: state.page + 1};
    case 'SUB_PAGE':
      return {...state, page: state.page - 1};
    default: 
      return state;
  }
}

