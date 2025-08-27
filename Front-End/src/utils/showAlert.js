import Swal from "sweetalert2";

export const showSuccessAlert = (isLogin) =>
  Swal.fire({
    icon: "success",
    title: isLogin ? "Welcome back!" : "Registration successful!",
    text: isLogin
      ? "You have successfully logged in."
      : "You have successfully registered.",
    confirmButtonText: "OK",
    confirmButtonColor: "#3085d6",
  });

export const showErrorAlert = (text) =>
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text,
    confirmButtonText: "OK",
    confirmButtonColor: "#d33",
  });

export const showEmailExistsAlert = () =>
  Swal.fire({
    icon: "error",
    title: "Oops",
    text: "This email is already registered. Please log in or use a different email.",
    confirmButtonText: "OK",
    confirmButtonColor: "#d33",
  });

// export const showAddItemSuccessAlert = (msg) =>
//   Swal.fire({
//     icon: "success",
//     title: "Item Added",
//     text: msg || "The item has been successfully added.",
//     confirmButtonText: "OK",
//     confirmButtonColor: "#3085d6",
//   });

// export const showAddItemErrorAlert = () =>
//   Swal.fire({
//     icon: "error",
//     title: "Oops",
//     text: "There was an error adding the item. Please try again.",
//     confirmButtonText: "OK",
//     confirmButtonColor: "#d33",
//   });

// export const showAddItemErrorAlertLogin = async (message) => {
//   await Swal.fire({
//     icon: "error",
//     title: "Login Required",
//     text: message,
//     confirmButtonText: "OK",
//     confirmButtonColor: "#d33",
//   });
// };