"use client"
import { CustomButtonProps } from "@/types"
import Image from "next/image"

//Butonun sahip olabileceği parametreleri types/index' te tanımladık
// şimdi bu değerleri giriş parametresi olarak tanımlayıp
//butona type'ı eşleştirdik ve Hero.tsx'de örnek olarak görünüyor 
const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }: CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}}`}
    onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  )
}

export default CustomButton