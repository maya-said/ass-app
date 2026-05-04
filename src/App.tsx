import React from "react";
import Login from './fratures/auth/login/login';
import AuthLayout from './layouts/AuthLayout';
import AuthComponent from "./layouts/AuthLayout";


const App: React.FC = () => {
  return (
      <div className="min-h-screen bg-gray-100">

      {/* Main Content */}
      <main className="flex items-center justify-center py-10">
        <AuthComponent />
      </main>
    </div>
  );
};

export default App;