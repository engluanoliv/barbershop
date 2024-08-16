import { Service } from "@prisma/client"

export const fetchServices = async (): Promise<Service[]> => {
  try {
    const response = await fetch("/api/services")
    if (!response.ok) {
      throw new Error("Failed to fetch the services")
    }
    const servicesData: Service[] = await response.json()
    return servicesData
  } catch (error) {
    console.log("Error while fetching services: ", error)
    return []
  }
}
