import { db } from "@/lib/prisma"
import { Booking } from "@prisma/client"
import { NextResponse } from "next/server"

export const createBooking = async (
  booking: Booking,
): Promise<NextResponse> => {
  try {
    const createdBooking: Booking = await db.booking.create({ data: booking })
    return NextResponse.json(createdBooking)
  } catch (error) {
    console.log("Error to create a booking")
    return NextResponse.json(
      { error: "Failed to create a booking" },
      { status: 500 },
    )
  }
}
