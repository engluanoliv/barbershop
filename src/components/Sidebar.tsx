import { quickSearchOptions } from "@/app/_contants/quickSearch"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { HomeIcon, CalendarIcon, LogOutIcon } from "lucide-react"
import { Button } from "./ui/button"
import { SheetContent, SheetHeader, SheetTitle, SheetClose } from "./ui/sheet"
import Image from "next/image"
import Link from "next/link"

export interface SidebarProps {}

export default function Sidebar(props: SidebarProps) {
  return (
    <>
      {/* Sidebar */}
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>

        {/* User Details */}
        <div className="flex items-center gap-3 border-b border-solid py-5">
          <Avatar>
            <AvatarFallback>US</AvatarFallback>
            <AvatarImage src="https://github.com/engluanoliv.png" />
          </Avatar>
          <div>
            <p className="font-bold">Luan Oliveira</p>
            <p className="text-xs">engluanoliv@gmail.com</p>
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-4 border-b border-solid py-5">
          <SheetClose asChild>
            <Button className="justify-start gap-2" asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Início
              </Link>
            </Button>
          </SheetClose>
          <Button className="justify-start gap-2" variant="ghost">
            <CalendarIcon size={18} />
            Agendamentos
          </Button>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4 border-b border-solid py-5">
          {quickSearchOptions.map((option) => (
            <Button
              className="justify-start gap-2"
              variant="ghost"
              key={option.title}
            >
              <Image
                src={option.imageUrl}
                alt={option.title}
                height={18}
                width={18}
              />
              {option.title}
            </Button>
          ))}
        </div>

        {/* Logout */}
        <div className="flex flex-col gap-2 py-5">
          <Button variant="ghost" className="justify-start gap-2">
            <LogOutIcon size={18} />
            Sair
          </Button>
        </div>
      </SheetContent>
    </>
  )
}
