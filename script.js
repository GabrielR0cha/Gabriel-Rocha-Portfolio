//Meu portfolio

function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
  } else {
      menuMobile.classList.add('open');
  }
}



function formatString(string) {
  return string.replace(/-/g, " ")
}



// async function createProjectContainer(data) {



//   try {
//     const sectionProject = document.getElementById('sectionProject')

//     const containerWrap = document.createElement('div');
//   containerWrap.className = 'container-projects-wrap';

//   data.forEach(project => {
//     const projectContainer = document.createElement('div');
//     projectContainer.className = 'projects-container';

//     const cardProject = document.createElement('div');
//     cardProject.className = 'card-project';

//     const containerImageProject = document.createElement('div');
//     containerImageProject.className = 'container-img-project';

//     const imgProject = document.createElement('img');
//     imgProject.alt = project.name;
//     imgProject.src = `public/imageProject/${project.name}.png`

//     const projectDescription = document.createElement('div');
//     projectDescription.className = 'project-description';

//     const name = document.createElement('h4');
//     name.innerText = formatString(project.name);

//     const pDescription = document.createElement('p');
//     pDescription.textContent = project.description;

//     const buttonContainer = document.createElement('div');
//     buttonContainer.className = 'button-container';

//     const aGithub = document.createElement('a');
//     aGithub.href = project.clone_url

//     const aSeeMoreGithub = document.createElement('a');
//     aSeeMoreGithub.href = project.homepage === "" ? project.clone_url : project.homepage

//     const buttonGit = document.createElement('button');
//     buttonGit.className = 'button-project';
//     buttonGit.innerText = 'github';

//     const buttonSeeMore = document.createElement('button');
//     buttonSeeMore.className = 'button-project';
//     buttonSeeMore.innerText = 'ver mais';

//     buttonContainer.appendChild(aGithub);
//     buttonContainer.appendChild(aSeeMoreGithub);
//     aSeeMoreGithub.appendChild(buttonSeeMore)
//     aGithub.appendChild(buttonGit)

//     projectDescription.appendChild(name);
//     projectDescription.appendChild(pDescription);
//     containerImageProject.appendChild(imgProject);
//     cardProject.appendChild(containerImageProject);
//     cardProject.appendChild(projectDescription);
//     cardProject.appendChild(buttonContainer);
//     projectContainer.appendChild(cardProject);
//     containerWrap.appendChild(projectContainer);

//     });


//     sectionProject.appendChild(containerWrap);
//   } catch (error) {
//     console.error('Error creating project container:', error);
//   }
// }

// async function getData() {
//   try {
//     const response = await fetch('https://api.github.com/users/GabrielR0cha/repos');
  
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('There was a problem with your fetch operation:', error);
//     return [];
//   }
// }

// async function LoadPage() {
   
//     const data = await getData();
//     createProjectContainer(data);
  
// }

LoadPage();
