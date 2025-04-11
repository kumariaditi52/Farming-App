import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Animated, 
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.7;

const Sidebar = ({ 
  isOpen, 
  onClose, 
  onSelectTab, 
  currentTab, 
  sidebarAnimation 
}) => {
  // Sidebar translateX animation
  const sidebarTranslate = sidebarAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-SIDEBAR_WIDTH, 0],
  });

  // Overlay opacity animation
  const overlayOpacity = sidebarAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });

  // Change tab and close sidebar
  const changeTab = (tab) => {
    onSelectTab(tab);
    onClose();
  };

  return (
    <>
      {/* Overlay for closing sidebar when clicking outside */}
      {isOpen && (
        <TouchableWithoutFeedback onPress={onClose}>
          <Animated.View 
            style={[
              styles.overlay,
              { opacity: overlayOpacity }
            ]} 
          />
        </TouchableWithoutFeedback>
      )}
      
      {/* Sidebar Menu */}
      <Animated.View 
        style={[
          styles.sidebar,
          { transform: [{ translateX: sidebarTranslate }] }
        ]}
      >
        <View style={styles.sidebarHeader}>
          <FontAwesome name="user-circle" size={60} color="white" />
          <Text style={styles.sidebarName}>John Farmer</Text>
          <Text style={styles.sidebarEmail}>john.farmer@example.com</Text>
        </View>
        
        <TouchableOpacity 
          style={[
            styles.sidebarItem, 
            currentTab === 'Home' && styles.sidebarItemActive
          ]} 
          onPress={() => changeTab('Home')}
        >
          <MaterialIcons name="home" size={24} color={currentTab === 'Home' ? '#4CAF50' : '#333'} />
          <Text style={[
            styles.sidebarItemText,
            currentTab === 'Home' && styles.sidebarItemTextActive
          ]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.sidebarItem,
            currentTab === 'All Farms' && styles.sidebarItemActive
          ]} 
          onPress={() => changeTab('All Farms')}
        >
          <MaterialCommunityIcons name="barn" size={24} color={currentTab === 'All Farms' ? '#4CAF50' : '#333'} />
          <Text style={[
            styles.sidebarItemText,
            currentTab === 'All Farms' && styles.sidebarItemTextActive
          ]}>All Farms</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.sidebarItem,
            currentTab === 'Service' && styles.sidebarItemActive
          ]} 
          onPress={() => changeTab('Service')}
        >
          <MaterialIcons name="build" size={24} color={currentTab === 'Service' ? '#4CAF50' : '#333'} />
          <Text style={[
            styles.sidebarItemText,
            currentTab === 'Service' && styles.sidebarItemTextActive
          ]}>Services</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.sidebarItem,
            currentTab === 'MyProfile' && styles.sidebarItemActive
          ]} 
          onPress={() => changeTab('MyProfile')}
        >
          <FontAwesome name="user-circle" size={24} color={currentTab === 'MyProfile' ? '#4CAF50' : '#333'} />
          <Text style={[
            styles.sidebarItemText,
            currentTab === 'MyProfile' && styles.sidebarItemTextActive
          ]}>My Profile</Text>
        </TouchableOpacity>
        
        <View style={styles.divider} />
        
        <TouchableOpacity style={styles.sidebarItem}>
          <MaterialIcons name="settings" size={24} color="#333" />
          <Text style={styles.sidebarItemText}>Settings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.sidebarItem}>
          <MaterialIcons name="help" size={24} color="#333" />
          <Text style={styles.sidebarItemText}>Help & Support</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.sidebarItem}>
          <MaterialIcons name="logout" size={24} color="#333" />
          <Text style={styles.sidebarItemText}>Logout</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    zIndex: 1,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: SIDEBAR_WIDTH,
    height: '100%',
    backgroundColor: 'white',
    zIndex: 2,
    elevation: 10,
  },
  sidebarHeader: {
    backgroundColor: '#4CAF50',
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  sidebarName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  sidebarEmail: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
    opacity: 0.8,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingLeft: 20,
  },
  sidebarItemActive: {
    backgroundColor: '#E8F5E9',
  },
  sidebarItemText: {
    marginLeft: 20,
    fontSize: 16,
    color: '#333',
  },
  sidebarItemTextActive: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default Sidebar;
