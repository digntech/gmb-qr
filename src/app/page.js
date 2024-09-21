"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { QrCodeGenerator } from "@/components/qr-code-generator";
import React from "react";

function page() {
	return (
		<div>
			<Navbar />
			<QrCodeGenerator />
			<Footer />
		</div>
	);
}

export default page;
