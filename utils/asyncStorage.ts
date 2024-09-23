import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, data: string) => {
  try {
    // convert the object to a string, because asyncstorage can only store string data
    // const json = JSON.stringify(value);
    await AsyncStorage.setItem(key, data);
  } catch (e) {
    console.error(e);
  }
};

export const getData = async (key: string): Promise<any> => {
  try {
    const data = await AsyncStorage.getItem(key);

    // if there is data found in the stored key, return it
    return data;
  } catch (e) {
    console.error(e);
  }
};
