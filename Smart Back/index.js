
/*
    @author: Popescu Ionut Cosmin
    @email: cosmin.popescu93@gmail.com
*/
document.addEventListener('keydown', (event) => {

    const keyName = event.key;

    if (keyName === "Backspace")
    {
        alert("Seems that you have pressed Backspace key. Press Alt + <- to go bak");
        return;
    }

    if (event.altKey)
    {
        
    }
}, false);

document.addEventListener('keyup', (ev) => {

    if (ev.DOM_KEY_LOCATION_LEFT)
    {
        window.history.go(-1);
    }
})