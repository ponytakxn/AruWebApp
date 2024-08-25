'use client'

import { RoleContext } from "@/components/CallRoleContext"
import { JoinCallButton } from "@/components/joinCallButton"
import { CallRole } from "@/types/types"
import { useRouter } from "next/navigation"
import { useContext, useState } from "react"

export default function Page() {
  const [callId, setCallId] = useState<string>("")
  const roleContext = useContext(RoleContext)
  const router = useRouter()

  if (!roleContext) {
    throw new Error("RoleContext debe estar dentro de un RoleProvider");
  }

  const { setCallRole } = roleContext


  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCallId(e.target.value)
  }

  const handleJoin = () => {
    setCallRole(CallRole.CALLEE)
    router.push(`/${callId}`)
  }

  return(
    <section className='flex flex-col gap-8 items-center justify-center h-full'>
      <h2 className='text-lg'>Join Call</h2>

      <div className='flex flex-col gap-1 w-36 mb-20'>
        <label htmlFor='callId' className='text-center'>Insert Call ID</label>
        <input 
          id='callId' 
          type='text' 
          className='h-9 p-2 rounded-lg text-primary-foreground text-center' 
          value={callId}
          onChange={handleInput}
        />
      </div>

      <JoinCallButton onClickFn={handleJoin} />
    </section>
  )
}