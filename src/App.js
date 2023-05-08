import React, { createContext, useMemo, useState } from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import { ThemeProvider, createTheme } from "@mui/material";
export const ColorModeContext = createContext({ toggleColorMode: () => {} });
const App = () => {
	const [mode, setMode] = useState("light");
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	return( <ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
      <PortfolioContainer />
			</ThemeProvider>
		</ColorModeContext.Provider>
  )
};

export default App;
