"use server"

import { db } from "@/lib/prisma"
import { Booking } from "@prisma/client"

export const createBookings = async (booking: Booking) => {
  try {
    const response = await fetch("/api/booking", {
      method: "POST",
      body: JSON.stringify(booking),
    })

    if (!response.ok) {
      throw new Error("Failed to create the booking")
    }
  } catch (error) {
    throw new Error("Error to while creating a booking")
  }
}
