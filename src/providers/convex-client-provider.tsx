"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
//import { ClerkProvider } from "@clerk/nextjs";
import {  ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
  <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
    {children}
    </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}