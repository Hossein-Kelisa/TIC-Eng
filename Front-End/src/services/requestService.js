const API_URL = import.meta.env.VITE_API_URL;

/**
 * Create a new request (with PDF file).
 */
export async function createRequest(formData) {
  try {
    const response = await fetch(`${API_URL}/requests`, {
      method: "POST",
      body: formData, // FormData includes file + fields
      credentials: "include",
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.message || "Failed to submit request.");
    }

    return result;
  } catch (err) {
    throw new Error(err.message || "Network error. Please try again later.");
  }
}

/**
 * Get all requests (admin only).
 * Reads token from localStorage.
 */
export async function getRequests() {
  const token = localStorage.getItem("token"); // 🔑 read from localStorage
  if (!token) throw new Error("No admin token found");

  try {
    const response = await fetch(`${API_URL}/requests`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      credentials: "include",
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.message || "Failed to fetch requests.");
    }

    return result;
  } catch (err) {
    throw new Error(err.message || "Network error. Please try again later.");
  }
}

export async function updateRequestStatus(requestId, status) {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No admin token found");

  try {
    const response = await fetch(`${API_URL}/requests/${requestId}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ status }),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.message || "Failed to update request status.");
    }

    return result;
  } catch (err) {
    throw new Error(err.message || "Network error. Please try again later.");
  }
}
