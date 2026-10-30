import { NextResponse } from "next/server";
import { getFruitByName } from "@/lib/api";

export async function GET(request, { params }) {
  try {
    const { name } = await params;
    const fruit = await getFruitByName(name);

    return NextResponse.json(fruit);
  } catch (error) {
    return NextResponse.json(
      { error: "Fruit not found" },
      { status: 404 }
    );
  }
}
