import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Add from "./componrnts/Add";
import Feed from "./componrnts/Feed";
import Navbar from "./componrnts/Navbar";
import Rightbar from "./componrnts/Rightbar";
import Sidebar from "./componrnts/Sidebar";

function App() {
const [mode, setMode] = useState("light");
const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar setMode={setMode} mode={mode}/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode}/>
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  </ThemeProvider>
  );
}

export default App;
