// import { useRouter } from "next/router";
// import React, { useContext, useEffect } from "react";
// import useAdmin from "../../Hooks/useAdmin";
// import { AuthContext } from "@/src/Context/UserContext";

// const AdminAccessRoute = ({ children }) => {
//   const { user } = useContext(AuthContext);
//   const [isAdmin, isAdminLoading] = useAdmin();
//   const router = useRouter();

//   useEffect(() => {
//    try {
//     if (!user?.email && !isAdmin && !isAdminLoading) {
//       router.push("/auth/login");
//     }
//    } catch (error) {
//       console.log(error)
//    }
//   }, [ isAdmin, isAdminLoading, user]);

//   if (isAdminLoading) {
//     return (
//       <div className="flex items-center justify-center w-full text-white my-60">
//         Loading...
//       </div>
//     );
//   }

//   return <>{user?.email && isAdmin ? children : null}</>;
// };

// export default AdminAccessRoute;

import React from 'react';

const AdminAccessRoute = () => {
  return (
    <section>
        <h1> AdminAccessRoute</h1>
    </section>
  );
};

export default AdminAccessRoute;