
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import CustomFormField from "../global/CustomFormField"


const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    Phone: z
    .string()
    .min(10, { message: 'Must be a valid mobile number' })
    .max(14, { message: 'Must be a valid mobile number' }),

})

export function PatientForm() {
    
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            email: "",
            phone: ""
        },
    });

    function onSubmit(data) {
        console.log("Sds")



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
        <Button type="submit" className="w-full bg-main text-white hover:bg-main">Get Started</Button>
      </form>
    </Form>
  )
}
