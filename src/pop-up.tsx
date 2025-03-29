//import {FormEvent, useState} from "react";

type appState = {
    removed: Node,
    parent: HTMLElement
}

export function createPopUp({removed, parent}: appState) {
    // the state of the text inside the input element

    function restoreDefault(){
        if(parent.firstChild!=null) {
            parent.removeChild(parent.firstChild)
            parent.appendChild(removed)
        }
    }

    const element = document.createElement('div')
    const p = document.createElement('p')
    p.innerText = "Click me to restore"
    p.onclick = restoreDefault
    element.appendChild(p)
    parent.appendChild(element)
}
