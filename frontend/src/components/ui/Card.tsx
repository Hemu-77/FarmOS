

type CardProps = {
    children : React.ReactNode,
    className ?: string
}

export default function Card({children, className} : CardProps){
    return(
        <div className={`bg-surface border border-border rounded-xl p-5 shadow-sm ${className ?? ""}`}>
            {children}
        </div>
    )
}