export function List () {
    const data = [
        {
          heading: "Mobile Operating System",
          items: ["Andoid","Bickbery", "Phone", "Windows Phone"]
        },
        {
          heading: "Mobile Manufacturers",
          items: ["Samsung","HIC", "Miromas", "Apple"]
        },
      ];

      return (
          <div>
            <div>
                {data.map((e) =>{
                    return <Comp com={e.heading} items={e.items}></Comp>
                })} 
            </div>
          </div>
      );
}

function Comp(props){
  console.log("Sl", props)
  return <div><h1>{props.com}</h1> <ul>{props.items.map((e) =>{
  return <li>{e}</li>
  })}</ul></div>
}