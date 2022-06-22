import { useState } from "react"

// When create a hook your hook name must begin with use
export const useToggle = (initialState) => {
    const [isToggled, setIsToggled] = useState(initialState)

    const toggle = () => {
        setIsToggled(!isToggled)
    }

    return { isToggled, toggle, setIsToggled }
}
