import BarbershopItem from "@/components/BarbershopItem"
import Header from "@/components/Header"
import Search from "@/components/Search"
import { db } from "@/lib/prisma"

export interface BarbershopsPageProps {
  searchParams: {
    search: string
  }
}

export default async function BarbershopsPage({
  searchParams,
}: BarbershopsPageProps) {
  const barbershops = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams.search,
        mode: "insensitive",
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
          Resultados para: &quot;{searchParams.search}&quot;
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
