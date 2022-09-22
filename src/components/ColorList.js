import React from "react";


//Non-DRY Code 

// function ColorList() {
//   const colors = [
//     "firebrick",
//     "rebeccapurple",
//     "salmon",
//     "darkslategray",
//     "hotpink",
//   ];

//   return (
//     <div>
//       <h1>Top 5 CSS Colors</h1>
//       <ol>
//         <li style={{ color: colors[0] }}>{colors[0]}</li>
//         <li style={{ color: colors[1] }}>{colors[1]}</li>
//         <li style={{ color: colors[2] }}>{colors[2]}</li>
//         <li style={{ color: colors[3] }}>{colors[3]}</li>
//         <li style={{ color: colors[4] }}>{colors[4]}</li>
//       </ol>
//     </div>
//   );
// }



//DRY code

// function ColorList(){
//   const colors = [
//     "firebrick",
//     "rebeccapurple",
//     "salmon",
//     "darkslategray",
//     "hotpink"
//   ]
//   const colorElements = colors.map(color =>{
//     return <li key ={color} style = {{color: color}}>{color}</li>
//   })

//   return (
//     <div>
//       <h1>Top 5 CSS Colors</h1>
//         <ol>
//           {colorElements}
//         </ol>
//     </div>
//   )
// }

function ColorItem(props) {
  return <li style={{ color: props.color }}>{props.color}</li>;
}

// ColorList component
function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = colors.map((color) => {
    return <ColorItem key={color} color={color} />;
  });
    return (
    <div>
      <h1>Top 5 CSS Colors</h1>
        <ol>
          {colorElements}
        </ol>
    </div>
  )
  // etc 
}

export default ColorList;