import { getTimeSlots } from "@/db/http/get-time-slots"
import { NextResponse } from "next/server"

export const GET = async () => {
  try {
    const timeSlots = await getTimeSlots()
    return NextResponse.json(timeSlots)
  } catch (error) {
    console.log("Error in API route: ", error)
    return NextResponse.json(
      { error: "Failed to fetch the time slotsssss" },
      { status: 500 },
    )
  }
}
