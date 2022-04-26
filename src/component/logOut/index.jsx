const LogOut = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
  localStorage.removeItem("userID");
  localStorage.removeItem("isSeller");
  // localStorage.removeItem("sellerData");
  localStorage.removeItem("saveSeller");
  window.location.reload();
};

export default LogOut;
