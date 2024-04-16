

export function Clock (){

    // setInterval(()=>{
        return (
          
            <div>
                <h1> Welcome to React JS clock</h1>
            
                <h2>{new Date().toLocaleTimeString()}</h2>

          
            </div>
              
        )
    // },1000)
}