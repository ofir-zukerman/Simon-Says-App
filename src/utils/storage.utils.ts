import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageUtil {
  // save data safely using JSON stringify
  saveArrayOfObjects = async (key: string, value: any): Promise<boolean> => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  };
}

export const asyncStorageUtil = new AsyncStorageUtil();
