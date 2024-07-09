import React from 'react'
import Image from 'next/image'
// import {logo} from "assets/icons/logo-full.svg"

function Logo() {
    return (
        <div className='mt-10'>

        <Image src="assets/icons/logo-full.svg" width={200} height={200} alt="Log Care Pulse" />
        </div>
      
    
    );
}

export default Logo
