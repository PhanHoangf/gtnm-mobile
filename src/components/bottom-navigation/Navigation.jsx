import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Wrapper from '../../pages/Wrapper';
import HomePage from '../../pages/HomePage';
import NewsPage from '../../pages/NewsPage';
import Header from '../header/Header';

const HomeRoute = () => {
    return (
        <Wrapper>
            <Header>WELCOME GENIOUS</Header>
            <HomePage></HomePage>
        </Wrapper>
    );
};

const NewsRoute = () => {
    return (
        <Wrapper>
            <Header>NEWS</Header>
            <NewsPage></NewsPage>
        </Wrapper>
    );
};

const RecentsRoute = () => <Text>Recents</Text>;

const Navigation = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'albums', title: 'News', icon: 'album' },
        { key: 'recents', title: 'Studying', icon: 'book' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        albums: NewsRoute,
        recents: RecentsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            barStyle={{ backgroundColor: '#FAFAFA' }}
            activeColor='#2F80ED'
            inactiveColor='#E8E8E8'
        />
    );
};

export default Navigation;
