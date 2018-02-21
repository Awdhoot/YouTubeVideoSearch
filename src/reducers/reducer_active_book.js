// each reducer gets 2 default args -
// state (currentState of this reducer), action(action that will / will not update the state of this reducer)
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED' :
      return action.payload;
    default:
      return state;
  }
}