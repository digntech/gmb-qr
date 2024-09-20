"use client";
import UPIQRDisplay from "@/components/upi-pay-display";
import { AppProgressBar } from "next-nprogress-bar";
import React, { Suspense } from "react";

function page() {
	return (
		<div>
			<Suspense
				fallback={
					<AppProgressBar
						height="4px"
						color="#000000"
						options={{ showSpinner: false }}
						shallowRouting
					/>
				}
			>
				<UPIQRDisplay />
			</Suspense>
		</div>
	);
}

export default page;
