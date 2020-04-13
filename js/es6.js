let histories = [];

class MyConsole {

    constructor() { }

    log(msg) {
        histories.push(msg);
        console.log("Log - " + msg);
    }

    history(index) {
        if (index === undefined) {
            console.log("All logs - " + histories.toString());
        } else {
            console.log("Single log - " + histories[index]);
        }
    }

    clearHistory() {
        histories = [];
        histories.toString;
    }

};

var myconsole = new MyConsole();
myconsole.log(123);
myconsole.log(true);
myconsole.log("Ram");
myconsole.history();
myconsole.history(0);
myconsole.history(1);
myconsole.clearHistory();
myconsole.history();