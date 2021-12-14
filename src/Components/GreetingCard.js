import coffee_and_slippers from '../images/coffee_and_slippers.webp';
import '../App.css';

function GreetingCard({ greeting, body, closing, setCustomize, preview, setPreview }) {

  const continueEditing = () => {
    setCustomize(true);
    setPreview(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={coffee_and_slippers} className="App-logo" alt="coffee and slippers" />
        <p>
          {greeting}
        </p>
        <p>{body}</p>
        <p>{closing}</p>
        {preview
          ? <div>
            <button onClick={continueEditing}>
              Continue Editing
            </button>
          </div>
          : <button
          className="App-link"
          onClick={() => setCustomize(true)}
          >
            Reshare This Card
          </button>
        }
      </header>
    </div>
  );
}

export default GreetingCard;
