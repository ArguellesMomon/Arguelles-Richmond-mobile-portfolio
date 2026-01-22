import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { skills } from "../data/skills";

interface Props {
  theme: any;
}

const SkillBadge: React.FC<{
  skill: any;
  index: number;
  theme: any;
}> = ({ skill, index, theme }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        delay: index * 50,
        friction: 4,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        delay: index * 50,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
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

  // Get icon based on skill name
  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: string } = {
      "React Native": "phone-portrait-outline",
      "React": "logo-react",
      "TypeScript": "logo-javascript",
      "Node.js": "logo-nodejs",
      "Express": "server-outline",
      "Firebase": "flame-outline",
      "REST APIs": "cloud-outline",
      "Git & GitHub": "git-branch-outline",
      "JavaScript": "logo-javascript",
      "MongoDB": "database-outline",
      "PostgreSQL": "server-outline",
      "Docker": "cube-outline",
      "AWS": "cloud-outline",
      "GraphQL": "git-network-outline",
    };
    return iconMap[skillName] || "code-slash-outline";
  };

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ scale: scaleAnim }],
      }}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[
          styles.badge,
          {
            backgroundColor: theme.card,
            borderColor: theme.border,
          },
        ]}
      >
        <View style={[styles.iconContainer, { backgroundColor: theme.accentLight }]}>
          <Ionicons
            name={getSkillIcon(skill.name) as any}
            size={18}
            color={theme.text}
          />
        </View>
        <Text style={[styles.skillText, { color: theme.text }]}>
          {skill.name}
        </Text>
        {skill.level && (
          <View style={styles.levelContainer}>
            <View style={[styles.levelBar, { backgroundColor: theme.border }]}>
              <View
                style={[
                  styles.levelFill,
                  {
                    width: `${skill.level}%`,
                    backgroundColor: theme.accent,
                  },
                ]}
              />
            </View>
            <Text style={[styles.levelText, { color: theme.secondaryText }]}>
              {skill.level}%
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export const SkillsSection: React.FC<Props> = ({ theme }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={[styles.title, { color: theme.text }]}>
            Skills & Expertise
          </Text>
          <View style={[styles.titleUnderline, { backgroundColor: theme.accent }]} />
        </View>
        <View style={[styles.countBadge, { backgroundColor: theme.accentLight }]}>
          <Text style={[styles.countText, { color: theme.text }]}>
            {skills.length}
          </Text>
        </View>
      </View>

      <View style={styles.list}>
        {skills.map((skill, index) => (
          <SkillBadge
            key={typeof skill === 'string' ? skill : skill.name}
            skill={typeof skill === 'string' ? { name: skill } : skill}
            index={index}
            theme={theme}
          />
        ))}
      </View>

      {/* Optional: Skill Categories */}
      <View style={styles.categoriesContainer}>
        <View style={styles.categoryItem}>
          <Ionicons name="code-slash" size={16} color={theme.accent} />
          <Text style={[styles.categoryText, { color: theme.secondaryText }]}>
            Frontend: 3 skills
          </Text>
        </View>
        <View style={styles.categoryItem}>
          <Ionicons name="server" size={16} color={theme.accent} />
          <Text style={[styles.categoryText, { color: theme.secondaryText }]}>
            Backend: 2 skills
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
    marginBottom: 20,
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
  countBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  countText: {
    fontSize: 14,
    fontWeight: "700",
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  badge: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    minWidth: "47%",
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  skillText: {
    fontSize: 14,
    fontWeight: "600",
    flex: 1,
    letterSpacing: 0.2,
  },
  levelContainer: {
    alignItems: "flex-end",
    gap: 4,
  },
  levelBar: {
    width: 40,
    height: 4,
    borderRadius: 2,
    overflow: "hidden",
  },
  levelFill: {
    height: "100%",
    borderRadius: 2,
  },
  levelText: {
    fontSize: 10,
    fontWeight: "600",
  },
  categoriesContainer: {
    marginTop: 20,
    flexDirection: "row",
    gap: 16,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: "500",
  },
});