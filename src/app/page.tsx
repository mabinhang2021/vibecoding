import { Button } from "@/components/ui/button"

import { Prisma } from "@/generated/prisma"
import { prisma } from "@/lib/db"

const Page = async ()=>{
  const users = await prisma.user.findMany()
  return (
    <div className="font-bold text-rose-500">
      <Button>
        click me 
        </Button>
        {JSON.stringify(users)}
    </div>
  )
}

export default Page