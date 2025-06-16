export default function Section({title,children,id}){
    return <section id={id}>
        <h2>{title}</h2>
        {children}
    </section>
}

//Alternative way to collect forward wrap by ...props
// export default function Section({title,children,...props}){
//     return <section {...props}>
//         <h2>{title}</h2>
//         {children}
//     </section>
// }