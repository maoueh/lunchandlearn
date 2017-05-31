import { TabNavigator } from 'react-navigation';
import TalksCalendarPresenter from '../screens/TalksCalendarPresenter';
import LoginPresenter from '../screens/LoginPresenter';
export const Tabs = TabNavigator({
    Talks: {
        screen: TalksCalendarPresenter,
        navigationOptions: {
            tabBarLabel: 'Calendar',
        }
    },
    WishList: {
        screen: LoginPresenter,
        navigationOptions: {
            tabBarLabel: 'Wishlist',
        }
    },
    Create: {
        screen: LoginPresenter,
        navigationOptions: {
            tabBarLabel: 'Create',
        }
    },
    Settings: {
        screen: LoginPresenter,
        navigationOptions: {
            tabBarLabel: 'Settings',
        }
    }
});
//# sourceMappingURL=router.js.map