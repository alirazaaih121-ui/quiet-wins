import Swal from "sweetalert2";

function requireLogin() {
  const user = JSON.parse(localStorage.getItem("qw_user") || "null");
  if (!user) {
    Swal.fire({
      icon: "info",
      title: "Login Required",
      text: "Please login or create an account to save your data.",
      showCancelButton: true,
      confirmButtonText: "Login",
      cancelButtonText: "Signup",
    }).then(res => {
      if (res.isConfirmed) {
        document.getElementById("loginModalBtn").click();
      } else {
        document.getElementById("signupModalBtn").click();
      }
    });
    return false;
  }
  return true;
}
