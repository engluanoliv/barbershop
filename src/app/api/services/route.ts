import { getServices } from "@/db/http/get-services"

export const GET = async () => {
  return getServices()
}
