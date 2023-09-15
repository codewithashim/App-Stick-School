import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/Layouts/DashboardLayout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import logout from "@/src/Shared/Logout/Logout";
import { Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import useStatistic from "@/src/Hooks/useStatistic";

export default function Index() {
  const router = useRouter();
  const { statisticData } = useStatistic();

  useEffect(() => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        logout();
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <FullLayout>
        <div className="grid gap-4 md:grid-cols-3">
          {statisticData &&
            statisticData?.map((statistic) => {
              return (
                <Card
                  bordered={false}
                  style={{
                    width: 250,
                  }}
                >
                  <div className="flex flex-col items-center justify-center gap-4">
                    <UserOutlined className="text-[2rem]" />
                    <p className="text-[1.5rem] ">{statistic?.title} </p>
                    <p className="text-[1.5rem]">Total : {statistic?.counte} </p>
                    <p className="text-[1.5rem]">{statistic?.status} </p>
                  </div>
                </Card>
              );
            })}
        </div>
      </FullLayout>
    </ThemeProvider>
  );
}
