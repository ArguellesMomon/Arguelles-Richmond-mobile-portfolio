import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  theme: any;
}

const { width } = Dimensions.get("window");

export const ProfileSection: React.FC<Props> = ({ theme }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  const [selectedStat, setSelectedStat] = useState<number | null>(null);

  useEffect(() => {
    // Entrance animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    // Continuous pulse animation for availability dot
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Subtle rotation animation for status badge
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const handleStatPress = (index: number) => {
    setSelectedStat(index);
    setTimeout(() => setSelectedStat(null), 2000);
  };

  const handleDownloadCV = () => {
    Linking.openURL("https://yourwebsite.com/cv.pdf");
  };

  const handleHireMe = () => {
    Linking.openURL("mailto:arguellesrichmond@gmail.com?subject=Let's Work Together");
  };

  const stats = [
    { number: "3+", label: "Years", icon: "calendar-outline",  detail: "Experience" },
    { number: "10+", label: "Projects", icon: "briefcase-outline", detail: "Completed" },
  ];

  const quickLinks = [
    { icon: "logo-github", url: "https://github.com/ArguellesMomon", color: "#333" },
    { icon: "logo-linkedin", url: "https://www.linkedin.com/in/richmond-arguelles/", color: "#0077B5" },
    { icon: "logo-instagram", url: "https://instagram.com/argllsmmn", color: "#1DA1F2" },
    { icon: "mail-outline", url: "mailto:arguellesrichmond@gmail.com", color: "#EA4335" },
  ];

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      {/* Background Gradient Effect */}
      <View style={[styles.gradientBackground, { backgroundColor: theme.accentLight }]} />

      {/* Profile Image with Border and Shadow */}
      <Animated.View
        style={[
          styles.imageWrapper,
          {
            borderColor: theme.accent,
            shadowColor: theme.accent,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Image
          source={require("../../assets/profile.jpg")}
          style={styles.image}
        />
        <Animated.View
          style={[
            styles.statusBadge,
            { backgroundColor: theme.accent, transform: [{ rotate: spin }] },
          ]}
        >
          <View style={styles.statusDot} />
        </Animated.View>
        
        {/* Profile Border Decoration */}
        <View style={[styles.decorativeRing, { borderColor: theme.accent }]} />
      </Animated.View>

      {/* Name with Verified Badge */}
      <View style={styles.nameContainer}>
        <Text style={[styles.name, { color: theme.text }]}>Momon Arguelles</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Ionicons
            name="checkmark-circle"
            size={24}
            color={theme.accent}
            style={styles.verifiedIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Role/Title with Icon */}
      <View style={[styles.roleContainer, { backgroundColor: theme.accentLight }]}>
        <Ionicons name="code-slash" size={16} color={theme.accent} />
        <Text style={[styles.role, { color: theme.accent }]}>
          Developer
        </Text>
        <View style={[styles.proTag, { backgroundColor: theme.accent }]}>
          <Text style={styles.proText}>AMATEUR</Text>
        </View>
      </View>

      {/* Quick Social Links */}
      <View style={styles.socialLinks}>
        {quickLinks.map((link, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.socialButton, { backgroundColor: theme.card }]}
            onPress={() => Linking.openURL(link.url)}
            activeOpacity={0.7}
          >
            <Ionicons name={link.icon as any} size={20} color={theme.accent} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Bio with Typewriter Effect */}
      <Text style={[styles.bio, { color: theme.secondaryText }]}>
        Focused on mobile and web solutions using modern JavaScript frameworks.
        Passionate about creating exceptional user experiences. 🚀
      </Text>

      {/* Interactive Stats Row */}
      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.statItem,
              selectedStat === index && {
                backgroundColor: theme.accentLight,
                borderRadius: 12,
                padding: 8,
              },
            ]}
            onPress={() => handleStatPress(index)}
            activeOpacity={0.7}
          >
            <View style={[styles.statIconContainer, { backgroundColor: theme.accentLight }]}>
              <Ionicons name={stat.icon as any} size={48} color={theme.accent} />
            </View>
            <Text style={[styles.statNumber, { color: theme.accent }]}>
              {stat.number}
            </Text>
            <Text style={[styles.statLabel, { color: theme.secondaryText }]}>
              {stat.label}
            </Text>
            {selectedStat === index && (
              <Text style={[styles.statDetail, { color: theme.accent }]}>
                {stat.detail}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Divider */}
      <View style={[styles.divider, { backgroundColor: theme.border }]} />

      {/* Skills Highlight */}
      <View style={styles.skillsPreview}>
        <Text style={[styles.skillsTitle, { color: theme.text }]}>
          Core Expertise
        </Text>
        <View style={styles.skillsTags}>
          {["React", "React Native", "TypeScript", "Node.js", "UI/UX"].map((skill, index) => (
            <View
              key={index}
              style={[styles.skillTag, { backgroundColor: theme.card, borderColor: theme.border }]}
            >
              <Ionicons name="sparkles" size={12} color={theme.accent} />
              <Text style={[styles.skillTagText, { color: theme.text }]}>
                {skill}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* CTA Buttons */}
      <View style={styles.ctaContainer}>
        <TouchableOpacity
          style={[styles.primaryButton, { backgroundColor: theme.accent }]}
          onPress={handleHireMe}
          activeOpacity={0.8}
        >
          <Ionicons name="rocket" size={18} color="#FFFFFF" />
          <Text style={styles.primaryButtonText}>Hire Me</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.secondaryButton,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
          onPress={handleDownloadCV}
          activeOpacity={0.8}
        >
          <Ionicons name="download-outline" size={18} color={theme.accent} />
          <Text style={[styles.secondaryButtonText, { color: theme.accent }]}>
            Download CV
          </Text>
        </TouchableOpacity>
      </View>

      {/* Availability Status with Pulse */}
      <TouchableOpacity
        style={[styles.availabilityBadge, { backgroundColor: theme.card, borderColor: theme.border }]}
        activeOpacity={0.9}
      >
        <Animated.View
          style={[
            styles.availabilityDot,
            { transform: [{ scale: pulseAnim }] },
          ]}
        />
        <View style={styles.availabilityContent}>
          <Text style={[styles.availabilityText, { color: theme.text }]}>
            Available for new opportunities
          </Text>
          <Text style={[styles.availabilitySubtext, { color: theme.secondaryText }]}>
            Remote & On-site
          </Text>
        </View>
      </TouchableOpacity>

      {/* Location Badge */}
      <View style={styles.locationBadge}>
        <Ionicons name="location" size={14} color={theme.accent} />
        <Text style={[styles.locationText, { color: theme.secondaryText }]}>
          Batangas, Philippines
        </Text>
        <View style={[styles.locationDot, { backgroundColor: theme.success }]} />
        <Text style={[styles.locationStatus, { color: theme.success }]}>
          GMT+8
        </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
    position: "relative",
  },
  gradientBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    opacity: 0.1,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  imageWrapper: {
    position: "relative",
    borderWidth: 4,
    borderRadius: 75,
    padding: 4,
    marginBottom: 16,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  decorativeRing: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderStyle: "dashed",
    top: -10,
    left: -10,
    opacity: 0.3,
  },
  statusBadge: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#FFFFFF",
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 30,
    fontWeight: "800",
    letterSpacing: -0.8,
  },
  verifiedIcon: {
    marginLeft: 8,
  },
  roleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 24,
    marginBottom: 16,
    gap: 8,
  },
  role: {
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  proTag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginLeft: 4,
  },
  proText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  socialLinks: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  socialButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bio: {
    textAlign: "center",
    fontSize: 15,
    lineHeight: 24,
    maxWidth: 360,
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  statIconContainer: {
    width: 80,
    height: 0,
    borderRadius: 189,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: -1,
  },
  statLabel: {
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  statDetail: {
    fontSize: 10,
    fontWeight: "600",
    marginTop: 2,
  },
  divider: {
    width: "100%",
    height: 1,
    marginBottom: 20,
  },
  skillsPreview: {
    width: "100%",
    marginBottom: 20,
  },
  skillsTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  skillsTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
  },
  skillTag: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    gap: 6,
  },
  skillTagText: {
    fontSize: 13,
    fontWeight: "600",
  },
  ctaContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 12,
    marginBottom: 20,
  },
  primaryButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 14,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  secondaryButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 14,
    borderWidth: 2,
    gap: 8,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  availabilityBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 14,
    gap: 12,
    width: "100%",
    borderWidth: 1,
    marginBottom: 12,
  },
  availabilityDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#10B981",
  },
  availabilityContent: {
    flex: 1,
  },
  availabilityText: {
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  availabilitySubtext: {
    fontSize: 11,
    fontWeight: "500",
    marginTop: 2,
  },
  locationBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  locationText: {
    fontSize: 13,
    fontWeight: "500",
  },
  locationDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
  },
  locationStatus: {
    fontSize: 12,
    fontWeight: "600",
  },
});