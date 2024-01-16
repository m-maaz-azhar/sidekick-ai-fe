import Editor from '@monaco-editor/react';

interface CodeEditorProps {
    value?: string;
    setValue: any;
    height?: string;
}

const CodeEditor = ({ value, setValue, height }: CodeEditorProps) => {
    return (
        <Editor
            value={value}
            onChange={(e) => setValue(e)}
            height={height || '80vh'}
            defaultValue="// some comment"
            theme="vs-dark"
        />
    );
};

export default CodeEditor;