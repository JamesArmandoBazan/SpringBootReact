import React, {useEffect, useState} from 'react';
import './App.css';
import Navigation from "./components/navigation/Navigation";

export const App: React.FC = () => {
    const [error, setError] = useState(null);
    const [displayText, setDisplayText] = useState('Mister');

      useEffect(() => {
        fetch("http://localhost:8080/greeting")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setDisplayText(result.content);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  console.log(error);
                  setError(error);
                }
            )
      }, [])

    if (error) {
        return (
            <div className="App">
                ERROR
            </div>
        );
    } else {
        return (
            <div className="App">
                <Navigation />
            </div>
        );
    }


}

export default App;
