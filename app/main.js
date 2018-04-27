import m from 'mithril'
import Hello from './hello.jsx'

document.addEventListener('DOMContentLoaded', () => {
    var root = document.getElementById("app")
    m.mount(root, Hello)
});
