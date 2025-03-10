import './Explanation.css'

const Explanation = () => {
  return (
    <div className="explanation">
      <h2>How to use this counter</h2>

      <ol className="ol__explanation">
        <li className="li__explanation">
          <p>
            <strong>1.</strong> Create a state variable to handle the counter
            value.
          </p>
          <img
            src="/images/initHook.png"
            alt="code that shows how to create a hook to handle counter value"
            className="img__explanation"
          />
        </li>
      </ol>
    </div>
  )
}

export default Explanation
