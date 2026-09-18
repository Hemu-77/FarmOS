
type ButtonProps = {
    children : React.ReactNode,
    type ?: "submit" | "reset" | "button",
    onClick ?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    disabled ?: boolean,
    className ?: string
}



export default function Button({children, type="button", onClick, disabled=false, className} : ButtonProps ){
   return(
        <button className={`bg-primary text-white px-4 py-2 rounded-md font-medium ${className ?? ""}`} type={type} onClick={onClick} disabled={disabled}>
            {children}
        </button>
   )
}