import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './pages/Loading';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const CodeCommentTool = lazy(() => import('./pages/CodeCommentTool'));
const CodeAnalysisTool = lazy(() => import('./pages/CodeAnalysisTool'));
const CodeDocumentationTool = lazy(() => import('./pages/CodeDocumentationTool'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />} >
        <Routes>
          <Route path="/sidekick-ai-fe/" element={<Dashboard />} />
          <Route path="/sidekick-ai-fe/tools/code-commenting" element={<CodeCommentTool />} />
          <Route path="/sidekick-ai-fe/tools/code-analysis" element={<CodeAnalysisTool />} />
          <Route path="/sidekick-ai-fe/tools/code-documentation" element={<CodeDocumentationTool />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
