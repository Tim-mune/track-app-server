import * as Location from "expo-location";
const tenMeters = 0.0001;
const getlocation = (increment) => {
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 37.0099435 + increment * tenMeters,
      latitude: -1.1013554 + increment * tenMeters,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getlocation(counter),
  });
  counter++;
}, 1000);
