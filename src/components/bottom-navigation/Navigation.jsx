import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Wrapper from '../../pages/Wrapper';

const HomeRoute = () => {
    return (
        <Wrapper />
    )
}

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const Navigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    albums: AlbumsRoute,
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