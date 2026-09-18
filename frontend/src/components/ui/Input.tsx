
type InputProps =React.InputHTMLAttributes<HTMLInputElement> & {
className ?: string
}
export default function Input({className, ...props} : InputProps){
    return(
        <input {...props} className={`border border-border bg-surface text-foreground px-3 py-2 rounded-md focus:outline-none focus:ring-2 disabled:opacity-50 ${className ?? ""}`}/>

      
    )
}