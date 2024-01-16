import { useState } from 'react'
import Header from '../components/Header'
import CodeEditor from '../components/CodeEditor'
import { commentCode } from '../apis/openai'

export default function CodeCommentTool() {

  const [code, setCode] = useState('')
  const [generatedCode, setGeneratedCode] = useState('')
  const [loading, setLoading] = useState(false)

  const generateCode = async (code: string) => {
    if (loading) return;
    try {
      setLoading(true);
      const data = await commentCode(code);
      setGeneratedCode(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 min-h-screen p-8 text-white">
        <h4 className="text-2xl font-bold mb-8">Code Commenting Tool</h4>
        <div className="grid grid-cols-2 grid-rows-2 h-screen gap-4">
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
              <h4 className="text-[18px] font-normal">Generated Code:</h4>
              <button
                onClick={() => navigator.clipboard.writeText(generatedCode)}
                className="bg-white p-2 rounded-md shadow-md text-gray-800 flex flex-col items-center justify-center"
              >
                Copy
              </button>
            </div>
            <CodeEditor value={generatedCode} setValue={setGeneratedCode} />
          </div>
        </div>
      </div>
    </>
  )
}
