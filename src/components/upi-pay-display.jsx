import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { QRCode } from "antd";
import { Button } from "@/components/ui/button";
import { IndianRupee } from "lucide-react";

export default function UPIQRDisplay() {
	const searchParams = useSearchParams();
	const [qrValue, setQrValue] = useState("");
	let id, amt, pn;
	id = searchParams.get("id");
	amt = searchParams.get("amt");
	pn = searchParams.get("pn");

	useEffect(() => {
		if (id && amt) {
			const upiLink = `upi://pay?pa=${id}&pn=${encodeURIComponent(
				pn || ""
			)}&am=${amt}&cu=INR`;
			setQrValue(upiLink);
		}
	}, [searchParams]);

	const handlePayNow = () => {
		if (qrValue) {
			window.location.href = qrValue;
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
			<div className="bg-white p-8 rounded-lg shadow-md">
				<h3 className="pb-2 ">
					You are paying <b>₹{amt}</b> to <b style={{ color: "green" }}>{pn ? pn : id}</b>
				</h3>
				<h1 className="text-2xl font-bold mb-4 text-center">Scan QR Code to Pay</h1>
				<div className="mb-6">
					<QRCode value={qrValue} size={256} className="m-auto" />
				</div>
				<h1 className="text-2xl font-bold mb-4 text-center">Or click here</h1>
				<Button onClick={handlePayNow} className="w-full" style={{ background: "green" }}>
					Pay ₹{searchParams.get("amt")} Now
				</Button>
				<h3 className=" pt-3 text-center">Supports All UPI Apps</h3>
				<div className="flex gap-3 justify-center">
					<img src="/phonepe.svg" alt="phonepe" className="w-10" />
					<img src="/paytm.svg" alt="paytm" className="w-10" />
					<img src="/gpay.svg" alt="google pay" className="w-10" />
					<img src="/upi.svg" alt="upi" className="w-10" />
				</div>
			</div>
			<div className="pt-10">
				<p className="text-center italic text-sm">This QR is created with</p>
				<a href="https://essyqr.in" target="__blank">
					<img src="/essyqr.svg" style={{ width: "150px", margin:"auto" }} />
				</a>
			</div>
		</div>
	);
}
