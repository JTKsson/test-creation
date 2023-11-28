import { title } from "process"

const Header = () => {
    return(
        <header role="banner">
            <h1>Welcome to Ellas color randomizer!</h1>
            <button title="randomize colors">{title}</button>
        </header>
    )
}

export default Header