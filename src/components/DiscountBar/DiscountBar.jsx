const DiscountBar = (props) => {
    return(
        <div id="discountBar" className="d-flex justify-content-center align-items-center">
            <a className="tex-white" href=" {props.link} "> {props.label} </a>
        </div>
    )
}

export default DiscountBar