import React from "react";
import './App.css'
import { useState, useEffect } from "react";

function App() {
  const [result, setresult] = useState("")

  const clickhandler = (event) => {
    setresult(result.concat(event.target.value));
  };

  const cleardisplay = () => {
    setresult('');
  }

  const add = (event) => {
    const lastChar = result.charAt(result.length - 1);
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
      setresult(result.slice(0, -1).concat(event.target.value));
    } else if (lastChar === ".") {
      setresult(result);
    } else {
      setresult(result.concat(event.target.value));
    }
  };
  const sub = (event) => {
    const lastChar = result.charAt(result.length - 1);
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
      setresult(result.slice(0, -1).concat(event.target.value));
    } else if (lastChar === ".") {
      setresult(result);
    } else {
      setresult(result.concat(event.target.value));
    }
  };
  const mul = (event) => {
    const lastChar = result.charAt(result.length - 1);
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
      setresult(result.slice(0, -1).concat(event.target.value));
    } else if (lastChar === ".") {
      setresult(result);
    } else {
      setresult(result.concat(event.target.value));
    }
  };
  const div = (event) => {
    const lastChar = result.charAt(result.length - 1);
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
      setresult(result.slice(0, -1).concat(event.target.value));
    } else if (lastChar === ".") {
      setresult(result);
    } else {
      setresult(result.concat(event.target.value));
    }
  };

  const calculate = () => {
    setresult(eval(result).toString());
  }
  const backspace = () => {
    setresult(result.slice(0, -1));
  };
  const handleKeyDown = (event) => {
    const key = event.key;
    const lastChar = result.charAt(result.length - 1);

    if (
      (key >= "0" && key <= "9") ||
      key === "+" ||
      key === "-" ||
      key === "*" ||
      key === "/" ||
      key === "." ||
      key === "(" ||
      key === ")"
    ) {
      if (key === '+') {
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
          setresult(result.slice(0, -1).concat(key));
        } else if (lastChar === ".") {
          setresult(result);
        } else {
          setresult(result.concat(key));
        }
      } else if (key === '-') {
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
          setresult(result.slice(0, -1).concat(key));
        } else if (lastChar === ".") {
          setresult(result);
        } else {
          setresult(result.concat(key));
        }

      } else if (key === '*') {
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
          setresult(result.slice(0, -1).concat(key));
        } else if (lastChar === ".") {
          setresult(result);
        } else {
          setresult(result.concat(key));
        }

      } else if (key === '/') {
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
          setresult(result.slice(0, -1).concat(key));
        } else if (lastChar === ".") {
          setresult(result);
        } else {
          setresult(result.concat(key));
        }

      } else {
        setresult(result.concat(key));
      }


    }
    else if (key === "Backspace") {
      setresult(result.slice(0, -1));
    } else if (key === "Enter" || key === '=') {
      calculate();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <div className="calc">
        <h1 id="nameta">Calculator</h1>
        <input type="text" placeholder="0" id="answer" value={result} />
        <input type="button" value="9" className="button" onClick={clickhandler} />
        <input type="button" value="8" className="button" onClick={clickhandler} />
        <input type="button" value="7" className="button" onClick={clickhandler} />
        <input type="button" value="/" className="button button2" onClick={div} />
        <input type="button" value="6" className="button" onClick={clickhandler} />
        <input type="button" value="5" className="button" onClick={clickhandler} />
        <input type="button" value="4" className="button" onClick={clickhandler} />
        <input type="button" value="*" className="button button2" onClick={mul} />
        <input type="button" value="3" className="button" onClick={clickhandler} />
        <input type="button" value="2" className="button" onClick={clickhandler} />
        <input type="button" value="1" className="button" onClick={clickhandler} />
        <input type="button" value="-" className="button button2" onClick={sub} />
        <input type="button" value="0" className="button" onClick={clickhandler} />
        <input type="button" value="00" className="button" onClick={clickhandler} />
        <input type="button" value="." className="button" onClick={clickhandler} />
        <input type="button" value="+" className="button button2" onClick={add} />
        <input type="button" id="clear" value="Clear" className="button" onClick={cleardisplay} />
        <input type="button" id="backspace" value="backspace" className="button" onClick={backspace} />
        <input type="button" value="=" className="button button1 button2" onClick={calculate} />



      </div>
    </>
  );
}
export default App;