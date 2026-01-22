import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Animated,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  theme: any;
}

interface ContactItem {
  id: string;
  type: "email" | "github" | "linkedin" | "instagram" | "website" | "phone";
  label: string;
  value: string;
  url: string;
  icon: string;
}

const contactData: ContactItem[] = [
  {
    id: "1",
    type: "email",
    label: "Email",
    value: "arguellesrichmond@gmail.com",
    url: "mailto:arguellesrichmond@gmail.com",
    icon: "mail-outline",
  },
  {
    id: "2",
    type: "github",
    label: "GitHub",
    value: "github.com/ArguellesMomon",
    url: "https://github.com/ArguellesMomon",
    icon: "logo-github",
  },
  {
    id: "3",
    type: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/momonarguelles",
    url: "https://linkedin.com/in/richmond-arguelles/",
    icon: "logo-linkedin",
  },
  {
    id: "4",
    type: "instagram",
    label: "Instagram",
    value: "@argllsmmn",
    url: "https://instagram.com/argllsmmn",
    icon: "logo-instagram",
  },
  {
    id: "5",
    type: "website",
    label: "Portfolio",
    value: "momonarguelles.dev",
    url: "https://momonarguelles.dev",
    icon: "globe-outline",
  },
  {
    id: "6",
    type: "phone",
    label: "Phone",
    value: "+63 905 565 9054",
    url: "tel:+639055659054",
    icon: "call-outline",
  },
];

const ContactCard: React.FC<{
  item: ContactItem;
  theme: any;
  index: number;
}> = ({ item, theme, index }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      delay: index * 80,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = async () => {
    try {
      const supported = await Linking.canOpenURL(item.url);
      if (supported) {
        await Linking.openURL(item.url);
      } else {
        Alert.alert("Error", `Cannot open ${item.type}`);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to open link");
    }
  };

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ scale: scaleAnim }],
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        style={[
          styles.contactCard,
          {
            backgroundColor: theme.card,
            borderColor: theme.border,
          },
        ]}
      >
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: theme.accentLight },
          ]}
        >
          <Ionicons name={item.icon as any} size={22} color={theme.text} />
        </View>

        <View style={styles.contentContainer}>
          <Text style={[styles.label, { color: theme.secondaryText }]}>
            {item.label}
          </Text>
          <Text
            style={[styles.value, { color: theme.text }]}
            numberOfLines={1}
          >
            {item.value}
          </Text>
        </View>

        <Ionicons
          name="chevron-forward-outline"
          size={20}
          color={theme.secondaryText}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export const ContactSection: React.FC<Props> = ({ theme }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={[styles.title, { color: theme.text }]}>
            Get In Touch
          </Text>
          <View
            style={[styles.titleUnderline, { backgroundColor: theme.accent }]}
          />
        </View>
        <View
          style={[
            styles.responseBadge,
            { backgroundColor: theme.successLight },
          ]}
        >
          <View style={styles.onlineDot} />
          <Text style={[styles.responseText, { color: theme.success }]}>
            Quick Response
          </Text>
        </View>
      </View>

      <Text style={[styles.subtitle, { color: theme.secondaryText }]}>
        Feel free to reach out through any of these channels. I'm always open
        to discussing new projects and opportunities.
      </Text>

      <View style={styles.cardsContainer}>
        {contactData.map((item, index) => (
          <ContactCard
            key={item.id}
            item={item}
            theme={theme}
            index={index}
          />
        ))}
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity
          style={[
            styles.primaryButton,
            { backgroundColor: theme.accent },
          ]}
          onPress={() => Linking.openURL("mailto:arguellesrichmond@gmail.com")}
        >
          <Ionicons name="send" size={18} color="#FFFFFF" />
          <Text style={styles.primaryButtonText}>Send Email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.secondaryButton,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
          onPress={() => Linking.openURL("https://calendar.app.google/Uu4dgYhVxgEzqJ6S9")}
        >
          <Ionicons name="calendar-outline" size={18} color={theme.text} />
          <Text style={[styles.secondaryButtonText, { color: theme.text }]}>
            Schedule Call
          </Text>
        </TouchableOpacity>
      </View>

      {/* Location Info */}
      <View style={[styles.locationCard, { backgroundColor: theme.card }]}>
        <Ionicons
          name="location-outline"
          size={20}
          color={theme.text}
        />
        <View style={styles.locationContent}>
          <Text style={[styles.locationTitle, { color: theme.text }]}>
            Based in Batangas, Philippines
          </Text>
          <Text style={[styles.locationSubtitle, { color: theme.secondaryText }]}>
            Available for remote work worldwide
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: -0.5,
  },
  titleUnderline: {
    width: 40,
    height: 4,
    borderRadius: 2,
    marginTop: 8,
  },
  responseBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 6,
  },
  onlineDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#10B981",
  },
  responseText: {
    fontSize: 11,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 20,
  },
  cardsContainer: {
    gap: 12,
    marginBottom: 20,
  },
  contactCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    gap: 14,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 2,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: -0.2,
  },
  quickActions: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  primaryButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  secondaryButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    gap: 8,
  },
  secondaryButtonText: {
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  locationCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  locationContent: {
    flex: 1,
  },
  locationTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 2,
  },
  locationSubtitle: {
    fontSize: 12,
    fontWeight: "500",
  },
});