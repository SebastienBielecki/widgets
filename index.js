

const listContainer = $(".projects-container");


projects.forEach(project => {
    listContainer.append(`<a href="${project.link}"><div class='project-container'><h2>${project.name}</h2><img src="./images/${project.id}-image.png" alt="1"><p>${project.description}</div></a>`)
})