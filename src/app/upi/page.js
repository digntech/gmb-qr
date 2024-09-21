"use client";
import React from "react";
import UPIQRGenerator from "@/components/upi-qr-generator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function page() {
	return (
		<div>
			<Navbar />
			<UPIQRGenerator />
			<Footer />
		</div>
	);
}

export default page;
