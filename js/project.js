var functionTests = {
    projects: [],

    addProject: function (pid, name, description, status) {
        this.projects.push({
            pid: pid,
            name: name,
            description: description,
            status: status
        });
        this.displayProject();
    },

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

var handlers = {
    addProject: function () {
        var projectId = document.getElementById('projectId');
        var name = document.getElementById('name');
        var description = document.getElementById('description');
        var status = document.getElementById('status');
        functionTests.addProject(projectId.value, name.value, description.value, status.value);
        //view.displayProjects();
        projectId.value = '';
        name.value = '';
        description.value = '';
        status.value = '';
    },

    displayProjects: function () {
        var table = document.querySelector('#projectList');
        table.innerHTML = '';
        var tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);
        
        if (functionTests.projects.length === 0) {
            console.log('There is no project in project list');
            var tr = document.createElement('TR');
            tr.textContent = "There is no project in project list";
            tableBody.appendChild(tr);

        }
        else {
            for (var i = 0; i < functionTests.projects.length; i++) {
                var tr = document.createElement('TR');
                var project = functionTests.projects[i];
                var projectdata = project.pid + " | " + project.name + " | " + project.description + " | " + project.status;
                tr.textContent = projectdata;
                tableBody.appendChild(tr);
            }
        }
    }
};

