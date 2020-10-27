import reducer from './appReducer';

describe('app reducer', () => {
  it('sets a charcter with the SET_CHARACTER action type', () => {
    const state = {
      character: []
    };

    const action = {
      type: 'SET_CHARACTER',
      payload: {
        id: '23592068239068',
        name: 'random name',
        photoUrl: 'https://testerUrl.com'
      }
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      character: {
        id: '23592068239068',
        name: 'random name',
        photoUrl: 'https://testerUrl.com'
      }
    });
  });

  it('toggles the theme from light to dark', () => {
    const state = {
      theme: 'light'
    };

    const action = {
      type: 'TOGGLE_THEME'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      theme: 'dark'
    });
  });

  it('toggles the theme from dark to light', () => {
    const state = {
      theme: 'dark'
    };

    const action = {
      type: 'TOGGLE_THEME'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      theme: 'light'
    });
  });
});