// Exercise on Array

var projectList = {
    projects: [{ id: 1, name: 'React', description: 'React Project'},
    { id: 2, name: 'Angular', description: 'Angular Project' },
    { id: 3, name: 'Java', description: 'Java Project'}
    ],

    // displayProject function takes id as argument
    displayProject: function (id) {
        for (var i = 0; i < this.projects.length; i++) {
            var project = this.projects[i];
            if (project.id === id) {
                console.log("User : " + project.name 
                + ", Discription : " + project.description);
            }
        }
    },
};