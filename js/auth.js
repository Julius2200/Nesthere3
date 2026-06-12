function toggleAuth() {
  const extra = document.getElementById('auth-extra');
  const title = document.getElementById('auth-title');
  if (extra.classList.contains('hidden')) {
    extra.classList.remove('hidden');
    title.textContent = 'Create Account';
  } else {
    extra.classList.add('hidden');
    title.textContent = 'Sign In';
  }
}

// ══ SIGN-IN GATE ══
// Sign-in is never shown up front. It is only requested when a signed-in
// action is attempted: listing a property, or contacting an agent.
// ══ SIGN-IN ══
// Sign-in only ever appears in two contexts:
//   1) a user (buyer/renter) choosing to contact an agent, and
//   2) an agent signing in to their NestHere account to list/manage property.
let isSignedIn = false;
let isAgent = false;
let pendingAction = null;

function requireSignIn(reason, action, title) {
  if (isSignedIn) { action && action(); return; }
  pendingAction = action || null;
  const sub = document.getElementById('auth-sub');
  if (sub) sub.textContent = reason || 'Sign in to continue.';
  document.getElementById('auth-title').textContent = title || 'Sign in';
  document.getElementById('auth-extra').classList.add('hidden');
  showPage('auth');
}

function completeSignIn() {
  isSignedIn = true;
  const act = pendingAction;
  pendingAction = null;
  if (act) act();
  else showPage('home');
}

// Agent sign-in — for agents who have a NestHere account.
function agentSignIn() {
  if (isSignedIn) { isAgent = true; showPage('admin'); return; }
  requireSignIn('Sign in to your NestHere agent account to add and manage your listings.',
    () => { isAgent = true; showPage('admin'); }, 'Agent sign in');
}

// Consumer sign-in opened from the menu bar.
function signIn() {
  requireSignIn('Welcome back \u2014 find your perfect home.', () => showPage('dashboard'), 'Sign In');
}

// Listing a property is an agent-account action.
function managePassport() {
  requireSignIn('Sign in to your agent account to add or edit Property Passport records.',
    () => { isAgent = true; showPage('passport'); showToast('✓ You can now add or edit Passport records'); },
    'Agent sign in');
}

(function(){
  //retrieve user data stored during login
  const token = localStorage.getItem("authToken");
  const userRole = localStorage.getItem("userRole");

  //if no token exists, immediately bounce them to login
  if(!token){
    alert('Access denied. Please Login first');
    window.location.href = '/login.html';
    return;
  }
})

function loginRedirect(){
  if (userRole === 'admin'){
    window.location.href = `/admin/dashboard.html?id=${id}`;
    return;
  } else if (userRole === 'agent') {
    window.location.href = `/agent/dashboard.html?id=${id}`;
    return;
  } else {
    window.location.href = `/user/dashboard.html?id=${id}`;
    return;
  }
}


