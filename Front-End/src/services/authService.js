const API_URL = import.meta.env.VITE_API_URL;

export async function loginUser(data) {
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.message || "Login failed. Please try again.");
    }

    return result;
  } catch (err) {
    throw new Error(err.message || "Network error. Please try again later.");
  }
}

export async function registerUser(data) {
  try {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      // const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.message || "Registration failed. Try again.");
    }

    return result;
  } catch (err) {
    throw new Error(err.message || "Network error. Please try again later.");
  }
}
