"use client"
import Navbar from "@/components/Navbar";
import { QrCodeGenerator } from "@/components/qr-code-generator";
import React from "react";

function page() {
	return (
		<div>
			<Navbar />
			<QrCodeGenerator />
		</div>
	);
}

export default page;
