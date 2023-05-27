import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import useGlobalContext from "../context/appContext";
const TrackForm = () => {
  const {
    stopRecording,
    startRecording,
    changeName,
    name,
    recording,
    locations,
  } = useGlobalContext();
  // const [name, setName] = useState();
  console.log(locations.length);
  return (
    <View
      style={{
        height: 500,
        justifyContent: "center",
        backgroundColor: "#fff7",
      }}
    >
      <Input
        value={name}
        onChange={changeName}
        placeholder="enter track name"
      />
      {recording ? (
        <Button title="stop recording" onPress={() => stopRecording()} />
      ) : (
        <Button title="start recording" onPress={() => startRecording()} />
      )}
    </View>
  );
};

export default TrackForm;
