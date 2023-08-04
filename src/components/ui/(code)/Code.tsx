'use client'

import { Highlight, themes } from "prism-react-renderer"
import { python } from "@/helpers/code/python"

export const Code = () => (
    <Highlight
      theme={themes.nightOwl}
      code={python}
      language="tsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })}>
            
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
    
  )  

export default Code