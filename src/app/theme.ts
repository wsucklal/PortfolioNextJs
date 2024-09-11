import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "gray.100", // Light gray for light mode
        color: props.colorMode === "dark" ? "white" : "gray.800",
      },
    }),
  },
  components: {
    Box: {
      baseStyle: (props: { colorMode: string }) => ({
        bg: props.colorMode === "dark" ? "gray.700" : "gray.50", // Light gray for light mode
      }),
    },
  },
});

export default theme;