import './Styles.css'
export const Button = ({ textButton, className, hanldeClik }) => {
    return (
        <div>
            <button onClick={hanldeClik} className={`btnBackground ${className}`}>{textButton}</button>
        </div>
    )
}