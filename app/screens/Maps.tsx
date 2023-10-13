import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import Tabs from '../components/Tabs/Tabs';
import Tab from '../components/Tab/Tab';
import Pin from '../components/Pin/Pin';
import {useTheme} from '../theme/useTheme';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {RootState} from 'app/store/store';
import Header from '../components/Header/Header';
import Map from '../components/Map/Map';
import {LocationProps} from '../components/Pin/types';

const initialLatitude = 64.9631;
const initialLongitude = -19.0208;

const Maps = () => {
  const locationsData = useSelector((state: RootState) => state.data.content);
  const {theme} = useTheme();
  const {showActionSheetWithOptions} = useActionSheet();
  const [currentSelection, setCurrentSelection] = React.useState(0);
  const [filteredLocations, setFilteredLocations] = React.useState([]);
  const [citySelection, setCitySelection] = useState({title: 'Iceland'});
  const [latitude, setLatitude] = useState(initialLatitude);
  const [longitude, setLongitude] = useState(initialLongitude);
  const [latitudeDelta, setLatitudeDelta] = useState(10);
  const [longitudeDelta, setLongitudeDelta] = useState(10);

  const showActions = () => {
    // Filter the locations by category "City"
    const cityLocations = locationsData.locations.filter(
      (location: LocationProps) => location.category === 'City',
    );

    // Create an array of city names from the filtered locations
    const options = [
      'Cancel',
      ...cityLocations.map((location: LocationProps) => location.title),
    ];
    const cancelButtonIndex = 0;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      (selectedIndex: number | undefined) => {
        if (selectedIndex !== cancelButtonIndex) {
          // Set the city selection to the chosen city name
          const selectedCity = cityLocations[selectedIndex - 1];
          setCitySelection(selectedCity);
          // Update latitude and longitude to the selected city's coordinates
          setLatitude(selectedCity.latitude);
          setLongitude(selectedCity.longitude);
          // Update latitudeDelta and longitudeDelta to 3 when city selection changes
          setLatitudeDelta(selectedCity.delta);
          setLongitudeDelta(selectedCity.delta);
        }
      },
    );
  };

  React.useEffect(() => {
    // Set the initial default selection based on the first category
    const defaultCategory = locationsData.categories[0]?.name;
    setCurrentSelection(0); // Set currentSelection to 0 as well

    if (defaultCategory) {
      const filtered = locationsData.locations.filter(
        (location: LocationProps) => location.category === defaultCategory,
      );
      setFilteredLocations(filtered);
    } else {
      // If no category is available, show all locations as a fallback
      setFilteredLocations(locationsData.locations);
    }
  }, [locationsData.categories, locationsData.locations]);

  const handleTabPress = (index: number) => {
    setCurrentSelection(index);

    // Step 2: Filter locations based on the selected category
    const selectedCategory = locationsData.categories[index]?.name;
    if (selectedCategory) {
      const filtered = locationsData.locations.filter(
        (location: LocationProps) => location.category === selectedCategory,
      );
      setFilteredLocations(filtered);
    } else {
      // If no category is selected, show all locations
      setFilteredLocations(locationsData.locations);
    }
  };

  return (
    <SafeAreaView
      edges={['bottom']}
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor,
      }}>
      <StatusBar animated barStyle={'light-content'} />
      <Map
        latitude={latitude}
        longitude={longitude}
        latitudeDelta={latitudeDelta}
        longitudeDelta={longitudeDelta}>
        {filteredLocations.map((location, index) => (
          <Pin key={index} location={location} />
        ))}
      </Map>
      <Tabs divider>
        {locationsData.categories.map((category, index: number) => (
          <Tab
            key={index}
            category={category}
            index={index}
            handleTabPress={handleTabPress}
            currentSelection={currentSelection}
          />
        ))}
      </Tabs>
      <Header showActions={showActions} citySelection={citySelection} />
    </SafeAreaView>
  );
};

export default Maps;
