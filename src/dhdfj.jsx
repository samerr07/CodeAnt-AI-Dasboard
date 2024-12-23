// import React, { useState } from 'react';
// import { Search, Settings, Cloud, LogOut, HelpCircle, RefreshCw, Plus, House, Phone } from 'lucide-react';

// const App = () => {
//   const [repositories] = useState([
//     {
//       name: 'design-system',
//       language: 'React',
//       size: '7320 KB',
//       visibility: 'Public',
//       updatedAt: '1 day ago',
//       collaborators: ['G']
//     },
//     {
//       name: 'codeant-ci-app',
//       language: 'Javascript',
//       size: '5871 KB',
//       visibility: 'Private',
//       updatedAt: '2 days ago',
//       collaborators: ['2']
//     },
//     {
//       name: 'analytics-dashboard',
//       language: 'Python',
//       size: '4521 KB',
//       visibility: 'Private',
//       updatedAt: '5 days ago',
//       collaborators: ['V', 'S']
//     },
//     {
//       name: 'mobile-app',
//       language: 'Swift',
//       size: '3096 KB',
//       visibility: 'Public',
//       updatedAt: '3 days ago',
//       collaborators: []
//     },
//     {
//       name: 'e-commerce-platform',
//       language: 'Java',
//       size: '6210 KB',
//       visibility: 'Private',
//       updatedAt: '6 days ago',
//       collaborators: ['S']
//     },
//     {
//       name: 'blog-website',
//       language: 'HTML/CSS',
//       size: '1876 KB',
//       visibility: 'Public',
//       updatedAt: '4 days ago',
//       collaborators: []
//     },
//     {
//       name: 'social-network',
//       language: 'PHP',
//       size: '5432 KB',
//       visibility: 'Private',
//       updatedAt: '7 days ago',
//       collaborators: []
//     }
//   ]);

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="w-64 bg-white border-r border-gray-200 p-4">
//         <div className="flex items-center mb-8">
//           {/* <div className="w-8 h-8 bg-gray-800 rounded-full mr-2"></div> */}
//           <img className="w-8 h-8  mr-2" src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww" alt="" />
//           <h1 className="text-xl font-semibold">CodeAnt AI</h1>
//         </div>

//         <div className="space-y-2">
//           <div className="flex items-center p-2 bg-blue-600 text-white rounded-lg">
//             <code className="mr-2"><House /></code>
//             <span>Repositories</span>
//           </div>

//           <div className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
//             <code className="mr-2">&lt;/&gt;</code>
//             <span>AI Code Review</span>
//           </div>

//           <div className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
//             <Cloud className="w-5 h-5 mr-2" />
//             <span>Cloud Security</span>
//           </div>

//           <div className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
//             <HelpCircle className="w-5 h-5 mr-2" />
//             <span>How to Use</span>
//           </div>

//           <div className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
//             <Settings className="w-5 h-5 mr-2" />
//             <span>Settings</span>
//           </div>
//         </div>

//         <div className="absolute bottom-4 space-y-2">
//           <div className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
//             <Phone className="w-5 h-5 mr-2" />
//             <span>Support</span>
//           </div>

//           <div className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
//             <LogOut className="w-5 h-5 mr-2" />
//             <span>Logout</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-5 h-screen">
//         <div className='border bg-white border-gray-200 rounded-xl p-4 mb-4'>
//           <div className="flex justify-between items-center mb-5">
//             <div className="flex items-center">
//               <h2 className="text-xl font-semibold mr-2">Repositories</h2>
//               <span className="text-gray-500 text-sm">33 total repositories</span>
//             </div>

//             <div className="flex items-center space-x-4">
//               <button className="flex items-center text-gray-600 hover:text-gray-900">
//                 <RefreshCw className="w-5 h-5 mr-1" />
//                 Refresh All
//               </button>
//               <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                 <Plus className="w-5 h-5 mr-1" />
//                 Add Repository
//               </button>
//             </div>
//           </div>

//           <div className="mb-5">
//             <div className="relative">
//               <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search Repositories"
//                 className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           <div >
//             {repositories.map((repo, index) => (
//               <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <div className="flex items-center ">
//                       <h3 className="text-lg font-medium text-gray-900 mr-2">{repo.name}</h3>
//                       <span className={`px-2 py-1 text-xs rounded-full ${repo.visibility === 'Public' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
//                         }`}>
//                         {repo.visibility}
//                       </span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <span className="flex items-center mr-4">
//                         <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
//                         {repo.language}
//                       </span>
//                       <span className="mr-4">{repo.size}</span>
//                       <span>Updated {repo.updatedAt}</span>
//                     </div>
//                   </div>


