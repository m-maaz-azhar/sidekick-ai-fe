import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Sidekick AI</h1>
                <nav className="space-x-4">
                    <Link to="/" className="hover:underline">All Tools</Link>
                    <Link to="/tools/code-commenting" className="hover:underline">Code Commenting</Link>
                    <Link to="/tools/code-analysis" className="hover:underline">Code Analysis</Link>
                    <Link to="/tools/code-documentation" className="hover:underline">Code Documentation</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
