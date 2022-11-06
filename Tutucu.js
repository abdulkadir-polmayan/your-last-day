import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { inline } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";

const Tutucu = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [tarih, setTarih] = useState();
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setTarih(date.toString());
    hideDatePicker();
  };

  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Text>{tarih}</Text>
    </View>
  );
};

export default Tutucu;
