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
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {

  const [repositories, setRepositories] = useState([
    {
      name: "design-system",
      language: "React",
      size: "7320 KB",
      visibility: "Public",
      updatedAt: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      language: "Javascript",
      size: "5871 KB",
      visibility: "Private",
      updatedAt: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      language: "Python",
      size: "4521 KB",
      visibility: "Private",
      updatedAt: "5 days ago",
    },
    {
      name: "mobile-app",
      language: "Swift",
      size: "3096 KB",
      visibility: "Public",
      updatedAt: "3 days ago",
    },
    {
      name: "e-commerce-platform",
      language: "Java",
      size: "6210 KB",
      visibility: "Private",
      updatedAt: "6 days ago",
    },
    {
      name: "blog-website",
      language: "HTML/CSS",
      size: "1876 KB",
      visibility: "Public",
      updatedAt: "4 days ago",
    },
    {
      name: "social-network",
      language: "PHP",
      size: "5432 KB",
      visibility: "Private",
      updatedAt: "7 days ago",
    },
  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingRepo, setEditingRepo] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const [formData, setFormData] = useState({
    name: '',
    language: '',
    visibility: 'Public',
    size: '0 KB',
  });

  const languages = ['React', 'Javascript', 'Python', 'Swift', 'Java', 'HTML/CSS', 'PHP'];

  const showAlertMessage = (message, type) => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: '', type: '' }), 3000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      language: '',
      visibility: 'Public',
      size: '0 KB',
    });
    setEditingRepo(null);
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.language) {
      showAlertMessage('Please fill in all required fields', 'error');
      return;
    }

    const newRepo = {
      ...formData,
      updatedAt: 'Just now',
      size: formData.size || '0 KB',
    };

    if (editingRepo) {
      setRepositories(repositories.map(repo =>
        repo.name === editingRepo.name ? newRepo : repo
      ));
      showAlertMessage('Repository updated successfully', 'success');
    } else {
      setRepositories([newRepo, ...repositories]);
      showAlertMessage('Repository added successfully', 'success');
    }

    resetForm();
  };

  const handleEdit = (repo) => {
    setEditingRepo(repo);
    setFormData(repo);
    setShowModal(true);
  };

  const handleDelete = (repoName) => {
    if (window.confirm('Are you sure you want to delete this repository?')) {
      setRepositories(repositories.filter(repo => repo.name !== repoName));
      showAlertMessage('Repository deleted successfully', 'success');
    }
  };

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    repo.language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-r border-gray-200 p-3">

        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center md:justify-start">
            <img
              className="w-8 h-8 mr-2"
              src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww"
              alt="Logo"
            />
            <h1 className="text-xl font-semibold ">
              CodeAnt AI
            </h1>
          </div>

          <button onClick={() => setIsSidebarOpen(true)} className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>

        </div>

        <div className="hidden md:block">
          <button onClick={() => setIsDropdownOpen((prev) => !prev)} className="flex justify-between px-4 py-2 w-full bg-gray-100 rounded-lg">
            <span>Sameer Srivastava</span>
            <span><ChevronDown /></span>
          </button>
          {isDropdownOpen && (
            <div className=" absolute mt-2  md:w-56 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-40">
              <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                Profile
              </button>
              <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                Settings
              </button>
              <Link to={"/signin"} className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                Logout
              </Link>
            </div>
          )}
        </div>


        <div className={`fixed z-20 top-0 left-0 w-full transform ${isSidebarOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 md:relative md:translate-y-0  h-auto bg-white  border-gray-200 p-4`}>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center md:hidden">
              <img
                className="w-8 h-8 mr-2"
                src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww"
                alt="Logo"
              />
              <h1 className="text-xl font-semibold ">
                CodeAnt AI
              </h1>
            </div>
            <button
              className="text-gray-600 hover:text-gray-900 focus:outline-none md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-2">
            <div className="md:hidden">
              <button onClick={() => setIsDropdownOpen((prev) => !prev)} className="flex justify-between px-4 py-2 w-full bg-gray-100 rounded-lg">
                <span>Sameer Srivastava</span>
                <span><ChevronDown /></span>
              </button>
              {isDropdownOpen && (
                <div className=" absolute mt-2  md:w-56 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-40">
                  <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                    Profile
                  </button>
                  <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                    Settings
                  </button>
                  <Link to={"/signin"} className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                    Logout
                  </Link>
                </div>
              )}
            </div>
            <div className="flex items-center p-2 w-full bg-blue-600 text-white rounded-lg">
              <House className="mr-2" />
              <span>Repositories</span>
            </div>

            <div className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
              <code className="mr-2">&lt;/&gt;</code>
              <span>AI Code Review</span>
            </div>

            <div className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Cloud className="w-5 h-5 mr-2" />
              <span>Cloud Security</span>
            </div>

            <div className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
              <HelpCircle className="w-5 h-5 mr-2" />
              <span>How to Use</span>
            </div>

            <div className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Settings className="w-5 h-5 mr-2" />
              <span>Settings</span>
            </div>
          </div>
        </div>


        <div className="absolute bottom-4 space-y-2 hidden md:block">
          <div className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Phone className="w-5 h-5 mr-2" />
            <span>Support</span>
          </div>

          <Link to={"/signin"} className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
            <LogOut className="w-5 h-5 mr-2" />
            <span>Logout</span>
          </Link>
        </div>
      </div>

      

      <div className="flex-1 p-5 h-screen overflow-auto">
        <div className="border bg-white border-gray-200 rounded-xl p-4 mb-4">
          {/* Alert Message */}
          {alert.show && (
            <div className={`mb-4 p-4 rounded-lg ${alert.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
              }`}>
              {alert.message}
            </div>
          )}

          {/* Header */}
          <div className="flex flex-wrap justify-between items-center mb-5">
            <div className="flex items-center flex-col mb-2 md:mb-0">
              <h2 className="text-xl font-semibold mr-2">Repositories</h2>
              <div className="text-gray-500 text-sm">
                {repositories.length} total repositories
              </div>
            </div>

            <div className="flex flex-wrap items-center space-x-4">
              <button className="flex items-center border md:px-4 md:py-2 text-sm px-4 py-1 rounded-lg text-gray-600 hover:text-gray-900 md:mb-0">
                <RefreshCw className="w-5 h-5 mr-1" />
                Refresh All
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center md:px-4 md:py-2 text-sm px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="w-5 h-5 mr-1" />
                Add Repository
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-5">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search Repositories"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Repository List */}
          <div className="space-y-4">
            {filteredRepositories.map((repo, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-lg font-medium text-gray-900 mr-2">
                        {repo.name}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${repo.visibility === "Public"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-600"
                        }`}>
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
                  <div className="flex space-x-2 md:flex-row flex-col items-center gap-2">
                    <button
                      onClick={() => handleEdit(repo)}
                      className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(repo.name)}
                      className="px-3 py-1 text-sm border border-red-300 text-red-600 rounded hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  {editingRepo ? 'Edit Repository' : 'Add New Repository'}
                </h3>
                <button
                  onClick={resetForm}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Repository Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Repository name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Language
                  </label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select language</option>
                    {languages.map(lang => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Visibility
                  </label>
                  <select
                    name="visibility"
                    value={formData.visibility}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    {editingRepo ? 'Update' : 'Add'} Repository
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
