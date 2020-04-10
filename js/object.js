// Exercise on Object

var objectList = {
    users: [{ id: 1, name: 'User1', description: 'User 1', status: 'pending' },
    { id: 2, name: 'User2', description: 'User 2', status: 'complete' },
    { id: 3, name: 'User3', description: 'User 3', status: 'in progress' }
    ],

    displayStatus: function () {
        for (var i = 0; i < this.users.length; i++) {
            var user = this.users[i];
            if (user.status === 'complete') {
                console.log("User : " + user.name + ", Status : " + user.status + ", Description : " + user.description);
            }
        }
    },
};