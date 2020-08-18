const EventEmitter = require('events');

const electronMock = {
    ipcRenderer: new EventEmitter(),
    ipcMain: new EventEmitter(),
    remote: {
        app: {},
        getGlobal: jest.fn(),
        require: jest.fn().mockReturnValue(() => {}),
    },
    dialog: {
        showErrorBox: jest.fn(),
    },
    shell: {
        moveItemToTrash: jest.fn(),
        openExternal: jest.fn(),
    },
};

module.exports = electronMock;
