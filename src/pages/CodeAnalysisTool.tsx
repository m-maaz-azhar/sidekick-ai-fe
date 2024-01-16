import { useState } from 'react'
import Header from '../components/Header'
import CodeEditor from '../components/CodeEditor'
import { analyzeCode } from '../apis/openai'

export default function CodeAnalysisTool() {

  const [code, setCode] = useState('')
  const [generatedCode, setGeneratedCode] = useState('')
  const [instructions, setInstructions] = useState('');
  const [loading, setLoading] = useState(false)

  const generateCode = async (code: string) => {
    if (loading) return;
    try {
      setLoading(true);
      const data = await analyzeCode(code);
      setGeneratedCode(data?.improvedCode);
      setInstructions(data?.instructions);
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
        <h4 className="text-2xl font-bold mb-8">Code Analysis Tool</h4>
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
            <CodeEditor value={generatedCode} setValue={setGeneratedCode} height="45vh" />
            <h4 className="text-[18px] font-normal my-3">Usefull Tips:</h4>
            {instructions?.split('\n')?.map((instruction, index) => (
              <p key={index} className="text-sm">{instruction}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
