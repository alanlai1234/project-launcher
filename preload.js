const { ipcRenderer, contextBridge} = require('electron');

contextBridge.exposeInMainWorld('run', {
  call: (method, arg) => ipcRenderer.send(method, arg)
})