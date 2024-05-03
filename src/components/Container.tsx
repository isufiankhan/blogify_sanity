interface Props {
    children:React.ReactNode,
    className?:string,
}

const Container = ({children,className}:Props) => {
    return (
        <div className={`max-w screen-xl mx-6 md:mx-32 ${className}`}>{children}</div>
    )
}

export default Container