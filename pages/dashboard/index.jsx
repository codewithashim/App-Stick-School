import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/Layouts/DashboardLayout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import logout from "@/src/Shared/Logout/Logout";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        logout();
        router.push("/");
      }
    } catch (error) {
        console.log(error)
    }
  }, []);

  return (
      <ThemeProvider theme={theme}>
        <FullLayout>
            Hello 
        </FullLayout>
      </ThemeProvider>
  );
}
