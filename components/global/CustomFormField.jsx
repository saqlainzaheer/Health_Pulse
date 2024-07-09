"use client"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import 'react-phone-number-input/style.css'
import { Input } from "@/components/ui/input";
import PhoneInput from 'react-phone-number-input'// Assuming you have a Phone component

import Image from "next/image";
// import { useState } from "react";

function CustomFormField({
  form,
  name,
  label,
  iconSrc,
  iconAlt,
  placeholder,
  description,
  fieldType,
}) {
  // const [value, setValue] = useState('');
  const renderField = (field) => {
    switch (fieldType) {
      case "phone":

        
        return <PhoneInput placeholder="Enter phone number"
          value={field.value}
          onChange={field.onChange}
          international
          limitMaxLength
          className="input-phone"
          />
          
      case "input":
      default:
        return (
          <div className="relative flex items-center">
          <Image
            className="absolute mx-2"
            src={iconSrc}
            width={24}
            height={24}
            alt={iconAlt}
          />
          <Input className="pl-10" placeholder={placeholder} {...field} />

          </div>
        );
    }
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {renderField(field)}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default CustomFormField;
