"use client";

import { Button } from "@supply/components/ui/button";
import { Card, CardContent } from "@supply/components/ui/card";
import { StarRating } from "@supply/components/ui/feedback/star-rating";
import { Heading } from "@supply/components/ui/typography/heading";
import { Typography } from "@supply/components/ui/typography/typography";
import { useState } from "react";

export default function WelcomePage() {
  const [rating, setRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackSubmit = () => {
    console.log("User rating submitted:", rating);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12 text-center">
      <Card className="w-full max-w-xl shadow-xl">
        <CardContent className="flex flex-col items-center space-y-6 py-10">
          <Heading level="1" className="text-center">
            Welcome to the Design System
          </Heading>
          <Typography variant="lead" className="text-center">
            We’re building a modern, accessible design system to support online
            digital services. Your feedback helps us improve.
          </Typography>
          <div className="mt-4 scale-[1.5]">
            <StarRating
              value={rating}
              onChange={setRating}
              readOnly={submitted}
            />
          </div>
          <Button
            onClick={handleFeedbackSubmit}
            disabled={submitted || rating === 0}
          >
            {submitted ? "Thank You!" : "Submit Feedback"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
