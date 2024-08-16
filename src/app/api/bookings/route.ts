import { createBooking } from "@/db/http/create-booking"
import { Booking } from "@prisma/client"

export const POST = async (booking: Booking) => {
  try {
    const createdBooking = await createBooking(booking)
  } catch (error) {}
}
