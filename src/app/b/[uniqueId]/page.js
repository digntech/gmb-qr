import { ReviewRating } from "@/components/review-rating";

import { notFound } from "next/navigation";

export const metadata = {
	title: ` Review This Business - EssyQR`,
};

async function getBusinessData(uniqueId) {
	const res = await fetch(`https://essyqr.in/api/business?uniqueId=${uniqueId}`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch business data");
	}
	return res.json();
}

export default async function BusinessReviewPage({ params }) {
	const { uniqueId } = params;

	try {
		let business = await getBusinessData(uniqueId);
		return <ReviewRating business={business} />;
	} catch (error) {
		console.error("Error fetching business data:", error);
		notFound();
	}
}
