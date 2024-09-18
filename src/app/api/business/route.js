import { MongoClient } from "mongodb";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

const uri = process.env.NEXT_PUBLIC_MONGO_URI;
const client = new MongoClient(uri);

export async function POST(request) {
	try {
		const { gmbId, businessName } = await request.json();

		if (!gmbId || !businessName) {
			return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
		}

		await client.connect();
		const database = client.db("gmb-qr-code-db1");
		const collection = database.collection("businesses");

		// Check if the business already exists
		const existingBusiness = await collection.findOne({ gmbId });

		if (existingBusiness) {
			return NextResponse.json({
				message: "Business already exists",
				uniqueId: existingBusiness.uniqueId,
			});
		}

		// Create a new business entry
		const uniqueId = nanoid(10); // Generate a 10-character nanoid
		const newBusiness = {
			gmbId,
			uniqueId,
			businessName,
			createdAt: new Date(),
		};

		const result = await collection.insertOne(newBusiness);

		return NextResponse.json({
			message: "Business created successfully",
			uniqueId: uniqueId,
			insertedId: result.insertedId,
		});
	} catch (error) {
		console.error("Error in API route:", error);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	} finally {
		await client.close();
	}
}

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const uniqueId = searchParams.get("uniqueId");

	console.log("Received request for uniqueId:", uniqueId); // Add this line

	if (!uniqueId) {
		return NextResponse.json({ error: "Missing uniqueId parameter" }, { status: 400 });
	}

	try {
		await client.connect();
		const db = client.db("gmb-qr-code-db1");
		const business = await db.collection("businesses").findOne({ uniqueId });

		console.log("Found business:", business); // Add this line

		if (!business) {
			return NextResponse.json({ error: "Business not found" }, { status: 404 });
		}

		return NextResponse.json({
			gmbId: business.gmbId,
			businessName: business.businessName,
		});
	} catch (error) {
		console.error("Error in API route:", error);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}
// export async function GET(request) {
// 	try {
// 		const { searchParams } = new URL(request.url);
// 		const uniqueId = searchParams.get("uniqueId");

// 		if (!uniqueId) {
// 			return NextResponse.json({ error: "Missing uniqueId parameter" }, { status: 400 });
// 		}

// 		await client.connect();
// 		const database = client.db("qr_database");
// 		const collection = database.collection("businesses");

// 		const business = await collection.findOne({ uniqueId });

// 		if (!business) {
// 			return NextResponse.json({ error: "Business not found" }, { status: 404 });
// 		}

// 		return NextResponse.json({
// 			gmbId: business.gmbId,
// 			businessName: business.businessName,
// 		});
// 	} catch (error) {
// 		console.error("Error in API route:", error);
// 		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
// 	} finally {
// 		await client.close();
// 	}
// }
