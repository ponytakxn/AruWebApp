'use client'
import { RoleContext } from '@/components/CallRoleContext';
import { JoinCallButton } from '@/components/joinCallButton';
import { CallRole } from '@/types/types';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

export default function Page({params}: {params: {callId: string}}) {
  const roleContext = useContext(RoleContext)
  const router = useRouter()

  if (!roleContext) {
    throw new Error("RoleContext debe estar dentro de un RoleProvider");
  }

  const { setCallRole } = roleContext

  const handleJoin = () => {
    setCallRole(CallRole.CALLEE)
    router.push(`/${params.callId}`)
  }

  return (
    <section className='flex flex-col gap-8 items-center justify-center h-full'>
      <h2 className='text-lg'>Join Call</h2>

      <div className='flex flex-col gap-2 w-36'>
        <div className='flex flex-col gap-1 w-full'>
          <label htmlFor='callId' className='text-center'>Call ID</label>
          <input 
            id='callId' 
            type='text' 
            className='h-9 p-2 rounded-lg text-primary-foreground text-center' 
            value={params.callId}
            readOnly  
          />
        </div>

        <div className='flex flex-col gap-1 w-full'>
          <label htmlFor='name'>Name</label>
          <input id='name' type='text' placeholder='John Doe' className='h-9 p-2 rounded-lg text-primary-foreground' />
        </div>

        <div className='flex flex-col gap-1 w-full'>
          <label htmlFor='lang'>Native Language</label>
          <select id='lang' className='h-9 p-2 rounded-lg text-primary-foreground' defaultValue="en">
            <option value='en'>English</option>
            <option value='fr'>French</option>
            <option value='es'>Spanish</option>
            <option value='de'>German</option>
            <option value='it'>Italian</option>
            <option value='pt'>Portuguese</option>
            <option value='nl'>Dutch</option>
            <option value='ru'>Russian</option>
            <option value='ja'>Japanese</option>
            <option value='ko'>Korean</option>
            <option value='zh'>Chinese</option>
          </select>
        </div>
      </div>

      <JoinCallButton onClickFn={handleJoin} />
    </section>
  )
}