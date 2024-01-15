// DrawerRoutes.js

import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";
import AppRoutes from "./app.routes";

const Drawer = createDrawerNavigator();

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
        options={{headerShown: false}}
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
