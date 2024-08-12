import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <>
      <Card>
        <CardContent className="flex flex-row items-center justify-between p-5">
          <Image alt="Barbershop" src="/logo.svg" height={18} width={120} />
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </CardContent>
      </Card>
    </>
  )
}
