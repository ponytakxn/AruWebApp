'use client'

import { useRouter } from "next/navigation"

function App() {
  const router = useRouter()
  
  return (
    <section className="flex flex-col gap-9 items-center justify-center h-full">
      <div className="flex flex-col gap-3">
        <button id="start" className="bg-success px-6 py-3 rounded-lg flex gap-3 items-center">
          Call
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4981 12.6901V14.9401C16.4989 15.1489 16.4562 15.3557 16.3725 15.5471C16.2888 15.7384 16.1661 15.9103 16.0122 16.0515C15.8583 16.1926 15.6766 16.3002 15.4787 16.3671C15.2808 16.434 15.0712 16.4589 14.8631 16.4401C12.5552 16.1893 10.3384 15.4007 8.39062 14.1376C6.57849 12.9861 5.04212 11.4497 3.89062 9.63757C2.6231 7.68097 1.8343 5.45332 1.58812 3.13507C1.56938 2.92767 1.59403 2.71864 1.66049 2.52129C1.72697 2.32393 1.8338 2.14258 1.9742 1.98879C2.11459 1.83499 2.28548 1.7121 2.47596 1.62796C2.66645 1.54382 2.87237 1.50027 3.08062 1.50007H5.33062C5.6946 1.49649 6.04746 1.62538 6.32344 1.86272C6.59942 2.10006 6.77968 2.42965 6.83062 2.79007C6.92558 3.51012 7.10171 4.21711 7.35562 4.89757C7.45653 5.16601 7.47836 5.45776 7.41855 5.73823C7.35873 6.0187 7.21976 6.27616 7.01812 6.48007L6.06562 7.43257C7.13329 9.31027 8.68799 10.8649 10.5656 11.9326L11.5181 10.9801C11.722 10.7784 11.9795 10.6395 12.2599 10.5796C12.5404 10.5198 12.8322 10.5417 13.1006 10.6426C13.7811 10.8965 14.488 11.0726 15.2081 11.1676C15.5725 11.2189 15.9052 11.4025 16.143 11.6832C16.3809 11.9639 16.5073 12.3223 16.4981 12.6901Z" stroke="#FEFEFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>  
        </button>

        <button className="bg-muted px-6 py-3 rounded-lg flex gap-3 items-center" onClick={() => router.push("/join")}>
          Join
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6 0C6.41421 0 6.75 0.335786 6.75 0.75V11.25C6.75 11.6642 6.41421 12 6 12C5.58579 12 5.25 11.6642 5.25 11.25V0.75C5.25 0.335786 5.58579 0 6 0Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 6C0 5.58579 0.335786 5.25 0.75 5.25H11.25C11.6642 5.25 12 5.58579 12 6C12 6.41421 11.6642 6.75 11.25 6.75H0.75C0.335786 6.75 0 6.41421 0 6Z" fill="white"/>
          </svg>
        </button>
      </div>

      <div className='flex flex-col gap-1 w-40'>
        <label htmlFor='lang' className="text-muted">Native Language</label>
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
    </section>
  )
}

export default App