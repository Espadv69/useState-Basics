const LiExplanation = ({ stepNumber, description, imgUrl, imgAlt }) => {
  return (
    <li className="explanation__list-item">
      <p>
        <strong>{stepNumber}.</strong> {description}
      </p>
      <img className="explanation__list-image" src={imgUrl} alt={imgAlt} />
    </li>
  )
}

export default LiExplanation
