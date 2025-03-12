import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <section className="explanation">
      <ol className="ol__explanation">
        <LiExplanation
          stepNumber={1}
          description="Initialize a constant array with the initial list of items."
          imgUrl="/images/initialList.png"
          imgAlt="code snippet of an array with 5 items"
        />
      </ol>
    </section>
  )
}

export default Explanation
