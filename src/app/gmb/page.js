
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { QrCodeGenerator } from "@/components/qr-code-generator";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

function page() {
	const cookieStore = cookies()
	const token = cookieStore.get('auth_token')
  
	if (!token) {
	  redirect('/login')
	}
	return (
		<div>
			<Navbar />
			<QrCodeGenerator />
			<Footer />
		</div>
	);
}

export default page;
