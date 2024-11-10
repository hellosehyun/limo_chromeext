import { createRoot } from 'react-dom/client'
import { Memo } from './component/memo/memo'

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)

chrome.runtime.onMessage.addListener((msg, sender, sendRes) => {
  if (msg.action === 'createMemo') {
    try {
      root.render(<Memo />)
      sendRes({ status: 'success' })
    } catch (err) {
      console.error(err)
      sendRes({ status: 'err' })
    }

    return true
  }
})
