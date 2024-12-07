import { ReactNode } from "react"

import Navbar from "@/components/ui/navigations/navbar"

const RootLayout = ({ children}:{children: ReactNode}) => {
  return <main>
    <Navbar />
    {children}
  </main>
}

export default RootLayout