const USERS_DB = [
    {email: "admin123@gmail.com", password: "password123", role: "admin", name: 'Jonathan'},
    {username: "agent123@gmail.com", password: 'password123', role: 'agent', name: 'Chris'},
    {username: "user123@gmail.com", password: 'password123', role: 'user', name: "Frank"}
];


//Login and redirect code
function loginUser(email, password){
  const user = USERS_DB.find(u => u.email === email && u.password === password );

  if (user){
    //store user data(excluding password)
    sessionStorage.setItem('currentUser', JSON.stringify({
      email: user.email,
      role: user.role
    }));

    //redirect based on role
    if (user.role === 'admin') window.location.href=`/admin/dashboard.html?name=${user.name}`;
    else if (user.role === 'agent') window.location.href=`/agents/dashboard.html?name=${user.name}`;
    else window.location.href=`/users/dashboard.html?name=${user.name}`
  } else {
    alert('invalid credentials!');
  }
}

function login() {
    let email = document.querySelector('.mail').value;
    let password = document.querySelector('.password').value;

    loginUser(email, password);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  //get form data entry
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
});