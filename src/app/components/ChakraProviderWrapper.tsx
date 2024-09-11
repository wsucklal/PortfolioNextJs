// src/components/ChakraProviderWrapper.tsx
"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "../theme";

const ChakraProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
};

export default ChakraProviderWrapper;
