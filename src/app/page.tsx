'use client'
import { useEffect, useState } from 'react'
import { start, stop, enumerateInputDevices } from '../lib/client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from '@/components/ui/separator';

function App() {
  const [isActiveCall, setIsActiveCall] = useState(false)

  const handleStart = () => {
    start()
    setIsActiveCall(true)
  }

  useEffect(() => {
    enumerateInputDevices()
  }, [])

  return (
    <>
      <section className="hidden">
        <h2>Options</h2>
        <div className="option">
            <input id="use-datachannel" defaultChecked type="checkbox"/>
            <label htmlFor="use-datachannel">Use datachannel</label>
            <select id="datachannel-parameters" defaultValue='{"ordered": true}'>
                <option value='{"ordered": true}'>Ordered, reliable</option>
                <option value='{"ordered": false, "maxRetransmits": 0}'>Unordered, no retransmissions</option>
                <option value='{"ordered": false, "maxPacketLifetime": 500}'>Unordered, 500ms lifetime</option>
            </select>
        </div>
        <div className="option">
            <input id="use-audio" defaultChecked type="checkbox"/>
            <label htmlFor="use-audio">Use audio</label>
            <select id="audio-input" defaultValue="">
                <option value="">Default device</option>
            </select>
            <select id="audio-codec" defaultValue="default">
                <option value="default">Default codecs</option>
                <option value="opus/48000/2">Opus</option>
                <option value="PCMU/8000">PCMU</option>
                <option value="PCMA/8000">PCMA</option>
            </select>
        </div>
        <div className="option">
            <input id="use-video" type="checkbox"/>
            <label htmlFor="use-video">Use video</label>
            <select id="video-input" defaultValue="">
                <option value="">Default device</option>
            </select>
            <select id="video-resolution" defaultValue="" >
                <option value="" >Default resolution</option>
                <option value="320x240">320x240</option>
                <option value="640x480">640x480</option>
                <option value="960x540">960x540</option>
                <option value="1280x720">1280x720</option>
            </select>
            <select id="video-transform" defaultValue="none">
                <option value="none" >No transform</option>
                <option value="edges">Edge detection</option>
                <option value="cartoon">Cartoon effect</option>
                <option value="rotate">Rotate</option>
            </select>
            <select id="video-codec" defaultValue="default" >
                <option value="default" >Default codecs</option>
                <option value="VP8/90000">VP8</option>
                <option value="H264/90000">H264</option>
            </select>
        </div>
        <div className="option">
            <input id="use-stun" type="checkbox" defaultChecked/>
            <label htmlFor="use-stun">Use STUN server</label>
        </div>

        <h2>State</h2>
        <p>
            ICE gathering state: <span id="ice-gathering-state"></span>
        </p>
        <p>
            ICE connection state: <span id="ice-connection-state"></span>
        </p>
        <p>
            Signaling state: <span id="signaling-state"></span>
        </p>

        <div id="media" style={{display: "none"}}>
            <h2>Media</h2>

            <audio id="audio" autoPlay={true}></audio>
            <video id="video" autoPlay={true} playsInline={true}></video>
        </div>

        <h2>Data channel</h2>
        <pre id="data-channel" style={{height: "200px"}}></pre>

        <h2>SDP</h2>

        <h3>Offer</h3>
        <pre id="offer-sdp"></pre>

        <h3>Answer</h3>
        <pre id="answer-sdp"></pre>
      </section>

      <section className='flex flex-col gap-8 items-center justify-center h-screen'>
        {!isActiveCall && (
          <>
            <h2 className='text-lg'>Join Call</h2>

            <div className='flex flex-col gap-2 w-36'>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='callId' className='text-center'>Call ID</label>
                <input id='callId' type='text' placeholder='999999' className='h-9 p-2 rounded-lg text-primary-foreground text-center' />
              </div>

              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' placeholder='John Doe' className='h-9 p-2 rounded-lg text-primary-foreground' />
              </div>

              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='lang'>Call ID</label>
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

            <button id="start" className="bg-success px-4 py-2 rounded-lg flex gap-2 items-center" onClick={handleStart}>
              Join call
              <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.27083 5.80212L1.21017 4.74146C1.11132 4.64338 1.034 4.52575 0.983228 4.39607C0.932493 4.26642 0.909335 4.12758 0.91531 3.98846C0.921321 3.84937 0.956287 3.71301 1.01802 3.5882C1.07978 3.46336 1.16686 3.35281 1.27381 3.2636C2.48 2.29388 3.89676 1.62057 5.41039 1.29785C6.80744 0.986413 8.25595 0.986417 9.65303 1.29785C11.1729 1.62269 12.5949 2.30096 13.8037 3.27774C13.9103 3.36668 13.9973 3.47684 14.059 3.6012C14.1207 3.72557 14.1558 3.86142 14.1621 4.00011C14.1684 4.13879 14.1458 4.27728 14.0957 4.40673C14.0455 4.5362 13.969 4.6538 13.8709 4.75206L12.8103 5.81272C12.6404 5.98599 12.4133 6.09158 12.1713 6.10979C11.9293 6.128 11.689 6.05761 11.495 5.91172C11.1108 5.61705 10.6945 5.36679 10.2541 5.16572C10.08 5.08675 9.93213 4.95951 9.82811 4.79909C9.72409 4.63868 9.66824 4.45181 9.66717 4.26062L9.66717 3.3626C8.27871 2.98075 6.81293 2.98076 5.42453 3.3626V4.26063C5.42347 4.45183 5.36757 4.63868 5.26359 4.79909C5.15958 4.95953 5.01172 5.08674 4.83763 5.16572C4.39714 5.36679 3.98087 5.61703 3.59666 5.91172C3.40068 6.05926 3.15733 6.12958 2.91289 6.10936C2.6684 6.08917 2.4399 5.97981 2.27083 5.80212Z" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>  
            </button>
          </>
        )}

        {isActiveCall && (
          <>
            <header className='w-full flex items-center justify-center bg-secondary p-2'>ARÜ</header>

            <section className='h-full w-full flex flex-col justify-center items-center gap-14'>
              <div className='flex flex-col gap-2'>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                User 1
              </div>

              <Separator className='w-4/5 bg-secondary h-[2px]'/>
              
              <div className='flex flex-col gap-2'>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                User 2
              </div>
            </section>

            <footer className='w-full flex items-center justify-center p-2 gap-2 bg-secondary'>
              <button id="stop" className="bg-destructive px-4 py-2 rounded-lg flex gap-2 items-center" onClick={stop}>
                End call
                <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.27083 5.80212L1.21017 4.74146C1.11132 4.64338 1.034 4.52575 0.983228 4.39607C0.932493 4.26642 0.909335 4.12758 0.91531 3.98846C0.921321 3.84937 0.956287 3.71301 1.01802 3.5882C1.07978 3.46336 1.16686 3.35281 1.27381 3.2636C2.48 2.29388 3.89676 1.62057 5.41039 1.29785C6.80744 0.986413 8.25595 0.986417 9.65303 1.29785C11.1729 1.62269 12.5949 2.30096 13.8037 3.27774C13.9103 3.36668 13.9973 3.47684 14.059 3.6012C14.1207 3.72557 14.1558 3.86142 14.1621 4.00011C14.1684 4.13879 14.1458 4.27728 14.0957 4.40673C14.0455 4.5362 13.969 4.6538 13.8709 4.75206L12.8103 5.81272C12.6404 5.98599 12.4133 6.09158 12.1713 6.10979C11.9293 6.128 11.689 6.05761 11.495 5.91172C11.1108 5.61705 10.6945 5.36679 10.2541 5.16572C10.08 5.08675 9.93213 4.95951 9.82811 4.79909C9.72409 4.63868 9.66824 4.45181 9.66717 4.26062L9.66717 3.3626C8.27871 2.98075 6.81293 2.98076 5.42453 3.3626V4.26063C5.42347 4.45183 5.36757 4.63868 5.26359 4.79909C5.15958 4.95953 5.01172 5.08674 4.83763 5.16572C4.39714 5.36679 3.98087 5.61703 3.59666 5.91172C3.40068 6.05926 3.15733 6.12958 2.91289 6.10936C2.6684 6.08917 2.4399 5.97981 2.27083 5.80212Z" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>  
              </button>

              <button className="bg-muted text-muted-foreground px-4 py-2 rounded-lg flex gap-2 items-center">
                Mute
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.582031 7.0026C0.582031 3.45878 3.45487 0.585938 6.9987 0.585938C10.5425 0.585938 13.4154 3.45877 13.4154 7.0026C13.4154 10.5464 10.5425 13.4193 6.9987 13.4193C3.45487 13.4193 0.582031 10.5464 0.582031 7.0026ZM6.9987 1.7526C4.0992 1.7526 1.7487 4.10311 1.7487 7.0026C1.7487 9.90207 4.0992 12.2526 6.9987 12.2526C9.89817 12.2526 12.2487 9.90207 12.2487 7.0026C12.2487 4.10311 9.89817 1.7526 6.9987 1.7526Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.46382 2.46773C2.69163 2.23992 3.06098 2.23992 3.28878 2.46773L11.5371 10.7161C11.7649 10.9439 11.7649 11.3132 11.5371 11.541C11.3093 11.7688 10.94 11.7688 10.7122 11.541L2.46382 3.29269C2.23602 3.06488 2.23602 2.69554 2.46382 2.46773Z" fill="white"/>
                </svg>
              </button>

            </footer>
          </>
        )}
      </section>
    </>
  )
}

export default App