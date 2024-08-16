import { Slot } from "@prisma/client"

export const fetchTimeSlots = async (): Promise<Slot[]> => {
  try {
    const response = await fetch("/api/time-slots")
    if (!response.ok) {
      throw new Error("Failed to fetch time slots")
    }
    const timeSlotData: Slot[] = await response.json()
    return timeSlotData
  } catch (error) {
    console.log("Error while fetching slots: ", error)
    return []
  }
}
