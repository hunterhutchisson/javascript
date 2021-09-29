var dummy = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quam aliquam, earum perspiciatis eveniet quidem! Quasi, velit quibusdam. Molestiae, tempora! Sit, dicta nihil reiciendis assumenda consequuntur sed nemo minus iusto.'

function createDivWithStyles(classStyles){
    var div = document.createElement('div')
    div.setAttribute('class', classStyles)
    return div
}
function createDivWithText(classStyles, innerText){
    var div = document.createElement('div')
    div.setAttribute('class', classStyles)
    div.innerText = innerText
    return div
}

function createAnchor(classStyle, innerText, href){
    var anchor = document.createElement('a')
    anchor.setAttribute('class', classStyle)
    anchor.setAttribute('href', href)
    anchor.innerText = innerText;
    return anchor
}
function createTag(classStyle, tag, innerText){
    var element = document.createElement(tag)
    element.setAttribute('class', classStyle)
    element.innerText = innerText;
    return element
}

function createLi(classStyleLi, classStyleA, href, innerText){
    var li = document.createElement('li')
    li.setAttribute('class', classStyleLi)
    var a = createAnchor(classStyleA, innerText, href)
    li.appendChild(a)
    return li
}

function createThreeRows(classStlyeDiv, tagHead, classStyleHead, innerTextHead, tagP, classStyleP, innerTextP, classStyleInnerDiv, classD1, innerD1, classD2, innerD2){
    var div = createDivWithStyles()
    var InnerDiv = createDivWithStyles(classStlyeDiv)
    var header = createTag(classStyleHead, tagHead, innerTextHead)
    var para = createTag(classStyleP, tagP, innerTextP)
    var bar = createDivWithStyles(classStyleInnerDiv)
    var bar1 = createDivWithText(classD1, innerD1)
    var bar2 = createDivWithText(classD2, innerD2)
    bar.appendChild(bar1)
    bar.appendChild(bar2)
    InnerDiv.appendChild(header)
    InnerDiv.appendChild(para)
    InnerDiv.appendChild(bar)
    div.appendChild(InnerDiv)
    return div
}

//grab an element that already exists

var container = document.querySelector('#container')

//create nav container
var navContainer = createDivWithStyles('container')

var nav = document.createElement('nav')
nav.setAttribute('class', 'navbar navbar-expand-lg bg-primary')

//create div inside navbar

var divNav = createDivWithStyles('container-fluid')


// create the anchor
var navAnchor = createAnchor('navbar-brand ms-2 text-white', 'High On Coding', '#')

// create the button

var button = document.createElement('button')
button.setAttribute('class', 'navbar-toggler bg-warning')
button.setAttribute('type', 'button')
button.setAttribute('data-bs-toggle', 'collapse')
button.setAttribute('data-bs-target', '#navbarNav')
button.setAttribute('aria-controls', 'navbarNav')
button.setAttribute('aria-expanded', 'false')
button.setAttribute('aria-label', 'Toggle navigation')

// create the span in button

var span = document.createElement('span')
span.setAttribute('class', 'navbar-toggler-icon')

//append span to button

button.appendChild(span)

// create the part in collapse

var navbarNav  = createDivWithStyles('collapse navbar-collapse')
navbarNav.setAttribute('id', 'navbarNav')
// create the list

var ul = document.createElement('ul')
ul.setAttribute('class', 'navbar-nav ms-auto')

// list item1

var li1 = createLi('nav-item', 'nav-link active text-white', '#', 'HOME')

//list item2

var li2 = createLi('nav-item', 'nav-link text-white', '#', 'CATEGORIES')

//apend rest of nav
ul.appendChild(li1)
ul.appendChild(li2)

navbarNav.appendChild(ul)

divNav.appendChild(navAnchor)
divNav.appendChild(button)
divNav.appendChild(navbarNav)

nav.appendChild(divNav)
navContainer.appendChild(nav)

container.appendChild(navContainer)

//container for main text

var mainText = createDivWithStyles('container')

var curse = createDivWithStyles('row bg-secondary mx-4')
var h1 = createTag('mt-1', 'h1', 'Curse of the Current Reviews')
var para = createTag('mt-4', 'p', dummy)

curse.appendChild(h1)
curse.appendChild(para)

var hello = createThreeRows('row mx-4', 'h3', 'text-primary mt-4','Hello WatchKit', 'p', 'lead', dummy, 'd-flex bg-warning', 'col-2', ' 12 comments', 'col-2 offset-1', ' 124 likes')

var intro = createThreeRows('row mx-4', 'h3', 'text-primary mt-4', 'Introduction to Swift', 'p', 'lead', dummy, 'd-flex bg-warning', 'col-2', ' 15 comments', 'col-2 offset-1', ' 45 likes')

mainText.appendChild(curse)
mainText.appendChild(hello)
mainText.appendChild(intro)

container.appendChild(mainText)
console.log(container);






