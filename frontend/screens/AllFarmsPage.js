import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AllFarmsPage = () => {
  // Sample farm data
  const farms = [
    { id: 1, name: 'Green Valley Farm', location: 'North Region', area: '25 acres', crops: 'Wheat, Rice' },
    { id: 2, name: 'Sunshine Fields', location: 'East Region', area: '18 acres', crops: 'Corn, Vegetables' },
    { id: 3, name: 'Riverside Plantation', location: 'West Region', area: '30 acres', crops: 'Sugarcane, Cotton' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Farms</Text>
        <TouchableOpacity style={styles.addButton}>
          <MaterialIcons name="add-circle" size={24} color="#4CAF50" />
          <Text style={styles.addButtonText}>Add Farm</Text>
        </TouchableOpacity>
      </View>

      {farms.map(farm => (
        <TouchableOpacity key={farm.id} style={styles.farmCard}>
          <View style={styles.farmIconContainer}>
            <MaterialIcons name="landscape" size={40} color="#4CAF50" />
          </View>
          <View style={styles.farmDetails}>
            <Text style={styles.farmName}>{farm.name}</Text>
            <Text style={styles.farmLocation}>
              <MaterialIcons name="location-on" size={14} color="#666" /> {farm.location}
            </Text>
            <View style={styles.farmStats}>
              <Text style={styles.farmStat}>
                <MaterialIcons name="straighten" size={14} color="#666" /> {farm.area}
              </Text>
              <Text style={styles.farmStat}>
                <MaterialIcons name="eco" size={14} color="#666" /> {farm.crops}
              </Text>
            </View>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#999" />
        </TouchableOpacity>
      ))}

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Farm Management Tips</Text>
        <Text style={styles.infoText}>
          Regularly update your farm details and crop information to get personalized recommendations.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonText: {
    marginLeft: 5,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  farmCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
  },
  farmIconContainer: {
    marginRight: 15,
  },
  farmDetails: {
    flex: 1,
  },
  farmName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  farmLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  farmStats: {
    flexDirection: 'row',
  },
  farmStat: {
    fontSize: 12,
    color: '#666',
    marginRight: 10,
  },
  infoSection: {
    margin: 15,
    padding: 15,
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
  },
});

export default AllFarmsPage;
