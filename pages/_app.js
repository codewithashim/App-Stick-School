import { useEffect, useState } from "react";
import "@/styles/globals.scss";
import UserContext from "@/src/Context/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PreLoader from "@/src/Shared/PreLoader/PreLoader";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [loader]);

  return (
    <>
      {loader && <PreLoader />}
      <QueryClientProvider client={queryClient}>
        <UserContext>
          <Component {...pageProps} />
        </UserContext>
      </QueryClientProvider>
    </>
  );
}
