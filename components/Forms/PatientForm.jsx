import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import CustomFormField from "../global/CustomFormField"
import { useRouter } from 'next/navigation'


const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
   

})

export function PatientForm() {
     const router = useRouter()
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            email: "", 
        },
    });

  function onSubmit(data) {
      console.log(data)
      router.push("/patient")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
              <CustomFormField
                  form={form}
                  name="username"
                  label="User Name"
                  placeholder="Jhon doe"
               
                  iconSrc="/assets/icons/user.svg"
                  iconAlt="User Icon"
              />
              <CustomFormField
                  form={form}
                  name="email"
                  label="Email"
                  placeholder="example@gmail.com"
                  iconSrc="/assets/icons/email.svg"
                  iconAlt="Email Icon"
              />
              <CustomFormField
                  form={form}
                  name="phone"
                  label="Phone"
                  placeholder="Enter Phone Number"
                  iconSrc="/public/assets/icons/check-circle.svg"
                  iconAlt="Phone Icon "
                  fieldType="phone"
              />
        <Button type="submit" className="">Get Started</Button>
      </form>
    </Form>
  )
}
