"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-white p-4">
			<h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
			<Button onClick={() => reset()}>Try again</Button>
		</div>
	);
}
