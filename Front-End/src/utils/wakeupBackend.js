export const wakeupBackend = async (API_URL) => {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);

    await fetch(`${API_URL}/wakeup`, {
      method: "GET",
      signal: controller.signal,
    });

    clearTimeout(timeout);
    console.log("Wake-up request sent");
  } catch (err) {
    console.log("Wake-up error:", err.message);
  }
};
