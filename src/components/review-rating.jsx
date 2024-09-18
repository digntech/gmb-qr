"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Star } from "lucide-react";
import Image from "next/image";
import { Input } from "./ui/input";

export function ReviewRating({ business }) {
	const [rating, setRating] = useState(0);
	const [review, setReview] = useState("");
	const [showDialog, setShowDialog] = useState(false);

	const handleRating = (value) => {
		setRating(value);
		if (value > 3) {
			window.location.replace(
				`https://search.google.com/local/writereview?placeid=${business?.gmbId}`
			);
		}
	};

	const handleSubmit = () => {
		if (rating < 4) {
			// Redirect to Google review page for ratings 4 and above
			setShowDialog(true);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-white p-4">
			<Card className="w-full max-w-md">
				<CardHeader>
					<Image
						alt="g-logo"
						src={"/g-review.png"}
						className="m-auto"
						width={200}
						height={200}
					/>
					<h3 style={{ fontStyle: "italic", textAlign: "center" }}>
						{business?.businessName}
					</h3>
					<CardTitle className="text-2xl font-bold text-center">
						Rate your experience
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="flex justify-center space-x-2">
						{[1, 2, 3, 4, 5].map((star) => (
							<button
								key={star}
								onClick={() => handleRating(star)}
								className="focus:outline-none"
							>
								<Star
									className={`w-10 h-10 ${
										star <= rating
											? "text-yellow-400 fill-current"
											: "text-gray-300"
									}`}
								/>
							</button>
						))}
					</div>
					{rating > 0 && rating < 4 && (
						<>
							<Input type="email" placeholder="Your Email Id" className="w-full" />
							<Textarea
								placeholder="Share details of your experience..."
								value={review}
								onChange={(e) => setReview(e.target.value)}
								rows={4}
							/>
						</>
					)}
					<Button onClick={handleSubmit} className="w-full">
						Submit review
					</Button>
				</CardContent>
			</Card>
			<Dialog open={showDialog} onOpenChange={setShowDialog}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Thank you for your feedback</DialogTitle>
						<DialogDescription>
							We appreciate you taking the time to share your experience. Your
							feedback helps us improve our services.
						</DialogDescription>
					</DialogHeader>
					<Button onClick={() => setShowDialog(false)}>Close</Button>
				</DialogContent>
			</Dialog>
		</div>
	);
}
