chrome.commands.onCommand.addListener((command) => {
  if (command === 'createMemo') {
    handleCreateMemo()
  }
})

const handleCreateMemo = async () => {
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    })

    if (!tab?.id) return

    try {
      await chrome.tabs.sendMessage(tab.id, { action: 'createMemo' })
    } catch (error) {
      await inject(tab.id)
      await delay(100)
      await chrome.tabs.sendMessage(tab.id, { action: 'createMemo' })
    }

    return
  } catch (err) {
    console.error(err)
  }
}

const inject = async (tabId: number) =>
  await chrome.scripting.executeScript({
    target: { tabId },
    files: ['script.js'],
  })

const delay = (time: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, time))
