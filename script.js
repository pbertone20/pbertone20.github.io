async function fetchGitHubProjects() {
  const projectsSection = document.getElementById('projects-section');

  try {
    const response = await fetch('https://api.github.com/users/pbertone20/repos');
    const data = await response.json();

    data.forEach(project => {
      const projectBox = document.createElement('div');
      projectBox.classList.add('project-box');

      const projectName = document.createElement('a');
      projectName.href = project.html_url;
      projectName.textContent = project.name;

      projectBox.appendChild(projectName);
      projectsSection.appendChild(projectBox);
    });
  } catch (error) {
    console.log('Error fetching GitHub projects:', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchGitHubProjects);
