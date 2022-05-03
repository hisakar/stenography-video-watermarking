const { contextBridge, ipcRenderer } = require('electron')

  contextBridge.exposeInMainWorld('dialog', {
    pickHostVideo: () => ipcRenderer.invoke('dialog:pick-host-video')
  })
