import { useContext } from "react"

const ThemeContext = React.createContext('light')


function App () {
    return (
        <ThemeContext.Provider value='dark'>
            <UserContext.Provider value="???"/>
            <ToolBar />
        </ThemeContext.Provider>
    )
}

function ToolBar() {
    return (
        <div>
            <ThemeButton />
        </div>
    )
}
function ThemeButton(props) {
    return(
        <ThemeContext.Consumer>
            {vlaue => <button theme={value} />}
        </ThemeContext.Consumer>
    )
}

//ok
useContext(MyContext)

// 잘못된 사용법
useContext(MyContext.Consumer)
useContext(MyContext.Provider)

