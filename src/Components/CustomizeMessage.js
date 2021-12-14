import coffee_and_slippers from '../images/coffee_and_slippers.webp';

export default function CustomizeMessage() {

  return(
    <>
      <div className="instructions">
        <img src={coffee_and_slippers} alt="coffee and slippers image" className="thumb" />
        <p><strong>How to Reshare:</strong><br />
        Write your own custom message below.</p>
      </div>
    </>
  )
}