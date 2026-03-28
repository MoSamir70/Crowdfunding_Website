// js/auth.js

const API_BASE = "http://localhost:3000";

async function apiRequest(method, endpoint, data = null) {
  const options = { method, headers: { "Content-Type": "application/json" }, };
  if (data) options.body = JSON.stringify(data);

  const res = await fetch(`${API_BASE}${endpoint}`, options);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function loginUser(email, password) {
  try {
    const users = await apiRequest("GET", `/users?email=${encodeURIComponent(email)}`, );
    if (users.length === 0) {
      alert("Email not found");
      return;
    }

    const user = users[0];
    if (user.password !== password) {
      alert("Incorrect password");
      return;
    }
    if (!user.isActive) {
      alert("Account is banned");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify({id: user.id,name: user.name,email: user.email, role: user.role, }),
    );
    alert("Login successful!");
    window.location.href = "index.html";
    
  } catch (err) {
    console.error(err);
    alert("Login failed. Try again");
  }
}
