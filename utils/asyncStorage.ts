import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: any) => {
  try {
    // convert the object to a string, because asyncstorage can only store string data
    const json = JSON.stringify(value);
    await AsyncStorage.setItem('my-key', value);
  } catch (e) {}
};

export const getData = async (): Promise<any> => {
  try {
    const data = await AsyncStorage.getItem('my-key');

    // if there is data found in the stored key, return it
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {}
};
