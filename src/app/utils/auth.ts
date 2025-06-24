// /utils/auth.ts
//for verifying email and handling logout
export async function verifyEmailWithServer({
  email,
  first_name,
  last_name,
  phone,
}: {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
}) {
  const basicAuth = btoa("admin:securepassword");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify-email`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${basicAuth}`,
      },
      body: JSON.stringify({ email, first_name, last_name, phone }),
    }
  );

  if (!response.ok) {
    throw new Error("Email verification failed");
  }

  return response.json(); // { access_token: "..." }
}


//for handling logout
export async function logoutFromServer(token: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/logout`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Logout failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
}
