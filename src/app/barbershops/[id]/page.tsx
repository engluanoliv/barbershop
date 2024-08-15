import Link from "next/link"
import Image from "next/image"
import ServiceItem from "@/components/ServiceItem"
import BarbershopPhoneItem from "@/components/BarbershopPhoneItem"
import { db } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import Sidebar from "@/components/Sidebar"
import { Barbershop, BarbershopService, Service } from "@prisma/client"

export interface BarbershopPageProps {
  params: {
    id: string
  }
}

export default async function BarbersopPage({ params }: BarbershopPageProps) {
  const barbershop: Barbershop | null = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  })

  const services: Service[] = await db.service.findMany()

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
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="secondary"
              className="absolute right-4 top-4"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <Sidebar />
        </Sheet>
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

      {/* Barbershop Services */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
        <div className="space-y-4">
          {services.map((service) => (
            <ServiceItem service={service} key={service.id} />
          ))}
        </div>
      </div>

      {/* Barbershop Contact */}
      <div className="w-full space-y-3 p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Contato</h2>
        {barbershop.phones.map((phone) => (
          <BarbershopPhoneItem phone={phone} key={phone} />
        ))}
      </div>
    </>
  )
}
