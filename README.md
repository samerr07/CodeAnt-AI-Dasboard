# CodeAnt AI Dashboard Component Documentation

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#techstack)
- [Components](#components)
  - [Sidebar](#sidebar)
  - [Dropdown Menu](#dropdown-menu)
  - [Repositories List](#repositories-list)
  - [Search Bar](#search-bar)
  - [Modal](#modal)
- [Responsive Design](#responsive-design)
- [Contributing](#contributing)
- [License](#license)

---

## Overview
It is a responsive UI layout for managing repositories and user settings. It includes a sidebar, a dropdown menu for profile actions, a search bar for filtering repositories, and a modal for repository details or actions.

---

## Features
### 1. Sidebar
- Displays navigation links (e.g., `Dashboard`, `Settings`, `Logout`).
- Responsive behavior with a toggle button for mobile devices.
- Fixed position on large screens and collapsible on smaller screens.

### 2. Dropdown Menu
- Accessible from the top navigation bar.
- Includes actions like:
  - Profile
  - Settings
  - Logout
- Automatically closes when clicking outside.

### 3. Repositories List
- Displays a list of repositories with details like name and description.
- Includes action buttons for:
  - Editing repositories.
  - Deleting repositories.

### 4. Search Bar
- Allows users to filter repositories by name.
- Implements real-time search functionality.

### 5. Modal
- Displays repository details or allows editing repository information.
- Includes a close button and smooth transition effects.

---

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/CodeAntAIDashboard.git
    ```

2. Navigate to the project directory:
    ```bash
    cd CODE ANT
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

---

## Usage

Include the `Dashboard` component in your React application:

```jsx
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
```

---


## 🔧 Tech Stack
- **React.js**: For building the user interface.
- **React Icons**: To integrate professional icons for sign-in options.
- **React Router**: For seamless navigation and routing.
- **Tailwind CSS**: Used to style the components and achieve responsiveness.


## Components

### Sidebar
The `Sidebar` displays navigation links and is collapsible on mobile devices.

```jsx
<div className={`fixed top-0 left-0 ${isSidebarOpen ? 'translate-y-0' : '-translate-y-full'} md:relative ...`}>
  {/* Sidebar content */}
</div>
```

### Dropdown Menu
The `DropdownMenu` is used for profile-related actions like viewing the profile, adjusting settings, or logging out.

```jsx
<div className="relative">
  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Profile</button>
  {isDropdownOpen && (
    <div className="absolute ...">
      {/* Dropdown options */}
    </div>
  )}
</div>
```

### Repositories List
The `RepositoriesList` component displays a list of repositories and supports actions like editing or deleting.

```jsx
{repositories.map(repo => (
  <div key={repo.id} className="repo-item">
    <h3>{repo.name}</h3>
    <p>{repo.description}</p>
    <button onClick={() => handleEdit(repo.id)}>Edit</button>
    <button onClick={() => handleDelete(repo.id)}>Delete</button>
  </div>
))}
```

### Search Bar
The `SearchBar` allows users to filter the repositories list by name.

```jsx
<input
  type="text"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  placeholder="Search repositories..."
/>
```

### Modal
The `Modal` component is used to display detailed information about a repository or for editing purposes.

```jsx
{showModal && (
  <div className="modal">
    <button onClick={() => setShowModal(false)}>Close</button>
    <form>
      {/* Modal content */}
    </form>
  </div>
)}
```

---

## Responsive Design

The Dashboard is fully responsive and optimized for different screen sizes:
- On large screens: The sidebar is always visible.
- On mobile devices: The sidebar is toggled with a button.
- Dropdown menus and modals are positioned dynamically based on the viewport.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add new feature"
    ```
4. Push the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a Pull Request on GitHub.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
