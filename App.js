import * as React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar , ScrollView} from 'react-native';

const names = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Aaron-James",
  "Aarron",
  "Aaryan",
  "Aaryn",
  "Aayan",
  "Aazaan",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Abdihakim",
  "Abdirahman",
  "Abdisalam",
  "Abdul",
  "Abdul-Aziz",
  "Abdulbasir",
  "Abdulkadir",
  "Abdulkarem",
];






const namesAsObjects = names.map((item) => {
 return {
   name: item,
 };
});
export default function App() {
 const renderName = ({ item }) => {
   return <Text style={styles.names}>{item.name}</Text>;
 };
 return (
   <SafeAreaView style={styles.container}>
    <FlatList
     data={namesAsObjects}
     renderItem={renderName}
     keyExtractor={(item) => item.names}
   />
  </SafeAreaView>
 );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ECF0F1',
    padding: 30,
  },
  names: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'blue',
    color: "white",
  },
});