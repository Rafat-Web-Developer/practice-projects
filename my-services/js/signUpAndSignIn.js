function checkUserLogin() {
  let findUser = {};
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users) {
    findUser = users.find((usr) => usr.isLogin == 1);
    if (findUser) {
      document
        .getElementById("signInAndSignUpFormID")
        .classList.remove("showSignInAndSignUpForm");
      document.getElementById("loginUserID").classList.add("showLogin");
      document.getElementById("username").innerText = findUser?.name;
      document.getElementById("useremail").innerText = findUser?.email;
    } else {
      document.getElementById("loginUserID").classList.remove("showLogin");
      document
        .getElementById("signInAndSignUpFormID")
        .classList.add("showSignInAndSignUpForm");
    }
  }
}
checkUserLogin();

function showSignInForm() {
  document.getElementById("showSignUpForm").classList.remove("showForm");
  document.getElementById("showSignInForm").classList.add("showForm");
}
function showSignUpForm() {
  document.getElementById("showSignInForm").classList.remove("showForm");
  document.getElementById("showSignUpForm").classList.add("showForm");
}

const signupform = document.getElementById("signup");
const signinform = document.getElementById("signin");

signupform.addEventListener("submit", (event) => {
  event.preventDefault();

  let users = [];
  let findUser = {};
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;

  if (password.length > 3) {
    users = JSON.parse(localStorage.getItem("users")) || [];
    if (users) {
      findUser = users.find((usr) => usr.email == email);
    }
    if (findUser) {
      alert("Already have an account");
      return;
    } else {
      const user = { name, email, password, isLogin: 0 };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      signupform.reset();
      alert("User created successfully!");
    }
  } else {
    alert("Password must have at least 4 charecters");
  }
});

signinform.addEventListener("submit", (event) => {
  event.preventDefault();

  let users = [];
  const email = event.target.email.value;
  const password = event.target.password.value;

  users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    const findUser = users.find(
      (usr) => usr.email == email && usr.password == password
    );
    if (findUser) {
      let usersCollection = [];
      findUser.isLogin = 1;
      usersCollection = [...users];
      localStorage.setItem("users", JSON.stringify(usersCollection));
      checkUserLogin();
    } else {
      alert("Please provide a valid email and password");
    }
  } else {
    alert("Please create a new account");
  }
  signinform.reset();
});

function logout() {
  let findUser = {};
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users) {
    findUser = users.find((usr) => usr.isLogin == 1);
    if (findUser) {
      let usersCollection = [];
      findUser.isLogin = 0;
      usersCollection = [...users];
      localStorage.setItem("users", JSON.stringify(usersCollection));
      checkUserLogin();
    }
  }
}
