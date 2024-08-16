import { db } from "@/lib/prisma"
import { Slot } from "@prisma/client"

export const getTimeSlots = async (): Promise<Slot[]> => {
  try {
    const timeSlots: Slot[] = await db.slot.findMany()
    return timeSlots
  } catch (error) {
    console.log("Error fetching time slots", error)

    throw new Error("Failed to fetch time slots.")
  }
}
