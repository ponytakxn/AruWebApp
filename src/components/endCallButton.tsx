import { stop } from '@/lib/client';

export const EndCallButton = () => {
  return(
    <button id="stop" className="bg-destructive px-4 py-2 rounded-lg flex gap-2 items-center" onClick={stop}>
      End call
      <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.27083 5.80212L1.21017 4.74146C1.11132 4.64338 1.034 4.52575 0.983228 4.39607C0.932493 4.26642 0.909335 4.12758 0.91531 3.98846C0.921321 3.84937 0.956287 3.71301 1.01802 3.5882C1.07978 3.46336 1.16686 3.35281 1.27381 3.2636C2.48 2.29388 3.89676 1.62057 5.41039 1.29785C6.80744 0.986413 8.25595 0.986417 9.65303 1.29785C11.1729 1.62269 12.5949 2.30096 13.8037 3.27774C13.9103 3.36668 13.9973 3.47684 14.059 3.6012C14.1207 3.72557 14.1558 3.86142 14.1621 4.00011C14.1684 4.13879 14.1458 4.27728 14.0957 4.40673C14.0455 4.5362 13.969 4.6538 13.8709 4.75206L12.8103 5.81272C12.6404 5.98599 12.4133 6.09158 12.1713 6.10979C11.9293 6.128 11.689 6.05761 11.495 5.91172C11.1108 5.61705 10.6945 5.36679 10.2541 5.16572C10.08 5.08675 9.93213 4.95951 9.82811 4.79909C9.72409 4.63868 9.66824 4.45181 9.66717 4.26062L9.66717 3.3626C8.27871 2.98075 6.81293 2.98076 5.42453 3.3626V4.26063C5.42347 4.45183 5.36757 4.63868 5.26359 4.79909C5.15958 4.95953 5.01172 5.08674 4.83763 5.16572C4.39714 5.36679 3.98087 5.61703 3.59666 5.91172C3.40068 6.05926 3.15733 6.12958 2.91289 6.10936C2.6684 6.08917 2.4399 5.97981 2.27083 5.80212Z" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>  
    </button>
  )
}