import { BarbershopService } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"

export interface ServiceItemProps {
  service: BarbershopService
}

export default function ServiceItem({ service }: ServiceItemProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        {/* Service Image */}
        <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
          <Image
            src={service.imageUrl}
            alt={service.name}
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* Service Details */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-primary">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>
            <Button variant="secondary" size="sm">
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
