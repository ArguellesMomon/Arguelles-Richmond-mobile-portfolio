export const LightTheme = {
  // Backgrounds
  background: "#F8F9FA",
  card: "#FFFFFF",
  cardSecondary: "#F5F7FA",
  
  // Text Colors
  text: "#1A1A2E",
  secondaryText: "#6C757D",
  tertiaryText: "#ADB5BD",
  
  // Accent Colors
  accent: "#0078F8",
  accentLight: "#E3F2FD",
  accentDark: "#0056B3",
  
  // Borders & Dividers
  border: "#E5E7EB",
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
  background: "#0F172A",
  card: "#1E293B",
  cardSecondary: "#334155",
  
  // Text Colors
  text: "#F1F5F9",
  secondaryText: "#94A3B8",
  tertiaryText: "#64748B",
  
  // Accent Colors
  accent: "#3B82F6",
  accentLight: "#1E3A5F",
  accentDark: "#60A5FA",
  
  // Borders & Dividers
  border: "#334155",
  divider: "#475569",
  
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

// Color palette constants (optional - for direct use)
export const Colors = {
  // Brand Colors
  primary: "#0078F8",
  primaryDark: "#0056B3",
  primaryLight: "#E3F2FD",
  
  // Neutral Grays
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray800: "#1F2937",
  gray900: "#111827",
  
  // Semantic
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
  
  // Special
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
};

// Gradient definitions
export const Gradients = {
  primary: ["#0078F8", "#0056B3"],
  secondary: ["#6366F1", "#8B5CF6"],
  success: ["#10B981", "#059669"],
  warm: ["#F59E0B", "#EF4444"],
  cool: ["#3B82F6", "#8B5CF6"],
  dark: ["#1F2937", "#111827"],
};

// Shadow presets
export const Shadows = {
  small: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 8,
  },
  xl: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 12,
  },
};

// Border radius constants
export const BorderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  round: 9999,
};

// Spacing constants
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

// Typography
export const Typography = {
  h1: { fontSize: 32, fontWeight: "700" as const, lineHeight: 40 },
  h2: { fontSize: 28, fontWeight: "700" as const, lineHeight: 36 },
  h3: { fontSize: 24, fontWeight: "700" as const, lineHeight: 32 },
  h4: { fontSize: 20, fontWeight: "600" as const, lineHeight: 28 },
  h5: { fontSize: 18, fontWeight: "600" as const, lineHeight: 24 },
  h6: { fontSize: 16, fontWeight: "600" as const, lineHeight: 22 },
  body: { fontSize: 15, fontWeight: "400" as const, lineHeight: 24 },
  bodyLarge: { fontSize: 16, fontWeight: "400" as const, lineHeight: 26 },
  bodySmall: { fontSize: 14, fontWeight: "400" as const, lineHeight: 20 },
  caption: { fontSize: 12, fontWeight: "500" as const, lineHeight: 16 },
  button: { fontSize: 15, fontWeight: "600" as const, lineHeight: 20 },
};