import Link from "next/link"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { StarIcon } from "lucide-react"
import { Barbershop } from "@prisma/client/index"
import { Card, CardContent } from "./ui/card"

export interface BarbershopItemProps {
  barbershop: Barbershop
}

export default function BarbershopItem({ barbershop }: BarbershopItemProps) {
  return (
    <>
      <Card className="min-w-[167px] rounded-2xl">
        <CardContent className="p-0 px-1 pt-1">
          <div className="relative h-[159px] w-full">
            <Image
              alt={barbershop.name}
              fill
              className="rounded-2xl object-cover"
              src={barbershop.imageUrl}
            />
            <Badge className="absolute left-2 top-2 gap-1" variant="secondary">
              <StarIcon className="fill-primary text-primary" size={12} />
              <p className="text-xs font-semibold">5,0</p>
            </Badge>
          </div>
          <div className="grid grid-rows-[min-content_1fr_min-content] px-1 py-3">
            <h3 className="truncate font-semibold">{barbershop.name}</h3>
            <p className="truncate text-sm text-gray-400">
              {barbershop.address}
            </p>
            <Button variant="secondary" className="mt-3 w-full" asChild>
              <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
