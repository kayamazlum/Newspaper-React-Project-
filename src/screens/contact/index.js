const { default: Link } = require("next/link")

const ContactScreen = ()=>{
    return(
        <div>
            <p>Contact Page</p>
            <Link href={"/"}>Home Page</Link>
        </div>
    )
}

export default ContactScreen