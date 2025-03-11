import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <div className="explanation">
      <ol className="ol__explanation">
        <LiExplanation
          stepNumber={1}
          description="Init the state with the value of the user's preference"
          imgUrl="/images/initHook.png"
          imgAlt="It is a code snippet that shows how to initialize a state with the value of the user preference"
        />

        <LiExplanation
          stepNumber={2}
          description="Create a function to toggle the theme"
          imgUrl="/images/toggleTheme.png"
          imgAlt="It is a code snippet that shows how to create a function to toggle the theme"
        />

        <LiExplanation
          stepNumber={3}
          description="Add html structure to display the toggle button"
          imgUrl="/images/htmlStructure.png"
          imgAlt="It is a code snippet that shows the html structure to display the toggle button"
        />

        <LiExplanation
          stepNumber={4}
          description="Add styles to the div that changes the background color"
          imgUrl="/images/cssStructure.png"
          imgAlt="It is a code snippet that shows the css structure to change the background color"
        />
      </ol>
    </div>
  )
}

export default Explanation
