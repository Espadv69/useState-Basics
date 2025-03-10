const LiExplanation = ({ stepNumber, description, imageSrc, imageAlt }) => {
  return (
    <li className="li__explanation">
      <p>
        <strong>{stepNumber}.</strong> {description}
      </p>
      <img src={imageSrc} alt={imageAlt} className="img__explanation" />
    </li>
  )
}

export default LiExplanation