//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import {
  Search,
  Settings,
  Cloud,
  LogOut,
  HelpCircle,
  RefreshCw,
  Plus,
  House,
  Phone,
  Menu,
  X,
} from "lucide-react";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [repositories] = useState([
    {
      name: "design-system",
      language: "React",
      size: "7320 KB",
      visibility: "Public",
      updatedAt: "1 day ago",
      collaborators: ["G"],
    },
    {
      name: "codeant-ci-app",
      language: "Javascript",
      size: "5871 KB",
      visibility: "Private",
      updatedAt: "2 days ago",
      collaborators: ["2"],
    },
    {
      name: "analytics-dashboard",
      language: "Python",
      size: "4521 KB",
      visibility: "Private",
      updatedAt: "5 days ago",
      collaborators: ["V", "S"],
    },
    {
      name: "mobile-app",
      language: "Swift",
      size: "3096 KB",
      visibility: "Public",
      updatedAt: "3 days ago",
      collaborators: [],
    },
    {
      name: "e-commerce-platform",
      language: "Java",
      size: "6210 KB",
      visibility: "Private",
      updatedAt: "6 days ago",
      collaborators: ["S"],
    },
    {
      name: "blog-website",
      language: "HTML/CSS",
      size: "1876 KB",
      visibility: "Public",
      updatedAt: "4 days ago",
      collaborators: [],
    },
    {
      name: "social-network",
      language: "PHP",
      size: "5432 KB",
      visibility: "Private",
      updatedAt: "7 days ago",
      collaborators: [],
    },
  ]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed z-20 inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:relative md:translate-x-0 w-64 bg-white border-r border-gray-200 p-4`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <img
              className="w-8 h-8 mr-2"
              src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww"
              alt="Logo"
            />
            <h1 className="text-xl font-semibold">CodeAnt AI</h1>
          </div>
          
        </div>

        <div className="space-y-2">
          <div className="flex items-center p-2 bg-blue-600 text-white rounded-lg">
            <House className="mr-2" />
            <span>Repositories</span>
          </div>
          <div className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
            <code className="mr-2">&lt;/&gt;</code>
            <span>AI Code Review</span>
          </div>
          <div className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Cloud className="w-5 h-5 mr-2" />
            <span>Cloud Security</span>
          </div>
          <div className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
            <HelpCircle className="w-5 h-5 mr-2" />
            <span>How to Use</span>
          </div>
          <div className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Settings className="w-5 h-5 mr-2" />
            <span>Settings</span>
          </div>
        </div>

        <div className="absolute bottom-4 space-y-2 hidden md:block">
          <div className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Phone className="w-5 h-5 mr-2" />
            <span>Support</span>
          </div>
          <div className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
            <LogOut className="w-5 h-5 mr-2" />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 h-screen overflow-auto">
        <button
          className="md:hidden mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={toggleSidebar}
        >
          <Menu className="w-5 h-5 mr-2 inline" />
          Menu
        </button>
        <div className="border bg-white border-gray-200 rounded-xl p-4 mb-4">
          <div className="flex flex-wrap justify-between items-center mb-5">
            <div className="flex items-center mb-2 md:mb-0">
              <h2 className="text-xl font-semibold mr-2">Repositories</h2>
              <span className="text-gray-500 text-sm">
                33 total repositories
              </span>
            </div>
            <div className="flex flex-wrap items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-gray-900 mb-2 md:mb-0">
                <RefreshCw className="w-5 h-5 mr-1" />
                Refresh All
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Plus className="w-5 h-5 mr-1" />
                Add Repository
              </button>
            </div>
          </div>
          <div className="mb-5">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search Repositories"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            {repositories.map((repo, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-lg font-medium text-gray-900 mr-2">
                        {repo.name}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          repo.visibility === "Public"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {repo.visibility}
                      </span>
                    </div>
                    <div className="flex flex-wrap text-sm text-gray-500">
                      <span className="flex items-center mr-4">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                        {repo.language}
                      </span>
                      <span className="mr-4">{repo.size}</span>
                      <span>Updated {repo.updatedAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;