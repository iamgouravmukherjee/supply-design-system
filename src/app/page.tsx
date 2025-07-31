// app/welcome.tsx
"use client";

import { Button } from "@supply/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@supply/components/ui/card";
import { StarRating } from "@supply/components/ui/feedback/star-rating"; // Assuming this is the correct path
import { useState } from "react";

export default function WelcomePage() {
  const [rating, setRating] = useState<number>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4 py-8">
      <Card className="w-full max-w-md shadow-xl border border-border rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Welcome to Our Design System
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <p className="text-muted-foreground">
            We&apos;re building a flexible, accessible component library with
            ShadCN, TailwindCSS, and Storybook.
          </p>

          <div>
            <p className="mb-2 font-medium">
              How would you rate this experience?
            </p>
            <StarRating value={rating} onChange={(value) => setRating(value)} />
            {rating && (
              <p className="mt-2 text-sm text-muted-foreground">
                You rated this {rating} star{rating > 1 ? "s" : ""}.
              </p>
            )}
          </div>

          <Button
            className="w-full"
            onClick={() => alert("Let’s explore more!")}
          >
            Explore Components
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
