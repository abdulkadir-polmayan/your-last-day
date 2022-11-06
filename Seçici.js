import { View, Text, Button, Platform } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const Seçici = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
 
  return (
    <View>

      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={true}
        style={{width: 320, backgroundColor: "white"}} //add this
        display="spinner"
      />
    </View>
  );
};

export default Seçici;
