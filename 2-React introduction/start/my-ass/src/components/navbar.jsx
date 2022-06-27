import './navbar.css'
export function Navbar(){

    const data = [
        {
          heading: "Mobile Operating System",
          items: ["Andoid","Bickbery","Windows Phone"]
        }
      ];

    return (
        <div className="">
            <div>
            {data.map((e) =>{
                return <NavItem navData={e.items}></NavItem>
            })}
            </div>
        </div>
    );
};

function NavItem(props){
    
    return <div className="navItem">
        <h2>LoanBook</h2>
        {props.navData.map((e)=>{
        return <h3 className='mItem'>{e}</h3>
        
    })}
    <h3 id='con'>Contact</h3>
    </div>
}