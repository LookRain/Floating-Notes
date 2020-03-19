import * as React from 'react';

// import MonacoEditor from 'react-monaco-editor';
// import { UnControlled as CodeMirror } from 'react-codemirror2';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';

// require('codemirror/mode/xml/xml');
// require('codemirror/mode/javascript/javascript');
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/ext-searchbox';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-protobuf';
import 'ace-builds/src-noconflict/theme-tomorrow_night_eighties';

type Props = {
  defaultValue: string | undefined | null;
  onChange: any;
};
const options = {
  selectOnLineNumbers: true
};
const Editor = (props: Props) => {
  const { defaultValue, onChange } = props;
  const ref = React.createRef();
  const [code, setCode] = React.useState(defaultValue);
  return (
    <>
      <AceEditor
        ref={ref}
        style={{
          // position: 'static',
          height: '100%',
          width: '100%'
        }}
        mode="protobuf"
        theme="tomorrow_night_eighties"
        defaultValue={defaultValue || ''}
        onChange={onChange}
      />
    </>
  );
};

export default React.memo(Editor);
