const initialState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams('welcome'))

const NavReducer = (state = initialState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state)

  return nextState || state
}

export default NavReducer
