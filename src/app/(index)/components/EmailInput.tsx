"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { FocusEvent, useState } from "react"
import ErrorCircle from "./icons/ErrorCircle";

const EmailInput = () => {
  const [isPlaceholderOnTop, setIsPlaceholderOnTop] = useState(false)
  const [showValidation, setShowValidation] = useState(false)
  
  const onInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    
    if (inputValue !== "") {
      setIsPlaceholderOnTop(true)
      setShowValidation(inputValue.indexOf("@") === -1)
      
      return
    }
    
    setIsPlaceholderOnTop(e.type === "focus")
    setShowValidation(false)
  }
  
  return (
    <div className="w-full text-start">
      <Label
        className="font-NetflixSansRegular text-home-input-label text-base absolute mt-4 ml-4 data-placeholder-position:mt-[8px] data-placeholder-position:text-xs transition-input duration-200"
        data-placeholder-position={isPlaceholderOnTop ? "top" : "input"}
      >
        Email address
      </Label>
      <Input
        className={`h-full bg-home-input border rounded px-4 pt-6 pb-2 text-base font-NetflixSansRegular ${showValidation ? "border-input-validation" : "border-home-input-border"}`}
        onFocus={onInputFocus}
        onBlur={onInputFocus}
      />
      {showValidation && (
        <p className="absolute text-[13px] font-NetflixSansRegular mt-2 text-input-validation">
          <ErrorCircle className="inline-block align-text-top mr-1" />
          Email is required.
        </p>
      )}
    </div>
  )
}

export default EmailInput