'use client'

import { PatientForm } from "@/components/Forms/PatientForm";
import Logo from "../components/global/Logo";
import Image from "next/image";

 export default function Home() {

   return (
    <>
      <div className="ml-20 flex h-screen text-white">
        <div className="w-1/2">
          <Logo />
          <div className="mt-20">
            <p className="text-4xl font-bold">Hi there...</p>
            <p className=" mt-4 text-sm">
              Get Started with Appointments.
            </p>
          </div>

          <div className="mt-8">
          
             <PatientForm />  
          </div>
        </div>

        <div className="relative h-full w-1/2">
          <Image
            src="/assets/images/onboarding-img.png"
            alt="Health Pulse Home Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
}
