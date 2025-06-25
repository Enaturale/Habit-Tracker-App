import { useRouter, Stack, Link } from "expo-router";
import { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  // Here you can add authentication logic or other checks
  const router = useRouter();
  const isAuth = false;

  useEffect(() => {
    if (!isAuth) {
      console.log("User is not authenticated, redirecting to login");
      router.replace("/auth");
      console.log("Redircted to Login");
    }
  });

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <RouteGuard>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ title: "Home", headerShown: false }}
        />
      </Stack>
    </RouteGuard>
  );
}
