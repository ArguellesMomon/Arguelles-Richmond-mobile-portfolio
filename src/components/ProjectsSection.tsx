import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
  Animated,
  Image,
  Modal,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { projects } from "../data/projects";

interface Props {
  theme: any;
}

const { width } = Dimensions.get("window");

const ProjectModal: React.FC<{
  visible: boolean;
  project: any;
  theme: any;
  onClose: () => void;
}> = ({ visible, project, theme, onClose }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  if (!project) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Animated.View
        style={[styles.modalOverlay, { opacity: fadeAnim }]}
      >
        <TouchableOpacity
          style={styles.modalBackdrop}
          activeOpacity={1}
          onPress={onClose}
        />
        <View style={[styles.modalContent, { backgroundColor: theme.card }]}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close-circle" size={32} color={theme.text} />
          </TouchableOpacity>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Project Image */}
            {project.image && (
              <Image
                source={typeof project.image === 'string' ? { uri: project.image } : project.image}
                style={styles.modalImage}
                resizeMode="cover"
              />
            )}

            {/* Project Title */}
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: theme.text }]}>
                {project.title}
              </Text>
              {project.featured && (
                <View style={[styles.featuredBadge, { backgroundColor: theme.warning }]}>
                  <Ionicons name="star" size={14} color="#FFFFFF" />
                  <Text style={styles.featuredText}>Featured</Text>
                </View>
              )}
            </View>

            {/* Full Description */}
            <Text style={[styles.modalDescription, { color: theme.secondaryText }]}>
              {project.fullDescription || project.description}
            </Text>

            {/* Key Features */}
            {project.features && (
              <View style={styles.featuresSection}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>
                  Key Features
                </Text>
                {project.features.map((feature: string, idx: number) => (
                  <View key={idx} style={styles.featureItem}>
                    <Ionicons name="checkmark-circle" size={20} color={theme.success} />
                    <Text style={[styles.featureText, { color: theme.text }]}>
                      {feature}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            {/* Tech Stack */}
            <View style={styles.techSection}>
              <Text style={[styles.sectionTitle, { color: theme.text }]}>
                Technologies Used
              </Text>
              <View style={styles.techStackContainer}>
                {project.techStack.map((tech: string, idx: number) => (
                  <View
                    key={idx}
                    style={[styles.techBadge, { backgroundColor: theme.accentLight }]}
                  >
                    <Text style={[styles.techText, { color: theme.accent }]}>
                      {tech}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Project Stats */}
            {project.stats && (
              <View style={styles.statsSection}>
                {project.stats.duration && (
                  <View style={styles.statItem}>
                    <Ionicons name="time-outline" size={20} color={theme.accent} />
                    <Text style={[styles.statText, { color: theme.secondaryText }]}>
                      {project.stats.duration}
                    </Text>
                  </View>
                )}
                {project.stats.role && (
                  <View style={styles.statItem}>
                    <Ionicons name="person-outline" size={20} color={theme.accent} />
                    <Text style={[styles.statText, { color: theme.secondaryText }]}>
                      {project.stats.role}
                    </Text>
                  </View>
                )}
              </View>
            )}

            {/* Action Buttons */}
            <View style={styles.modalActions}>
              {project.github && (
                <TouchableOpacity
                  style={[styles.modalButton, { backgroundColor: theme.background }]}
                  onPress={() => Linking.openURL(project.github)}
                >
                  <Ionicons name="logo-github" size={20} color={theme.text} />
                  <Text style={[styles.modalButtonText, { color: theme.text }]}>
                    View Code
                  </Text>
                </TouchableOpacity>
              )}
              {project.demo && (
                <TouchableOpacity
                  style={[styles.modalButton, { backgroundColor: theme.accent }]}
                  onPress={() => Linking.openURL(project.demo)}
                >
                  <Ionicons name="play-circle" size={20} color="#FFFFFF" />
                  <Text style={[styles.modalButtonText, { color: "#FFFFFF" }]}>
                    Live Demo
                  </Text>
                </TouchableOpacity>
              )}
              {project.figma && (
                <TouchableOpacity
                  style={[styles.modalButton, { backgroundColor: "#F24E1E" }]}
                  onPress={() => Linking.openURL(project.figma)}
                >
                  <Ionicons name="color-palette" size={20} color="#FFFFFF" />
                  <Text style={[styles.modalButtonText, { color: "#FFFFFF" }]}>
                    Figma
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </View>
      </Animated.View>
    </Modal>
  );
};

const ProjectCard: React.FC<{ item: any; theme: any; index: number; onPress: () => void }> = ({
  item,
  theme,
  index,
  onPress,
}) => {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;
  const [expanded, setExpanded] = useState(false);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const openLink = (url?: string) => {
    if (url) {
      Linking.openURL(url).catch((err) =>
        console.error("Failed to open URL:", err)
      );
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <Animated.View
      style={[
        styles.card,
        {
          backgroundColor: theme.card,
          borderColor: theme.border,
          shadowColor: theme.shadow,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      {/* Project Image */}
      {item.image && (
        <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
          <Image
            source={typeof item.image === 'string' ? { uri: item.image } : item.image}
            style={styles.projectImage}
            resizeMode="cover"
          />
          {item.featured && (
            <View style={[styles.featuredTag, { backgroundColor: theme.warning }]}>
              <Ionicons name="star" size={12} color="#FFFFFF" />
              <Text style={styles.featuredTagText}>Featured</Text>
            </View>
          )}
        </TouchableOpacity>
      )}

      {/* Project Header */}
      <View style={styles.cardHeader}>
        <View style={[styles.numberBadge, { backgroundColor: theme.accent }]}>
          <Text style={styles.numberText}>#{index + 1}</Text>
        </View>
        <Text style={[styles.cardTitle, { color: theme.text }]} numberOfLines={1}>
          {item.title}
        </Text>
      </View>

      {/* Description */}
      <Text style={[styles.description, { color: theme.secondaryText }]}>
        {expanded ? item.description : truncateText(item.description, 100)}
      </Text>

      {item.description.length > 100 && (
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text style={[styles.seeMoreText, { color: theme.accent }]}>
            {expanded ? "See less" : "See more..."}
          </Text>
        </TouchableOpacity>
      )}

      {/* Tech Stack */}
      <View style={styles.techStackContainer}>
        {item.techStack.slice(0, 3).map((tech: string, idx: number) => (
          <View
            key={idx}
            style={[styles.techBadge, { backgroundColor: theme.accentLight }]}
          >
            <Text style={[styles.techText, { color: theme.accent }]}>
              {tech}
            </Text>
          </View>
        ))}
        {item.techStack.length > 3 && (
          <View style={[styles.techBadge, { backgroundColor: theme.border }]}>
            <Text style={[styles.techText, { color: theme.secondaryText }]}>
              +{item.techStack.length - 3}
            </Text>
          </View>
        )}
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        {(item.github || item.demo || item.link) ? (
          <>
            {item.github && (
              <TouchableOpacity
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={() => openLink(item.github)}
                style={[
                  styles.actionButton,
                  { backgroundColor: theme.background },
                ]}
                activeOpacity={0.8}
              >
                <Ionicons name="logo-github" size={16} color={theme.text} />
                <Text style={[styles.buttonText, { color: theme.text }]}>
                  Code
                </Text>
              </TouchableOpacity>
            )}

            {item.demo && (
              <TouchableOpacity
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={() => openLink(item.demo)}
                style={[styles.actionButton, { backgroundColor: theme.accent }]}
                activeOpacity={0.8}
              >
                <Ionicons name="play-circle-outline" size={16} color="#FFFFFF" />
                <Text style={[styles.buttonText, { color: "#FFFFFF" }]}>
                  Demo
                </Text>
              </TouchableOpacity>
            )}

            {item.figma && (
              <TouchableOpacity
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={() => openLink(item.figma)}
                style={[styles.actionButton, { backgroundColor: "#F24E1E" }]}
                activeOpacity={0.8}
              >
                <Ionicons name="play-circle-outline" size={16} color="#FFFFFF" />
                <Text style={[styles.buttonText, { color: "#FFFFFF" }]}>
                  Figma
                </Text>
              </TouchableOpacity>
            )}
          </>
        ) : null}

        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={onPress}
          style={[
            styles.actionButton,
            {
              backgroundColor: item.github || item.demo ? theme.background : theme.accent,
              flex: (item.github || item.demo) ? 0 : 1,
            },
          ]}
          activeOpacity={0.8}
        >
          <Ionicons
            name="information-circle-outline"
            size={16}
            color={(item.github || item.demo) ? theme.text : "#FFFFFF"}
          />
          <Text
            style={[
              styles.buttonText,
              { color: (item.github || item.demo) ? theme.text : "#FFFFFF" },
            ]}
          >
            Details
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export const ProjectsSection: React.FC<Props> = ({ theme }) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleProjectPress = (project: any) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={[styles.title, { color: theme.text }]}>
            Featured Projects
          </Text>
          <View style={[styles.titleUnderline, { backgroundColor: theme.accent }]} />
        </View>
        <View style={[styles.countBadge, { backgroundColor: theme.accentLight }]}>
          <Text style={[styles.countText, { color: theme.accent }]}>
            {projects.length}
          </Text>
        </View>
      </View>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ProjectCard
            item={item}
            theme={theme}
            index={index}
            onPress={() => handleProjectPress(item)}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        contentContainerStyle={styles.listContent}
      />

      <ProjectModal
        visible={modalVisible}
        project={selectedProject}
        theme={theme}
        onClose={handleCloseModal}
      />
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
  listContent: {
    paddingBottom: 8,
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    overflow: "hidden",
  },
  projectImage: {
    width: "100%",
    height: 180,
    backgroundColor: "#E5E7EB",
  },
  featuredTag: {
    position: "absolute",
    top: 12,
    right: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 4,
  },
  featuredTagText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    paddingBottom: 12,
  },
  numberBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  numberText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    flex: 1,
    letterSpacing: -0.3,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    paddingHorizontal: 18,
  },
  seeMoreText: {
    fontSize: 13,
    fontWeight: "600",
    paddingHorizontal: 18,
    paddingTop: 6,
    paddingBottom: 12,
  },
  techStackContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  techBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  techText: {
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    padding: 18,
    paddingTop: 6,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    gap: 6,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "flex-end",
  },
  modalBackdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: "90%",
    paddingBottom: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 16,
  },
  modalImage: {
    width: "100%",
    height: 240,
    backgroundColor: "#E5E7EB",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: "700",
    flex: 1,
    letterSpacing: -0.5,
  },
  featuredBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 4,
  },
  featuredText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
  modalDescription: {
    fontSize: 15,
    lineHeight: 24,
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  featuresSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },
  featureText: {
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
  },
  techSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  statsSection: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 20,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  statText: {
    fontSize: 14,
    fontWeight: "500",
  },
  modalActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    paddingHorizontal: 20,
    marginTop: 8,
  },
  modalButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  modalButtonText: {
    fontSize: 15,
    fontWeight: "600",
  },
});