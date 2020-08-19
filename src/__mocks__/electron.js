const EventEmitter = require('events');

const electronMock = {
    ipcRenderer: new EventEmitter(),
    ipcMain: new EventEmitter(),
    remote: {
        app: {},
        getGlobal: () => undefined,
        require: () => ({}),
    },
    dialog: {
        showErrorBox: () => undefined,
    },
    shell: {
        moveItemToTrash: () => undefined,
        openExternal: () => undefined,
    },
};

module.exports = electronMock;
