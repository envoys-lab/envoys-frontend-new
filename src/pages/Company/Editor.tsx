import Draft from 'draft-js';
import React from 'react';
import 'draft-js/dist/Draft.css';

function Editor() {
  const [editorState, setEditorState] = React.useState(() => Draft.EditorState.createEmpty());

  return <Draft.Editor editorState={editorState} onChange={setEditorState} />;
}

export default Editor;
