import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Switch, StyleSheet } from "react-native";
import { LightTheme, DarkTheme } from "../theme/colors";
import { ProfileSection } from "../components/ProfileSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { ProjectsSection } from "../components/ProjectsSection";

export const HomeScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? DarkTheme : LightTheme;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <ScrollView>
        <View style={styles.toggle}>
          <Text style={{ color: theme.text }}>
            {darkMode ? "Dark Mode" : "Light Mode"}
          </Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        <ProfileSection theme={theme} />
        <SkillsSection theme={theme} />
        <ContactSection theme={theme} />
        <ProjectsSection theme={theme} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  toggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },
});
