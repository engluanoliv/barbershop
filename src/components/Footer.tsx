import { Card, CardContent } from "./ui/card"

export interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </>
  )
}
