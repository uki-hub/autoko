type props = {
    className?: string
}

const Card = (props: React.PropsWithChildren<props>) => {
    return <div className={`rounded-md px-3 py-2 border overflow-hidden ${props.className}`}>
        {props.children}
    </div>;
}
 
export default Card;