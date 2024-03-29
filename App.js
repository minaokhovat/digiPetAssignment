import React, { useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import { Audio } from 'expo-av';
import { SQLite } from 'expo-sqlite';
import { FileSystem } from 'expo-file-system';
import { useOrientation } from '@react-native-community/hooks';

const Pet = () => {
  const [happiness, setHappiness] = useState(100);
  const orientation = useOrientation();

  const feedPet = async () => {
    // Increase pet's happiness and play feeding sound
    setHappiness(prevHappiness => prevHappiness + 10);
    await Audio.Sound.createAsync(require('./assets/feeding.mp3'), { shouldPlay: true });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pet Happiness: {happiness}</Text>
      <TouchableOpacity onPress={feedPet}>
      <Pressable onPress={feedPet}>
       <Feather name="feather" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={petPet}>
        <Feather name="heart" size={24} color="red" />
      </TouchableOpacity>
      {renderInventory()}
        <Text>Feed Pet</Text>
      </Pressable>
      <Text>Orientation: {orientation}</Text>
    </View>
  );
};

export default Pet;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
