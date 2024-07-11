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
import { FormFieldType } from "../Forms/FormSchema";

import Image from "next/image";
import ReactDatePicker from "react-datepicker";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@radix-ui/react-select";
// import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
// import { Label } from "@radix-ui/react-label";
// import { Label } from "@radix-ui/react-label";
// import { useState } from "react";

function CustomFormField({
 
  form,
  name,
  label,
  iconSrc,
  iconAlt,
  placeholder,
  description,
  renderSkeleton,
  fieldType,
  children
}) {
  // const [value, setValue] = useState('');
  const renderField = (field) => {
    switch (fieldType) {
      case FormFieldType.PHONE:
        return <PhoneInput placeholder="Enter phone number"
          value={field.value}
          onChange={field.onChange}
          international
          limitMaxLength
          // disable={disable}
          className="input-phone"
        />

      case FormFieldType.INPUT:
        return (
          <div className="relative flex w-full items-center">
            {iconSrc &&
            <Image
              className="absolute mx-2"
              src={iconSrc}
              width={24}
              height={24}
              alt={iconAlt}
            />}
            <Input className={iconSrc?"pl-10":"" }  placeholder={placeholder} {...field} />

          </div>
        );
      case FormFieldType.DATE_PICKER:
        return (
          <div className="relative flex w-full items-center">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="user"
              className="absolute mx-2"
            />

            <ReactDatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy"
              wrapperClassName="date-picker"
            />

          </div>
        );
      case FormFieldType.SKELETON:
        return renderSkeleton ? renderSkeleton(field) : null;
      case FormFieldType.SELECT:
        return (
            
              <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger
              className="shad-select-trigger">
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                <SelectContent className="shad-select-content">
                  {children}
                </SelectContent>
              </Select>
           
          );
        
        
      default:
        return (
          <div className="relative flex w-full items-center">
            <Image
              className="absolute mx-2"
              src={iconSrc}
              width={24}
              height={24}
              alt={iconAlt}
            />
            <Input className="pl-10"  placeholder={placeholder} {...field} />

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
