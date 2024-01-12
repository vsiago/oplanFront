// DrawerRoutes.js

import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootParamList } from './types';

import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";
import AppRoutes from "./app.routes";

const Drawer = createDrawerNavigator();

type CustomDrawerButtonProps = {
  color: string;
  navigation: DrawerNavigationProp<RootParamList, keyof RootParamList>;
};

const CustomDrawerButton: React.FC<CustomDrawerButtonProps> = ({ color, navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <Feather
      style={{ padding: 0, marginRight: 22, marginTop: 22 }}
      onPress={openDrawer}
      name="menu"
      size={33}
      color={color}
    />
  );
};

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right",
        title: '',
        drawerStyle: { backgroundColor: '#125B85' },
      }}
    >
      <Drawer.Screen
        name="home"
        component={AppRoutes}
        options={({ navigation }) => ({
          headerRight: () => (
            <CustomDrawerButton
              color="#fff"
              navigation={navigation}
            />
          ),
          // headerShown: false,
          headerTransparent: true,
          headerStyle: { backgroundColor: 'transparent' },
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          drawerLabel: "Início",
        })}
      />
      <Drawer.Screen
        name="profile"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          drawerLabel: "Perfil",
          title: "Meu perfil",
        }}
      />
    </Drawer.Navigator>
  );
}
