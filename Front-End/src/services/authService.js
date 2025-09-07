const API_URL = import.meta.env.VITE_API_URL;

async function handleResponse(response, defaultErrorMessage) {
  let result = {};
  try {
    result = await response.json();
  } catch {
    result = {};
  }

  if (!response.ok) {
    return {
      success: false,
      message: result.message || defaultErrorMessage,
      data: null,
    };
  }

  return {
    success: true,
    message: result.message || "Success",
    data: result.data || result, // sometimes backend sends `data`, sometimes not
  };
}

export async function loginUser(data) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include",
    });

    return await handleResponse(response, "Login failed. Please try again.");
  } catch (err) {
    return {
      success: false,
      message: err.message || "Network error. Please try again later.",
      data: null,
    };
  }
}

export async function registerUser(data) {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include",
    });

    return await handleResponse(
      response,
      "Registration failed. Please try again."
    );
  } catch (err) {
    return {
      success: false,
      message: err.message || "Network error. Please try again later.",
      data: null,
    };
  }
}
