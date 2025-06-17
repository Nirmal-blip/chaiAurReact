//function customRender(reactElement, container) {
   /* const domElement= document.createElement(reactElement.type);
    // Set attributes
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);   

    // Append to container
    container.appendChild(domElement);}*/


//2nd way to create custom render function

function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
       domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props){
        if (prop === 'children') {continue;
        } else {
            domElement.setAttribute(prop, reactElement.props[prop]);
        }

    }

    container.appendChild(domElement);

}


const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',},
        children:'Google mata',
    }


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)