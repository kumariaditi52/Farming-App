import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ServicePage = () => {
  const services = [
    { id: 1, name: 'Equipment Rental', icon: 'tractor', type: 'community', color: '#1565C0' },
    { id: 2, name: 'Soil Testing', icon: 'science', type: 'material', color: '#2E7D32' },
    { id: 3, name: 'Pest Control', icon: 'bug-outline', type: 'community', color: '#D32F2F' },
    { id: 4, name: 'Irrigation Services', icon: 'water', type: 'community', color: '#0097A7' },
    { id: 5, name: 'Harvesting Help', icon: 'content-cut', type: 'material', color: '#F57C00' },
    { id: 6, name: 'Crop Insurance', icon: 'shield-check', type: 'community', color: '#7B1FA2' },
  ];

  const renderIcon = (service) => {
    if (service.type === 'material') {
      return <MaterialIcons name={service.icon} size={30} color={service.color} />;
    } else {
      return <MaterialCommunityIcons name={service.icon} size={30} color={service.color} />;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Farming Services</Text>
        <Text style={styles.headerSubText}>Find the support you need for your farm</Text>
      </View>

      <View style={styles.servicesGrid}>
        {services.map(service => (
          <TouchableOpacity key={service.id} style={styles.serviceCard}>
            <View style={[styles.iconContainer, { backgroundColor: `${service.color}20` }]}>
              {renderIcon(service)}
            </View>
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.serviceAction}>Book Now</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.supportSection}>
        <Text style={styles.supportTitle}>Need Custom Service?</Text>
        <TouchableOpacity style={styles.supportButton}>
          <MaterialIcons name="support-agent" size={20} color="white" />
          <Text style={styles.supportButtonText}>Contact Support</Text>
        </TouchableOpacity>
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
    backgroundColor: '#4CAF50',
    padding: 20,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubText: {
    fontSize: 16,
    color: 'white',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
  },
  serviceCard: {
    backgroundColor: 'white',
    width: '48%',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  serviceAction: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  supportSection: {
    margin: 15,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
  },
  supportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  supportButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  supportButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default ServicePage;
