import "./style.css";

function Cards(props) {
    return (
        <div className="row">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}
// 2 arrays = one for all employees, one for filtered employees. render filtered.
// handleinputchange works because name=firstName in render()