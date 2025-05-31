import { Stack } from "expo-router";

// Any files added to this directory become a screen inside our native app and a page on the web.

// Defines shared UI elements such as headers and tab bars
// so they are consistent between different routes

// Index file names, such as index.tsx,
// match their parent directory and do not add a path segment

// Files  can be .js, .jsx, .ts, or .tsx

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
