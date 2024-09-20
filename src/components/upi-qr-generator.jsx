import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, QRCode } from "antd";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Download, Share2 } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "./ui/card";

const formSchema = z.object({
	upiId: z.string().min(5, "UPI ID must be at least 5 characters"),
	amount: z
		.string()
		.min(1, "Amount is required")
		.refine(
			(val) => !isNaN(Number(val)) && Number(val) > 0,
			"Amount must be a positive number"
		),
	businessName: z.string().optional(),
});

export default function UPIQRGenerator() {
	const [qrValue, setQrValue] = useState("");
	const [showShareDialog, setShowShareDialog] = useState(false);
	const {
		register,
		watch,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			upiId: "",
			amount: "",
			businessName: "",
		},
	});

	const watchFields = watch();

	useEffect(() => {
		const { upiId, amount, businessName } = watchFields;
		if (upiId && amount) {
			const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
				businessName || ""
			)}&am=${amount}&cu=INR`;
			setQrValue(upiLink);
		} else {
			setQrValue("");
		}
	}, [watchFields]);

	const handleDownload = () => {
		const canvas = document.querySelector(".ant-qrcode canvas");
		if (canvas) {
			const pngFile = canvas.toDataURL("image/jpg");
			const downloadLink = document.createElement("a");
			downloadLink.download = "upi-qr-code.png";
			downloadLink.href = pngFile;
			downloadLink.click();
		}
	};

	const handleShare = () => {
		if (navigator.share) {
			navigator.share({
				title: "UPI Payment QR Code",
				text: "Scan this QR code to make a UPI payment",
				url: qrValue,
			});
		} else {
			setShowShareDialog(true);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-white p-4">
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center">
						UPI QR Generator
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col md:flex-row gap-8">
						<div className="w-full md:w-1/2 space-y-4">
							<div>
								<Label htmlFor="upiId">UPI ID</Label>
								<Input
									id="upiId"
									{...register("upiId")}
									placeholder="demoupi@oksbi"
								/>
								{errors.upiId && (
									<p className="text-red-500 text-sm">{errors.upiId.message}</p>
								)}
							</div>
							<div>
								<Label htmlFor="amount">Amount</Label>
								<Input
									id="amount"
									type="number"
									{...register("amount")}
									placeholder="500"
								/>
								{errors.amount && (
									<p className="text-red-500 text-sm">{errors.amount.message}</p>
								)}
							</div>
							<div>
								<Label htmlFor="businessName">Receiver Name (Optional)</Label>
								<Input
									id="businessName"
									{...register("businessName")}
									placeholder="acme corp"
								/>
								{errors.businessName && (
									<p className="text-red-500 text-sm">
										{errors.businessName.message}
									</p>
								)}
							</div>
							<div>
								<h3 className="font-bold pt-3">Supports All UPI Apps</h3>
								<div className="flex gap-3">
									<img src="/phonepe.svg" alt="phonepe" className="w-10" />
									<img src="/paytm.svg" alt="paytm" className="w-10" />
									<img src="/gpay.svg" alt="google pay" className="w-10" />
									<img src="/upi.svg" alt="upi" className="w-10" />
								</div>
							</div>
						</div>

						<div className="w-full md:w-1/2 flex flex-col items-center justify-center">
							<div className="bg-white p-4 rounded-lg mb-4">
								{qrValue ? (
									<QRCode value={qrValue} size={256} />
								) : (
									<div className="w-64 h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg text-center">
										<p className="text-gray-500">QR Code will appear here</p>
									</div>
								)}
							</div>
							<div className="flex gap-4">
								<Button
									onClick={handleDownload}
									className="flex items-center gap-2"
									disabled={!qrValue}
								>
									<Download size={16} />
									Download
								</Button>
								<Button
									onClick={handleShare}
									variant="outline"
									className="flex items-center gap-2"
									disabled={!qrValue}
								>
									<Share2 size={16} />
									Share
								</Button>
							</div>
						</div>

						<Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Share UPI Payment Link</DialogTitle>
									<DialogDescription>
										Copy the link below to share the UPI payment details:
									</DialogDescription>
								</DialogHeader>
								<Input value={qrValue} readOnly />
								<Button
									onClick={() => {
										navigator.clipboard.writeText(qrValue);
										setShowShareDialog(false);
									}}
								>
									Copy to Clipboard
								</Button>
							</DialogContent>
						</Dialog>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
