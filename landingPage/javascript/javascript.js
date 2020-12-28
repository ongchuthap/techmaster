function interfaceFocus(id) {
    let infocus = document.getElementsByClassName('interface-feature');
    for (i = 0; i < infocus.length; i++) {
        infocus[i].style.opacity = 0.5;
    }
    let focus = document.getElementById(id);
    focus.style.opacity = 1;
}