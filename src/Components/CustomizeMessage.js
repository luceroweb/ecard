import coffee_and_slippers from '../images/coffee_and_slippers.webp';

export default function CustomizeMessage({ email, setEmail, greeting, setGreeting, body, setBody, closing, setClosing }) {

  return(
    <>
      <div className="instructions">
        <img src={coffee_and_slippers} alt="coffee and slippers image" className="thumb" />
        <p><strong>How to Reshare:</strong><br />
        Write your own custom message below.</p>
      </div>
      <form>

        <div>
          <label for="email">Recipient Email</label><br />
          <input
            name="email"
            type="text"
            value={email}
            onChange={setEmail}
            placeholder="Recipient Email"
          />
        </div>

        <div>
          <label for="greeting">Greeting</label><br />
          <input
            name="greeting"
            type="text"
            value={greeting}
            onChange={setGreeting}
            placeholder="Greeting"
          />
        </div>

        <div>
          <label for="body">Body</label><br />
          <textarea
            name="body"
            value={body}
            onChange={setBody}
            placeholder="Body"
            rows="3"
          >
          </textarea>
        </div>

        <div>
          <label for="closing">Closing</label><br />
          <input
            name="closing"
            type="text"
            value={closing}
            onChange={setClosing}
            placeholder="Closing"
          />
        </div>

      </form>
    </>
  )
}