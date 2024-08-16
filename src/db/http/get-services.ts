import { db } from "@/lib/prisma"
import { Service } from "@prisma/client"
import { NextResponse } from "next/server"

export const getServices = async (): Promise<NextResponse> => {
  try {
    const services: Service[] = await db.service.findMany()
    return NextResponse.json(services)
  } catch (error) {
    console.log("Error fetching services", error)
    return NextResponse.json(
      { error: "Failed to fetch the services." },
      { status: 500 },
    )
  }
}
