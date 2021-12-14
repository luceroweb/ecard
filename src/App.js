import './App.css';
import GreetingCard from './Components/GreetingCard';
import CustomizeMessage from './Components/CustomizeMessage';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [greeting, setGreeting] = useState('Dear Mom,');
  const [body, setBody] = useState('Have a comforting and joyous holiday!');
  const [closing, setClosing] = useState('Love, your son Juan');
  const [customize, setCustomize] = useState(false);
  const [preview, setPreview] = useState(false);

  return (
    <>
    {customize
      ? <CustomizeMessage
        email={email}
        setEmail={setEmail}
        greeting={greeting}
        setGreeting={setGreeting}
        body={body}
        setBody={setBody}
        closing={closing}
        setClosing={setClosing}
        setPreview={setPreview}
        setCustomize={setCustomize}
      />
      : <GreetingCard
        email={email}
        greeting={greeting}
        body={body}
        closing={closing}
        setCustomize={setCustomize}
        preview={preview}
        setPreview={setPreview}
      />
    }
    </>
  );
}

export default App;
