import { NavigateFunction, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { FaSlackHash } from "react-icons/fa";

const Dashboard = () => {

  const navigate: NavigateFunction = useNavigate();

  const tools = [
    {
      title: 'Code Commenting',
      icon: <FaSlackHash />,
    },
    {
      title: 'Code Documentation',
      icon: '📚',
    },
    {
      title: 'Code Analysis',
      icon: '🛠️',
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 min-h-screen p-8 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Welcome to Sidekick AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <button
                onClick={() => navigate(`/tools/${tool.title.toLowerCase().replace(' ', '-')}`)}
                key={index}
                className="bg-white p-6 rounded-md shadow-md text-gray-800 flex flex-col items-center justify-center"
              >
                <span className="text-4xl mb-4">{tool.icon}</span>
                <h3 className="text-lg font-semibold">{tool.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
