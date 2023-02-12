
const Hooks =()=>{
let count = 5;

    const IncreaseNumber = () =>{
        count++;
        console.log("Count is : "+count)
    }
    return(
        <>
            <h1> {count} </h1>
            <button onClick={IncreaseNumber}>Click me</button>
        </>
    )
}

export default Hooks;
