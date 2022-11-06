import { View, Text, Button, Platform } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const Seçici = () => {
  const [date, setDate] = useState(new Date(2030, 10, 20));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);

  return (
    <View>
      <Text>this is dateTimePicker</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="inline"
        />
      )}
      <DateTimePicker
        testID="dateTimePicker"
        value={new Date(2030, 10, 20)}
        mode="date"
        display="spi"
      />

      <DateTimePicker
        value={new Date()}
        mode="date"
        display="default"
        style={{ width: 320, backgroundColor: "white" }}
      />
    </View>
  );
};

export default Seçici;
