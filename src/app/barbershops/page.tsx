import BarbershopItem from "@/components/BarbershopItem"
import Header from "@/components/Header"
import Search from "@/components/Search"
import { db } from "@/lib/prisma"
import { Barbershop, BarbershopService } from "@prisma/client"

export interface BarbershopsPageProps {
  searchParams: {
    title: string
    service: string
  }
}

export default async function BarbershopsPage({
  searchParams,
}: BarbershopsPageProps) {
  const barbershops: (Barbershop & {
    barbershopServices: BarbershopService[]
  })[] = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams.title,
        mode: "insensitive",
      },
      barbershopServices: {
        some: {
          service: {
            name: {
              contains: searchParams.service,
              mode: "insensitive",
            },
          },
        },
      },
    },
    include: {
      barbershopServices: {
        include: {
          service: true,
        },
      },
    },
  })

  return (
    <>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="mb-3 mt-6 text-xs uppercase text-gray-400">
          Resultados para: &quot;
          {searchParams.title ? searchParams.title : searchParams.service}&quot;
        </h2>
        <div className="grid grid-cols-2">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </>
  )
}
