import { z } from "zod"

export const FormFieldType = {
  INPUT : "input",
  TEXTAREA : "textarea",
  PHONE : "phone",
  CHECKBOX : "checkbox",
  DATE_PICKER : "datePicker",
  SELECT : "select",
  SKELETON : "skeleton"
}
// //register form default values and validation
export const registerFormValidation = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
    phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number")
   

})
export const rigesterFormDefaultValues = {
  name:"s",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" ,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};




