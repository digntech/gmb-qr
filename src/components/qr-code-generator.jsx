"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { QRCode } from "antd";
import { Download, Share2 } from "lucide-react";
import html2canvas from "html2canvas";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export function QrCodeGenerator() {
	const [searchTerm, setSearchTerm] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [selectedPlace, setSelectedPlace] = useState(null);
	const [customText, setCustomText] = useState("PLEASE LEAVE US A REVIEW");
	const [businessName, setBusinessName] = useState("CUSTOM NAME");
	const [uniqueId, setUniqueId] = useState("");
	const autocompleteService = useRef(null);
	const placesService = useRef(null);
	const qrCodeRef = useRef(null);

	useEffect(() => {
		const script = document.createElement("script");
		script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
		script.async = true;
		script.onload = () => {
			autocompleteService.current = new window.google.maps.places.AutocompleteService();
			placesService.current = new window.google.maps.places.PlacesService(
				document.createElement("div")
			);
		};
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	const handleSearch = (value) => {
		if (value && autocompleteService.current) {
			autocompleteService.current.getPlacePredictions(
				{ input: value, types: ["establishment"] },
				(predictions, status) => {
					if (
						status === window.google.maps.places.PlacesServiceStatus.OK &&
						predictions
					) {
						setSuggestions(predictions);
					}
				}
			);
		} else {
			setSuggestions([]);
		}
	};

	const handleSelect = async (placeId) => {
		if (placesService.current) {
			placesService.current.getDetails({ placeId: placeId }, async (place, status) => {
				if (status === window.google.maps.places.PlacesServiceStatus.OK) {
					setSelectedPlace(place);
					setSearchTerm(place.name);
					setBusinessName(place.name.toUpperCase());
					setSuggestions([]);

					// Call our API to create or retrieve the business entry
					try {
						const response = await fetch("/api/business", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								gmbId: place.place_id,
								businessName: place.name,
							}),
						});
						const data = await response.json();
						setUniqueId(data.uniqueId);
					} catch (error) {
						console.error("Error creating/retrieving business:", error);
					}
				}
			});
		}
	};

	const handleDownload = async () => {
		if (qrCodeRef.current) {
			const canvas = await html2canvas(qrCodeRef.current, { scale: 5, allowTaint: true });
			const ctx = canvas.getContext("2d");

			// Add colored border
			ctx.strokeStyle = "#34A853";
			ctx.lineWidth = 10;
			ctx.strokeRect(0, 0, canvas.width, canvas.height);

			// Add Google logo
			const googleLogo = new Image();
			googleLogo.src = "/gmb.png";
			await new Promise((resolve) => {
				googleLogo.onload = resolve;
			});
			ctx.drawImage(
				googleLogo,
				canvas.width / 2 - googleLogo.width / 4,
				canvas.height - 60,
				googleLogo.width / 2,
				googleLogo.height / 2
			);

			// Add "Reviews" text
			ctx.font = "bold 24px Arial";
			ctx.fillStyle = "#4285F4";
			ctx.fillText("Reviews", canvas.width / 2 + 60, canvas.height - 40);

			const starImage = new Image();
			starImage.src =
				"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZDMTA3Ij48cGF0aCBkPSJNMTIgMTcuMjdMMTguMTggMjFsLTEuNjQtNy4wM0wyMiA5LjI0bC03LjE5LS42MUwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjF6Ii8+PC9zdmc+";
			await new Promise((resolve) => {
				starImage.onload = resolve;
			});
			for (let i = 0; i < 5; i++) {
				ctx.drawImage(
					starImage,
					canvas.width / 2 + 140 + i * 25,
					canvas.height - 55,
					20,
					20
				);
			}

			let image = canvas.toDataURL("image/png");

			const link = document.createElement("a");
			link.href = image;
			link.download = `${selectedPlace.name.replace(/\s+/g, "_")}_review_qr.png`;
			link.click();
		}
	};

	const handleShare = () => {
		if (selectedPlace) {
			// const reviewUrl = `https://search.google.com/local/writereview?placeid=${selectedPlace.place_id}`;
			const reviewUrl = `https://essyqr.in/b/${uniqueId}`;
			if (navigator.share) {
				navigator.share({
					title: `Review ${selectedPlace.name}`,
					text: `Please leave a review for ${selectedPlace.name}`,
					url: reviewUrl,
				});
			} else {
				alert(`Share this link: ${reviewUrl}`);
			}
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-white p-4">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center">
						EssyQR - GMB QR Generator
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="relative">
						<Input
							type="text"
							placeholder="Search for a place..."
							value={searchTerm}
							onChange={(e) => {
								setSearchTerm(e.target.value);
								handleSearch(e.target.value);
							}}
							className="w-full"
						/>
						{suggestions.length > 0 && (
							<ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto">
								{suggestions.map((place) => (
									<li
										key={place.place_id}
										className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
										onClick={() => handleSelect(place.place_id)}
									>
										{place.description}
									</li>
								))}
							</ul>
						)}
					</div>

					{selectedPlace && (
						<div className="space-y-4">
							<Input
								type="text"
								value={customText}
								onChange={(e) => setCustomText(e.target.value)}
								placeholder="Custom text above QR code"
								className="w-full"
							/>
							<Input
								type="text"
								value={businessName}
								onChange={(e) => setBusinessName(e.target.value.toUpperCase())}
								placeholder="Business name"
								className="w-full"
							/>
							<div className="flex justify-center" ref={qrCodeRef}>
								<div className="bg-white p-4 border-4 border-google rounded-lg">
									<div className="text-center font-bold text-xl mb-2">
										{customText}
									</div>
									<QRCode
										value={`https://essyqr.in/b/${uniqueId}`}
										size={200}
										className="m-auto"
									/>
									<img
										src={"/gmb.png"}
										alt="google-my-business-review"
										width={200}
										height={100}
										className="m-auto"
									/>
									<div className="text-center font-bold mt-2">{businessName}</div>
								</div>
							</div>
							<div className="flex justify-center space-x-4">
								<Button
									onClick={handleDownload}
									className="flex items-center space-x-2"
								>
									<Download className="w-4 h-4" />
									<span>Download</span>
								</Button>
								<Button
									onClick={handleShare}
									variant="outline"
									className="flex items-center space-x-2"
								>
									<Share2 className="w-4 h-4" />
									<span>Share Link</span>
								</Button>
							</div>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
