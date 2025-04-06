import { NextRequest } from "next/server";

// Flexible token extraction (can be extended)
export function getAuthToken(request: NextRequest): string | null {
  // Check cookies first
  const cookieToken = request.cookies.get("authToken")?.value;
  if (cookieToken) return cookieToken;

  // Fallback to Authorization header
  const authHeader = request.headers.get("Authorization");
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.substring(7);
  }

  return null;
}

// Mock auth verification - replace with your actual auth logic
export async function verifyAuthToken(token: string | null): Promise<{
  isAuthenticated: boolean;
  user?: {
    id: string;
    roles: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
}> {
  if (!token) {
    return { isAuthenticated: false };
  }

  // In a real implementation, you would:
  // 1. Verify JWT or session token
  // 2. Fetch user data from your database
  // 3. Return the appropriate response

  // Mock implementation
  try {
    // This would be your actual token verification logic
    const mockUser = {
      id: "user123",
      roles: ["user"], // Default role
    };

    return {
      isAuthenticated: true,
      user: mockUser,
    };
  } catch (error) {
    console.log("MIDDLEWARE_ERROR: ", error);
    return { isAuthenticated: false };
  }
}
