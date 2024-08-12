import ServiceItem from "@/components/ServiceItem"
import { Button } from "@/components/ui/button"
import { db } from "@/lib/prisma"
import { Barbershop, BarbershopService } from "@prisma/client"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export interface BarbershopPageProps {
  params: {
    id: string
  }
}

export default async function BarbersopPage({ params }: BarbershopPageProps) {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <>
      {/* Barbershop Image */}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl}
          alt={barbershop?.name}
          fill
          className="object-cover"
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>

      {/* Barbershop Details */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm">5,0 (499 avaliações)</p>
        </div>
      </div>

      {/* Barbershop Description */}
      <div className="space-y-2 border-b border-solid p-5">
        <p className="text-xs font-bold uppercase text-gray-400">Sobre nós</p>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>

      <div className="space-y-3 p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
        <div className="space-y-4">
          {barbershop.services.map((service) => (
            <ServiceItem service={service} key={service.id} />
          ))}
        </div>
      </div>
    </>
  )
}
