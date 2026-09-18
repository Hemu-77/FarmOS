

type AlertProps = {
    children ?: React.ReactNode,
    variant : "error" | "success" | "info" | "warning"
}

const variantStyles = {
    error : "border bg-red-50 text-danger border-red-200",
    success : "border bg-green-50 text-success border-green-200",
    info : "border bg-green-50 text-primary border-green-200",
    warning : "border bg-amber-50 text-warning border-orange-200"
}

export default function Alert({children, variant} : AlertProps){
    return(
        <div className={`text-sm rounded-md px-3 py-2 ${variantStyles[variant]}`}>
            {children}
        </div>
    )

}