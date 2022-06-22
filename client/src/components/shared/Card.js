import { useToggle } from "../../hooks"

const Card = (props) => {
    const { isToggleed: show, toggle } = useToggle(true)
    return (
        <div className="demo-container">
            <h3>{props.header}</h3>
            <div className="demo-body">

                {props.children}
            </div>
        </div>
    )
}

const CardContainer = styled.div`

`


export default Card