// App.js
import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  StatusBar, 
  SafeAreaView, 
  Animated 
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Import screens
import HomePage from './screens/HomePage';
import AllFarmsPage from './screens/AllFarmsPage';
import ServicePage from './screens/ServicePage';
import ProfilePage from './screens/ProfilePage';

// Import sidebar component
import Sidebar from './components/Sidebar';

const App = () => {
  const [currentTab, setCurrentTab] = useState('Home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarAnimation = useRef(new Animated.Value(0)).current;

  // Toggle sidebar
  const toggleSidebar = () => {
    const toValue = sidebarOpen ? 0 : 1;
    
    Animated.timing(sidebarAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar
  const closeSidebar = () => {
    if (sidebarOpen) {
      Animated.timing(sidebarAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      
      setSidebarOpen(false);
    }
  };

  // Render the current screen based on tab selection
  const renderScreen = () => {
    switch (currentTab) {
      case 'Home':
        return <HomePage />;
      case 'All Farms':
        return <AllFarmsPage />;
      case 'Service':
        return <ServicePage />;
      case 'MyProfile':
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4CAF50" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleSidebar}>
          <MaterialIcons name="menu" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {currentTab === 'MyProfile' ? 'My Profile' : currentTab}
        </Text>
        <View style={{width: 28}} /> {/* Empty view for balance */}
      </View>
      
      {/* Main Content Area */}
      <View style={styles.content}>
        {renderScreen()}
      </View>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => setCurrentTab('Home')}
        >
          <MaterialIcons 
            name="home" 
            size={24} 
            color={currentTab === 'Home' ? '#4CAF50' : '#666'} 
          />
          <Text style={[
            styles.navText, 
            {color: currentTab === 'Home' ? '#4CAF50' : '#666'}
          ]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => setCurrentTab('All Farms')}
        >
          <MaterialCommunityIcons 
            name="barn" 
            size={24} 
            color={currentTab === 'All Farms' ? '#4CAF50' : '#666'} 
          />
          <Text style={[
            styles.navText, 
            {color: currentTab === 'All Farms' ? '#4CAF50' : '#666'}
          ]}>All farms</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => setCurrentTab('Service')}
        >
          <MaterialIcons 
            name="build" 
            size={24} 
            color={currentTab === 'Service' ? '#4CAF50' : '#666'} 
          />
          <Text style={[
            styles.navText, 
            {color: currentTab === 'Service' ? '#4CAF50' : '#666'}
          ]}>Service</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => setCurrentTab('MyProfile')}
        >
          <FontAwesome 
            name="user-circle" 
            size={24} 
            color={currentTab === 'MyProfile' ? '#4CAF50' : '#666'} 
          />
          <Text style={[
            styles.navText, 
            {color: currentTab === 'MyProfile' ? '#4CAF50' : '#666'}
          ]}>MyProfile</Text>
        </TouchableOpacity>
      </View>
      
      {/* Sidebar Component */}
      <Sidebar 
        isOpen={sidebarOpen}
        onClose={closeSidebar}
        onSelectTab={setCurrentTab}
        currentTab={currentTab}
        sidebarAnimation={sidebarAnimation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default App;
