import { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

const useLocation = (addLocation, isFocused, recording) => {
  const [error, setError] = useState("");

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      const subscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
        },
        (location) => {
          addLocation(location, recording);
          //   console.log(location);
        }
      );
      {
        !isFocused && subscriber.remove();
      }
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, [isFocused]);
  return [recording];
};
export default useLocation;
