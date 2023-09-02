import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/Layouts/DashboardLayout";

export default function Index() {
  return (
      <ThemeProvider theme={theme}>
        <FullLayout>
            Hello 
        </FullLayout>
      </ThemeProvider>
  );
}
