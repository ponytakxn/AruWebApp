'use client'
import { enumerateInputDevices, start, stop } from '@/lib/client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/logo';
import { useEffect } from 'react';
import { EndCallButton } from '@/components/endCallButton';

export default function Page({ params }: {params: { callId: string }}) {
  
  useEffect(() => {
    enumerateInputDevices()
    start()
  }, [])

  return(
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
      
      <section className='flex flex-col gap-8 items-center justify-center h-full'>
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

        <footer className='w-full flex items-center justify-center p-4 gap-2 bg-secondary'>
          <EndCallButton />

          <button className="bg-muted text-muted-foreground px-4 py-2 rounded-lg flex gap-2 items-center">
            Mute
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.582031 7.0026C0.582031 3.45878 3.45487 0.585938 6.9987 0.585938C10.5425 0.585938 13.4154 3.45877 13.4154 7.0026C13.4154 10.5464 10.5425 13.4193 6.9987 13.4193C3.45487 13.4193 0.582031 10.5464 0.582031 7.0026ZM6.9987 1.7526C4.0992 1.7526 1.7487 4.10311 1.7487 7.0026C1.7487 9.90207 4.0992 12.2526 6.9987 12.2526C9.89817 12.2526 12.2487 9.90207 12.2487 7.0026C12.2487 4.10311 9.89817 1.7526 6.9987 1.7526Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M2.46382 2.46773C2.69163 2.23992 3.06098 2.23992 3.28878 2.46773L11.5371 10.7161C11.7649 10.9439 11.7649 11.3132 11.5371 11.541C11.3093 11.7688 10.94 11.7688 10.7122 11.541L2.46382 3.29269C2.23602 3.06488 2.23602 2.69554 2.46382 2.46773Z" fill="white"/>
            </svg>
          </button>

        </footer>
      </section>
    </>
  )
}