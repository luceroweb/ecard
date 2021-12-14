import coffee_and_slippers from '../images/coffee_and_slippers.webp';

export default function CustomizeMessage({ email, setEmail, greeting, setGreeting, body, setBody, closing, setClosing, setPreview, setCustomize }) {

  const onSubmit = (event) => {
    event.preventDefault();
    setPreview(true);
    setCustomize(false);
  }

  return(
    <>
      <div className="instructions">
        <img src={coffee_and_slippers} alt="coffee and slippers" className="thumb" />
        <p><strong>How to Reshare:</strong><br />
        Write your own custom message below.</p>
      </div>
      <form>

        <div>
          <label htmlFor="email">Recipient Email</label><br />
          <input
            name="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Recipient Email"
          />
        </div>

        <div>
          <label htmlFor="greeting">Greeting</label><br />
          <input
            name="greeting"
            type="text"
            value={greeting}
            onChange={(event) => setGreeting(event.target.value)}
            placeholder="Greeting"
          />
        </div>

        <div>
          <label htmlFor="body">Body</label><br />
          <textarea
            name="body"
            value={body}
            onChange={event => setBody(event.target.value)}
            placeholder="Body"
            rows="3"
          >
          </textarea>
        </div>

        <div>
          <label htmlFor="closing">Closing</label><br />
          <input
            name="closing"
            type="text"
            value={closing}
            onChange={event => setClosing(event.target.value)}
            placeholder="Closing"
          />
        </div>

        <button type="submit" onClick={onSubmit}>Preview Greeting Card</button>

      </form>
    </>
  )
}