import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomePage = () => {
  return (
    <View style={styles.container}>
      {/* Add Header with Icon */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Farming Assistant</Text>
        <TouchableOpacity style={styles.cartButton}>
          <MaterialIcons name="notifications" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {/* Welcome Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Welcome to Your Farming Assistant</Text>
          <Text style={styles.bannerSubText}>Grow better, harvest smarter</Text>
        </View>
        
        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, {backgroundColor: '#E1F5FE'}]}>
                <MaterialCommunityIcons name="seed" size={24} color="#0288D1" />
              </View>
              <Text style={styles.actionText}>Crops</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, {backgroundColor: '#F1F8E9'}]}>
                <MaterialCommunityIcons name="weather-partly-cloudy" size={24} color="#558B2F" />
              </View>
              <Text style={styles.actionText}>Weather</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, {backgroundColor: '#FFF3E0'}]}>
                <MaterialIcons name="trending-up" size={24} color="#EF6C00" />
              </View>
              <Text style={styles.actionText}>Market</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, {backgroundColor: '#E8F5E9'}]}>
                <MaterialIcons name="lightbulb" size={24} color="#2E7D32" />
              </View>
              <Text style={styles.actionText}>Tips</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityCard}>
            <Text style={styles.activityTitle}>Crop Planting Season</Text>
            <Text style={styles.activityDesc}>It's the best time to plant wheat in your region</Text>
          </View>
          
          <View style={styles.activityCard}>
            <Text style={styles.activityTitle}>Weather Alert</Text>
            <Text style={styles.activityDesc}>Rain expected in the next 3 days. Plan your activities accordingly.</Text>
          </View>
        </View>
        
        {/* Tips Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Farming Tips</Text>
          <View style={styles.tipCard}>
            <Text style={styles.tipTitle}>Soil Preparation</Text>
            <Text style={styles.tipDesc}>Ensure proper soil preparation before planting to maximize yield.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
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
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 12,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cartButton: {
    padding: 5,
  },
  scrollView: {
    flex: 1,
  },
  banner: {
    backgroundColor: '#4CAF50',
    padding: 20,
    marginBottom: 15,
  },
  bannerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  bannerSubText: {
    fontSize: 16,
    color: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  quickActionsContainer: {
    padding: 15,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  actionButton: {
    alignItems: 'center',
    width: '22%',
    marginBottom: 10,
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  actionText: {
    fontSize: 12,
    color: '#333',
  },
  section: {
    padding: 15,
    marginBottom: 10,
  },
  activityCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  activityDesc: {
    fontSize: 14,
    color: '#666',
  },
  tipCard: {
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2E7D32',
  },
  tipDesc: {
    fontSize: 14,
    color: '#333',
  },
});

export default HomePage;
