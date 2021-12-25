import { colors } from ".";

const layout = {
  spacing: {
    inner: [2, 4, 6, 8, 10, 12, 14, 16],
    outer: [4, 8, 16, 24, 32, 40, 48, 64, 128],
  },
  breakpoints: {
    mobile: 0,
    tablet: 640,
    laptop: 1024,
    desktop: 1280,
  },
  components: {
    button: {
      // style overrides
      default: {},
      contained: { color: "#fff" },
      // size variants
      small: { height: 24, borderRadius: 4 },
      medium: { height: 32, borderRadius: 8 },
      large: { height: 48, borderRadius: 8 },
      // custom variants
      disabled: { background: colors.disabled, color: "#fff !important" },
      containedGradient: {
        background: `linear-gradient(261deg, ${colors.primaryLight}, ${colors.primary})`,
      },
      fixed: { width: 296 },
    },
    chip: {
      // style overrides
      default: {
        borderRadius: 4,
        border: "1px solid transparent",
        padding: "10px 16px 12px",
        ":hover": { border: `1px solid ${colors.primary}` },
        ":active": { backgroundColor: colors.primary, color: "#fff" },
      },
      // size variants
      small: { height: 32, padding: "7px 16px" },
      medium: { height: 40 },
      large: { height: 40 },
      // custom variants
      rounded: { borderRadius: 20 },
    },
    pagination: {
      // style overrides
      default: {
        ":hover": { backgroundColor: colors.primary, color: "#fff" },
        ":focus": { backgroundColor: colors.primary, color: "#fff" },
      },
      previousNext: { color: "#fff", backgroundColor: colors.primary },
      selected: {
        backgroundColor: "transparent",
        borderRadius: "4px 4px 0 0",
        borderBottom: `2px solid ${colors.primary}`,
        ":hover": {
          backgroundColor: colors.primary,
          color: "#fff",
          borderRadius: 4,
        },
        ":focus": {
          backgroundColor: colors.primary,
          color: "#fff",
          borderRadius: 4,
        },
      },
    },
    alert: {
      default: { borderRadius: 8, width: 328 },
      filledInfo: {
        "-webkit-backdrop-filter": "blur(1px)",
        backdropFilter: "blur(1px)",
        boxShadow: `0 7px 14px 0 ${colors.info}`,
      },
      filledSuccess: {
        "-webkit-backdrop-filter": "blur(1px)",
        backdropFilter: "blur(1px)",
        boxShadow: `0 7px 14px 0 ${colors.primary}`,
      },
      filledWarning: {
        "-webkit-backdrop-filter": "blur(1px)",
        backdropFilter: "blur(1px)",
        boxShadow: `0 7px 14px 0 ${colors.warning}`,
      },
      filledError: {
        "-webkit-backdrop-filter": "blur(1px)",
        backdropFilter: "blur(1px)",
        boxShadow: `0 7px 14px 0 ${colors.error}`,
      },
    },
    snackbar: {
      default: { bottom: 16, right: 8 },
    },
  },
};

export default layout;
