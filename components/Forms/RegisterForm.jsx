
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

export function RegisterForm() {

 const FormFieldType= {
  INPUT : "input",
  TEXTAREA : "textarea",
  PHONE : "phone",
  CHECKBOX : "checkbox",    
  DATE_PICKER :"datePicker",
  SELECT : "select",
  SKELETON : "skeleton",
}

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
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex-1 space-y-12"
            >
                <section className="space-y-4">
                    <h1 className="header">Welcome 👋</h1>
                    <p className="text-dark-700">Let us know more about yourself.</p>
                </section>

                <section className="space-y-6">
                    <div className="mb-9 space-y-1">
                        <h2 className="sub-header">Personal Information</h2>
                    </div>

                    {/* NAME */}
                    
                    <CustomFormField
                        fieldType='input'
                        form={form}
                        name="name"
                        label="User Name"
                        placeholder="John Doe"
                        iconSrc="/assets/icons/user.svg"
                        iconAlt="user"
                    />

                    {/* EMAIL & PHONE */}
                    <div className="flex flex-col gap-6 xl:flex-row">
                        <CustomFormField
                            fieldType={FormFieldType.INPUT}
                            form={form}
                            name="email"
                            label="Email address"
                            placeholder="johndoe@gmail.com"
                            iconSrc="/assets/icons/email.svg"
                            iconAlt="email"
                        />

                        <CustomFormField
                            fieldType={FormFieldType.PHONE}
                            form={form}
                            name="phone"
                            label="Phone Number"
                            placeholder="(555) 123-4567"
                        />
                    </div>

                    {/* BirthDate & Gender */}
                    <div className="flex flex-col gap-6 xl:flex-row">
                        <CustomFormField
                           fieldType={FormFieldType.SKELETON}
                            form={form}
                            name="birthDate"
                            label="Date of birth"
                        />

                        {/* <CustomFormField
                            fieldType={FormFieldType.SKELETON}
                            form={form}
                            name="gender"
                            label="Gender"
                            renderSkeleton={(field) => (
                                <FormControl>
                                    <RadioGroup
                                        className="flex h-11 gap-6 xl:justify-between"
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        {GenderOptions.map((option, i) => (
                                            <div key={option + i} className="radio-group">
                                                <RadioGroupItem value={option} id={option} />
                                                <Label htmlFor={option} className="cursor-pointer">
                                                    {option}
                                                </Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </FormControl> */}
                            {/* )} */}
                        {/* /> */}
                    </div>

                    {/* Address & Occupation */}
                    <div className="flex flex-col gap-6 xl:flex-row">
                        <CustomFormField
                            fieldType={FormFieldType.INPUT}
                            form={form}
                            name="address"
                            label="Address"
                            placeholder="14 street, New york, NY - 5101"
                        />

                        <CustomFormField
                            fieldType={FormFieldType.INPUT}
                            form={form}
                            name="occupation"
                            label="Occupation"
                            placeholder=" Software Engineer"
                        />
                    </div>

                    {/* Emergency Contact Name & Emergency Contact Number */}
                    <div className="flex flex-col gap-6 xl:flex-row">
                        <CustomFormField
                            fieldType={FormFieldType.INPUT}
                            form={form}
                            name="emergencyContactName"
                            label="Emergency contact name"
                            placeholder="Guardian's name"
                        />

                        <CustomFormField
                            fieldType={FormFieldType.PHONE_INPUT}
                            form={form}
                            name="emergencyContactNumber"
                            label="Emergency contact number"
                            placeholder="(555) 123-4567"
                        />
                    </div>
                </section>

                <section className="space-y-6">
                    <div className="mb-9 space-y-1">
                        <h2 className="sub-header">Medical Information</h2>
                    </div>

                    {/* PRIMARY CARE PHYSICIAN */}
                    {/* <CustomFormField
                        fieldType={FormFieldType.SELECT}
                        form={form}
                        name="primaryPhysician"
                        label="Primary care physician"
                        placeholder="Select a physician"
                    >
                        {Doctors.map((doctor, i) => (
                            <SelectItem key={doctor.name + i} value={doctor.name}>
                                <div className="flex cursor-pointer items-center gap-2">
                                    <Image
                                        src={doctor.image}
                                        width={32}
                                        height={32}
                                        alt="doctor"
                                        className="rounded-full border border-dark-500"
                                    />
                                    <p>{doctor.name}</p>
                                </div>
                            </SelectItem>
                        ))}
                    </CustomFormField> */}

                    {/* INSURANCE & POLICY NUMBER */}
                    {/* <div className="flex flex-col gap-6 xl:flex-row">
                        <CustomFormField
                            fieldType={FormFieldType.INPUT}
                            form={form}
                            name="insuranceProvider"
                            label="Insurance provider"
                            placeholder="BlueCross BlueShield"
                        />

                        <CustomFormField
                            fieldType={FormFieldType.INPUT}
                            form={form}
                            name="insurancePolicyNumber"
                            label="Insurance policy number"
                            placeholder="ABC123456789"
                        />
                    </div> */}

                    {/* ALLERGY & CURRENT MEDICATIONS */}
                    {/* <div className="flex flex-col gap-6 xl:flex-row">
                        <CustomFormField
                            fieldType={FormFieldType.TEXTAREA}
                            form={form}
                            name="allergies"
                            label="Allergies (if any)"
                            placeholder="Peanuts, Penicillin, Pollen"
                        />

                        <CustomFormField
                            fieldType={FormFieldType.TEXTAREA}
                            form={form}
                            name="currentMedication"
                            label="Current medications"
                            placeholder="Ibuprofen 200mg, Levothyroxine 50mcg"
                        />
                    </div> */}

                    {/* FAMILY MEDICATION & PAST MEDICATIONS */}
                    {/* <div className="flex flex-col gap-6 xl:flex-row">
                        <CustomFormField
                            fieldType={FormFieldType.TEXTAREA}
                            form={form}
                            name="familyMedicalHistory"
                            label=" Family medical history (if relevant)"
                            placeholder="Mother had brain cancer, Father has hypertension"
                        />

                        <CustomFormField
                            fieldType={FormFieldType.TEXTAREA}
                            form={form}
                            name="pastMedicalHistory"
                            label="Past medical history"
                            placeholder="Appendectomy in 2015, Asthma diagnosis in childhood"
                        />
                    </div> */}
                {/* </section>

                <section className="space-y-6">
                    <div className="mb-9 space-y-1">
                        <h2 className="sub-header">Identification and Verfication</h2>
                    </div> */}

                    {/* <CustomFormField
                        fieldType={FormFieldType.SELECT}
                        form={form}
                        name="identificationType"
                        label="Identification Type"
                        placeholder="Select identification type"
                    >
                        {IdentificationTypes.map((type, i) => (
                            <SelectItem key={type + i} value={type}>
                                {type}
                            </SelectItem>
                        ))}
                    </CustomFormField> */}

                    {/* <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        form={form}
                        name="identificationNumber"
                        label="Identification Number"
                        placeholder="123456789"
                    /> */}

                    {/* <CustomFormField
                        fieldType={FormFieldType.SKELETON}
                        form={form}
                        name="identificationDocument"
                        label="Scanned Copy of Identification Document"
                        renderSkeleton={(field) => (
                            <FormControl>
                                <FileUploader files={field.value} onChange={field.onChange} />
                            </FormControl>
                        )}
                    /> */}
                {/* </section>

                <section className="space-y-6">
                    <div className="mb-9 space-y-1">
                        <h2 className="sub-header">Consent and Privacy</h2>
                    </div>

                    <CustomFormField
                        fieldType={FormFieldType.CHECKBOX}
                        form={form}
                        name="treatmentConsent"
                        label="I consent to receive treatment for my health condition."
                    />

                    <CustomFormField
                        fieldType={FormFieldType.CHECKBOX}
                        form={form}
                        name="disclosureConsent"
                        label="I consent to the use and disclosure of my health
            information for treatment purposes."
                    />

                    <CustomFormField
                        fieldType={FormFieldType.CHECKBOX}
                        form={form}
                        name="privacyConsent"
                        label="I acknowledge that I have reviewed and agree to the
            privacy policy"
                    /> */}
                </section>
 <Button type="submit" className="">Get Started</Button>
                {/* <SubmitButton isLoading={isLoading}>Submit and Continue</SubmitButton> */}
            </form>
        </Form>
    )
}
