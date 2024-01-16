import { useState } from 'react'
import Header from '../components/Header'
import CodeEditor from '../components/CodeEditor'
import { documentCode } from '../apis/openai'

export default function CodeDocumentationTool() {

  const [code, setCode] = useState('')
  const [generatedDoc, setGeneratedDoc] = useState(``)
  const [loading, setLoading] = useState(false)

  const generateCode = async (code: string) => {
    if (loading) return;
    try {
      setLoading(true);
      const data = await documentCode(code);
      setGeneratedDoc(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const DownloadAsHTML = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedDoc], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = "code-documentation.html";
    document.body.appendChild(element);
    element.click();
  }

  const DownloadAsMarkdown = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedDoc], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = "code-documentation.md";
    document.body.appendChild(element);
    element.click();
  }

  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 min-h-screen p-8 text-white">
        <h4 className="text-2xl font-bold mb-8">Code Documentation Tool</h4>
        <div className="grid grid-cols-2 grid-rows-2 min-h-screen gap-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-[18px] font-normal">Your Code:</h4>
              <button
                onClick={() => generateCode(code)}
                className="bg-white p-2 rounded-md shadow-md text-gray-800 flex flex-col items-center justify-center">
                {loading ? 'Generating...' : 'Generate'}
              </button>
            </div>
            <CodeEditor value={code} setValue={setCode} />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-[18px] font-normal mb-2">Generated Documentation:</h4>
              <div className="flex gap-2">
                <button className="bg-white p-2 rounded-md shadow-md text-gray-800 flex flex-col items-center justify-center" onClick={DownloadAsHTML}>
                  Download as HTML
                </button>
                <button className="bg-white p-2 rounded-md shadow-md text-gray-800 flex flex-col items-center justify-center" onClick={DownloadAsMarkdown}>
                  Download as Markdown
                </button>
              </div>
            </div>
            <div className='bg-white p-2 rounded-md shadow-md max-w-[50vw] overflow-x-auto overflow-y-auto min-h-[80vh]'>
              <div id='documentation' dangerouslySetInnerHTML={{ __html: generatedDoc }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
