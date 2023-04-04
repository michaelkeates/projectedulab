import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { csharp } from "@replit/codemirror-lang-csharp";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
//import { linter } from "@codemirror/lint";

import {
  Grid,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import {
  MdFullscreen,
  MdLanguage,
  MdContentCopy,
  MdClear,
} from "react-icons/md";

function CodeEditor() {
  const [code, setCode] = useState("console.log('hello world!');");
  const [language, setLanguage] = useState("javascript");

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
    setCode(value);
  }, []);

  const handleLanguageChange = (language) => {
    setLanguage(language);
    switch (language) {
      case "javascript":
        setCode(`console.log('hello world!');`);
        break;
      case "python":
        setCode(`print("hello world!")`);
        break;
      case "csharp":
        setCode(`Console.WriteLine("hello world!");`);
        break;
      case "html":
        setCode(
          `<html>\n  <head>\n    <title>Hello World</title>\n  </head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>`
        );
        break;
      case "css":
        setCode(`h1 {\n  color: red;\n}`);
        break;
      case "kotlin":
        setCode(`fun main() {\n  println("Hello, World!")\n}`);
        break;
      default:
        setCode(`console.log('hello world!');`);
        break;
    }
  };

  const getLanguage = () => {
    switch (language) {
      case "javascript":
        return javascript({ jsx: true });
      case "python":
        return python();
      case "html":
        return html();
      case "css":
        return css();
      case "csharp":
        return csharp();
      case "kotlin":
        return javascript({ jsx: true });
      default:
        return javascript({ jsx: true });
    }
  };

  return (
    <div>
      <Grid
        position="absolute"
        top={4}
        right={6}
        templateColumns="repeat(1, max-content)"
        columnGap={4}
      >
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Language"
            icon={<MdLanguage />}
          />
          <MenuList>
            <MenuItem onClick={() => handleLanguageChange("javascript")}>
              JavaScript
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange("python")}>
              Python
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange("csharp")}>
              C#
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange("html")}>
              HTML
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange("css")}>CSS</MenuItem>
            <MenuItem onClick={() => handleLanguageChange("kotlin")}>
              Kotlin
            </MenuItem>
          </MenuList>
        </Menu>
      </Grid>
        <CodeMirror
          value={code}
          height="80vh"
          width="80vw"
          extensions={[getLanguage()]}
          onChange={onChange}
        />
    </div>
  );
}

export default CodeEditor;
