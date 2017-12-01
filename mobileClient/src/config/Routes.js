import { StackNavigator, TabNavigator } from 'react-navigation'
import SigninScreen from '../screens/SigninScreen'
import SignupScreen from '../screens/SignupScreen'
import DashboardScreen from '../screens/DashboardScreen'
import CalendarScreen from '../screens/CalendarScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

export default RootNavigator = TabNavigator({
  welcome: { screen: WelcomeScreen },
  signin: { screen: SigninScreen },
  signup: { screen: SignupScreen },
  app: {
    screen: TabNavigator({
      dashboard: { screen: DashboardScreen },
      settings: { screen: SettingsScreen }
    })
  }
 },
 {
  navigationOptions: { tabBarVisible: false }
})
