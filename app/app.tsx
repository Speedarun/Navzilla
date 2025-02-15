import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const app = () => {
  return (
    <View>
      <Text>app</Text>
    </View>
  )
}
export type RootStackParamList = {
  Main: undefined;
  Products: { category: string, id: string, name: string, rating: number,numberOfRatings: number, price: number, description: string, image: string };
};

export type ProductsScreenProps = NativeStackScreenProps<RootStackParamList, 'Products'>;
export default app
