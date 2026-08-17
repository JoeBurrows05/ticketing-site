import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postcode = searchParams.get("postcode")?.trim();

  if (!postcode) {
    return NextResponse.json(
      { error: "Please enter a postcode." },
      { status: 400 }
    );
  }

  try {
    const postcodeUrl = new URL(
      `https://api.postcodes.io/postcodes/${encodeURIComponent(postcode)}`
    );

    const response = await fetch(postcodeUrl.toString(), {
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Postcode not found. Please check it and try again." },
        { status: 404 }
      );
    }

    const data = await response.json();

    if (!data.result) {
      return NextResponse.json(
        { error: "Postcode not found. Please check it and try again." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      postcode: data.result.postcode,
      latitude: data.result.latitude,
      longitude: data.result.longitude,
    });
  } catch (error) {
    console.error("Postcode lookup error:", error);

    return NextResponse.json(
      { error: "Unable to look up postcode. Please try again." },
      { status: 500 }
    );
  }
}