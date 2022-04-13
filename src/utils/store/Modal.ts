export type Action = {
  type: string
}

const reducer = (state: boolean, action: Action) => {
  switch (action.type) {
    case 'OPEN':
      return true
    case 'CLOSE':
      return false
    default:
      return state
  }
}