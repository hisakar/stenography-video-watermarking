document.getElementById('pick-host-video').addEventListener('click', async () => {
  await window.dialog.pickHostVideo()
})
