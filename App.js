// const heading = React.createElement("h1", {id : "heading"}, "yeno maga samachara");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const parent = React.createElement("div" , {id:"parent"}, 
   [React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"shiva"), 
        React.createElement("h2",{},"dhyan")
    ]),React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"is learning"), 
        React.createElement("h2",{},"react")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent);