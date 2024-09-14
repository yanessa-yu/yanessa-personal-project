"use client"
import Editor from "@monaco-editor/react";

 function monaco () {
    return (
        <main>
            <div>
            <Editor
              height="50vh"
              width="100vw"
              defaultLanguage="javascript"
              defaultValue='let a = 1'
            />
            </div>
        </main>
    )
}

export default monaco