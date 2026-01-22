export const LightTheme = {
  // Backgrounds
  background: "#F8F9FA",
  card: "#FFFFFF",
  cardSecondary: "#F5F7FA",
  
  // Text Colors
  text: "#000000",
  secondaryText: "#4f4f4f",
  tertiaryText: "#ADB5BD",
  
  // Accent Colors
  accent: "#000000",
  accentLight: "#ececec",
  accentDark: "#000000",
  
  // Borders & Dividers
  border: "#b6b6b6",
  divider: "#DEE2E6",
  
  // Semantic Colors
  success: "#10B981",
  successLight: "#D1FAE5",
  warning: "#F59E0B",
  warningLight: "#FEF3C7",
  error: "#EF4444",
  errorLight: "#FEE2E2",
  info: "#3B82F6",
  infoLight: "#DBEAFE",
  
  // Shadows
  shadow: "rgba(0, 0, 0, 0.08)",
  shadowMedium: "rgba(0, 0, 0, 0.12)",
  shadowHeavy: "rgba(0, 0, 0, 0.16)",
  
  // Overlays
  overlay: "rgba(0, 0, 0, 0.5)",
  overlayLight: "rgba(0, 0, 0, 0.3)",
};

export const DarkTheme = {
  // Backgrounds
  background: "#232323",
  card: "#000000",
  cardSecondary: "#ff0000",
  
  // Text Colors
  text: "#F1F5F9",
  secondaryText: "#767676",
  tertiaryText: "#333333",
  
  // Accent Colors
  accent: "#515151",
  accentLight: "#292929",
  accentDark: "#000000",
  
  // Borders & Dividers
  border: "#333333",
  divider: "#000000",
  
  // Semantic Colors
  success: "#10B981",
  successLight: "#064E3B",
  warning: "#F59E0B",
  warningLight: "#78350F",
  error: "#EF4444",
  errorLight: "#7F1D1D",
  info: "#3B82F6",
  infoLight: "#1E3A8A",
  
  // Shadows
  shadow: "rgba(0, 0, 0, 0.3)",
  shadowMedium: "rgba(0, 0, 0, 0.4)",
  shadowHeavy: "rgba(0, 0, 0, 0.5)",
  
  // Overlays
  overlay: "rgba(0, 0, 0, 0.7)",
  overlayLight: "rgba(0, 0, 0, 0.5)",
};

// Type definition for TypeScript
export type Theme = typeof LightTheme;

// Helper function to get theme
export const getTheme = (isDark: boolean): Theme => {
  return isDark ? DarkTheme : LightTheme;
};

