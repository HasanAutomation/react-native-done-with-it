import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function useLocation() {
  const [location, setLocation] = useState();

  async function getLocation() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        window.alert('Permission Denied');
        return;
      }
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      setLocation({ latitude, longitude });
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return { location };
}
