
import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
//import { jsx } from '@codemirror/lang-jsx';
import { python } from '@codemirror/lang-python';
import { csharp } from "@replit/codemirror-lang-csharp";

function CodeEditor() {
  const [code, setCode] = useState("console.log('hello world!');");
  const [language, setLanguage] = useState('javascript');

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
    setCode(value);
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const getLanguage = () => {
    switch (language) {
      case 'javascript':
        return javascript({ jsx: true });
      //case 'jsx':
        //return jsx();
      case 'python':
        return python();
      case 'csharp':
        return csharp();
      default:
        return javascript({ jsx: true });
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="language-select">Select Language: </label>
        <select id="language-select" value={language} onChange={handleLanguageChange}>
          <option value="javascript">JavaScript</option>
          <option value="jsx">JSX</option>
          <option value="python">Python</option>
          <option value="csharp">C#</option>
        </select>
      </div>
      <div style={{ display: 'flex' }}>
        <CodeMirror
          value={code}
          height="500px"
          width="500px"
          extensions={[getLanguage()]}
          onChange={onChange}
        />
        <div style={{ flex: 1, overflow: 'auto', padding: '10px' }}>
          <pre>{code}</pre>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;

