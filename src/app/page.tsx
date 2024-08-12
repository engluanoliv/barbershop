import Image from "next/image"
import Header from "@/components/Header"
import BookingItem from "@/components/BookingItem"
import BarbershopItem from "@/components/BarbershopItem"
import { db } from "@/lib/prisma"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { quickSearchOptions } from "./_contants/quickSearch"
import { Barbershop } from "@prisma/client"

export default async function HomePage() {
  const barbershops: Barbershop[] = await db.barbershop.findMany()
  const popularBarbershop: Barbershop[] = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  return (
    <>
      <div>
        <Header />
        <div className="p-5">
          {/* Text */}
          <h2 className="text-xl font-bold">Olá, Luan!</h2>
          <p>Segunda-feira, 12 de agosto.</p>

          {/* Search Button */}
          <div className="mt-6 flex items-center gap-2">
            <Input placeholder="Buscar" />
            <Button>
              <SearchIcon />
            </Button>
          </div>

          {/* Quick Search Buttons*/}
          <div className="no-scrollbar mt-6 flex gap-3 overflow-auto">
            {quickSearchOptions.map((option) => (
              <Button className="gap-2" key={option.title}>
                <Image
                  src={option.imageUrl}
                  alt={option.title}
                  height={16}
                  width={16}
                />
                {option.title}
              </Button>
            ))}
          </div>

          {/* Banner Images */}
          <div className="relative mt-6 h-[150px] w-full">
            <Image
              src="banner-01.svg"
              alt="Services"
              fill
              className="rounded-xl object-cover"
            />
          </div>

          {/* Booking */}
          <BookingItem />

          {/* Recomended */}
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Recomendados
          </h2>
          <div className="no-scrollbar flex gap-4 overflow-auto">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>

          {/* Popular */}
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Populares
          </h2>
          <div className="no-scrollbar flex gap-4 overflow-auto">
            {popularBarbershop.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
