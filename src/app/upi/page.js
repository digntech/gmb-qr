"use client";
import React from "react";
import UPIQRGenerator from "@/components/upi-qr-generator";
import Navbar from "@/components/Navbar";

function page() {
	return (
		<div>
			<Navbar />
			<UPIQRGenerator />
		</div>
	);
}

export default page;
