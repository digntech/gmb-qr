import { QrCodeGenerator } from "@/components/qr-code-generator";
import React from "react";

function page() {
	return (
		<div>
			<QrCodeGenerator />
			<footer>
				Made with ❤️ by{" "}
				<a href="https://digntech.com" className="font-semibold">
					Dig-n-Tech
				</a>{" "}
				and{" "}
				<a href="https://sayakdutta.site" className="font-semibold">
					Sayak Dutta
				</a>
				.
			</footer>
		</div>
	);
}

export default page;
