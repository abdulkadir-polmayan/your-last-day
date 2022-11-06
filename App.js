import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { geriSayımİşlevi } from "./anaİşlev";
import Seçici from "./Seçici";
import Tutucu from "./Tutucu";

const varsayılanKalanZaman = {
  saniye: "2",
  dakika: "2",
  saat: "2",
  gün: "2",
};
export default function App() {
  const zamanSalise = 1672520400000;
  const [kalanZaman, setKalanZaman] = useState(varsayılanKalanZaman);
  useEffect(() => {
    const ıntervalId = setInterval(() => {
      güncelleKalanZamanı(zamanSalise);
    }, 1000);

    return () => {
      clearInterval(ıntervalId);
    };
  }, [zamanSalise]);

  function güncelleKalanZamanı(budanGeriSay) {
    setKalanZaman(geriSayımİşlevi(budanGeriSay));
  }
  return (
    <View className="h-screen justify-center pl-24 ">
      {/* <Text className="text-left text-3xl font-bold">
        <View>
          <Text className="text-left text-3xl font-bold w-10">
            {kalanZaman.gün}
          </Text>
        </View>
        <Text>gün</Text>
      </Text>
      <Text className="text-left text-3xl font-bold">
        <View>
          <Text className="text-left text-3xl font-bold  w-10">
            {kalanZaman.saat}
          </Text>
        </View>
        <Text>saat</Text>
      </Text>
      <Text className="text-left text-3xl font-bold">
        <View>
          <Text className="text-left text-3xl font-bold  w-10">
            {kalanZaman.dakika}
          </Text>
        </View>
        <Text>dakika</Text>
      </Text>
      <Text className="text-left text-3xl font-bold">
        <View>
          <Text className="text-left text-3xl font-bold  w-10">
            {kalanZaman.saniye}
          </Text>
        </View>
        <Text>saniye</Text>
      </Text> */}
      {/* <Tutucu /> */}
      <Seçici />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 2,
  },
});
