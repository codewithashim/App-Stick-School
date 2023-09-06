const logout = () => {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
   
  };
  
  export default logout;