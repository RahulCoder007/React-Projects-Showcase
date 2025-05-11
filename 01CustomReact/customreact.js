function render(element, container){
    const domElement = document.createElement(element.type)
    // domElement.setAttribute("href", element.props.href)
    // domElement.setAttribute("target", element.props.target)
    for (prop in element.props){
        if (prop==="children") continue;
        domElement.setAttribute(prop,element.props[prop])
    }
    domElement.innerHTML= element.children
    container.appendChild(domElement)

}


const CustomReactElement ={
    type: "a",
    props:{
        href: "https://www.google.com",
        target: "_blank",
    },
    children: ["Click me!"]
}

const mainContainer = document.querySelector("#root");
render(CustomReactElement, mainContainer);
