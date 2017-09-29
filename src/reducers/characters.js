import _ from 'lodash';
// reducers are listening for actions to get dispatched
// loadash is letting us use _.merge
const characters = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS': {
      const nextState = _.merge({}, state);
      nextState.characters = action.characters;
      return nextState;
    }
    default:
      return state
  }
}

export default characters
