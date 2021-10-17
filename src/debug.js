export const openDebugger = () => {
    const main = document.getElementsByTagName('main')[0]
    const debugMessage = document.createElement('h2')

    debugMessage.innerText = 'Debug window'
    main.appendChild(debugMessage)
}
