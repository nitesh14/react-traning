// Exercise on function

var functionTests = {
    projects: [],

    // Add project
    addProject: function (pid, name, status) {
        this.projects.push({
            pid: pid,
            name: name,
            status: status
        });
        this.displayProject();
    },

    // Change project status based on pid
    changeStatus: function (pid, status) {
        for (var i = 0; i < this.projects.length; i++) {
            var project = this.projects[i];
            if (project.pid === pid) {
                console.log("Inside condition" + status);
                project.status = status;
            }
        }
        this.displayProject();
    },

    // Delete project based on pid
    deleteProject: function (pid) {
        for (var i = 0; i < this.projects.length; i++) {
            var project = this.projects[i];
            if (project.pid === pid) {
                this.projects.splice(i, 1);
            }
        }
        this.displayProject();
    },

    // Display Project
    displayProject: function () {
        if (this.projects.length === 0) {
            console.log('There is no project in project list');
        }
        else {
            for (var i = 0; i < this.projects.length; i++) {
                var project = this.projects[i];
                console.log("Pid : " + project.pid + ", Name : " + project.name + ", Status : " + project.status);
            }
        }
    }
};
