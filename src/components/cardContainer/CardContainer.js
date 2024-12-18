import { View, Text, FlatList } from 'react-native';
import React from 'react';
import ProductCard from '../productCard/ProductCard';
import cardContainerStyle from './cardContainerStyle';

const CardContainer = ({ title, products, handleDelete }) => {
  return (
    <View style={cardContainerStyle.container}>
      <View style={cardContainerStyle.headerRow}>
        <Text style={cardContainerStyle.titleText}>{title}</Text>
        <Text style={cardContainerStyle.showAllText}>Show all</Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <View style={cardContainerStyle.productCardContainer}>
            <ProductCard
              image={{ uri: item.image }}
              name={item.name}
              price={item.price}
              onDelete={() => handleDelete(item.id)}
            />
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={cardContainerStyle.emptyText}>No Products Found</Text>
        )}
      />
    </View>
  );
};

export default CardContainer;
