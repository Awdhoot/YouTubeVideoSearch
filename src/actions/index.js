// creating action creator

export function selectBook(book) {
  // this action creator will return following action, an object with a 'type' property
  return {
    type: 'BOOK_SELECTED', // always contains a type (always UPPERCASE)
    payload: book
  }
}