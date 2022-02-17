// Validate user input and send login request
const handleSignupSubmit = async (event) => {
  event.preventDefault();
  try {
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();
    const confirmPassword = document
      .querySelector("#confirm-password")
      .value.trim();
    if (!username || !password) {
      alert("You must provide a username and password.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords to not match.");
      return;
    }
    const response = await fetch("/api/patient/signup", {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    if (response.ok) {
      document.location.replace('/patient');
    } 
    window.location.replace("/patient/update");
  } catch (error) {
    console.log(error);
  }
};
document
  .querySelector(".signup-form")
  .addEventListener("submit", handleSignupSubmit);