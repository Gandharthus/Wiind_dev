import React from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import MenuStyles from '../styles/MenuStyles';

const Menu = () => {
  const { width } = useWindowDimensions();

  // Render breadcrumbs when screen width is less than 768
  if (width < 768) {
    return (
      <View style={MenuStyles.breadcrumbs}>
        <Text style={MenuStyles.breadcrumbsText}>Home / CMMS</Text>
      </View>
    );
  }

  // Render dropdown menu otherwise
  return (
    <View style={MenuStyles.menu}>
      <TouchableOpacity>
        <Text style={MenuStyles.menuText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={MenuStyles.menuText}>CMMS</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={MenuStyles.menuText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="bell" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
