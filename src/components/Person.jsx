import Name from "./Name"



const Person = (props) => {
  return (
    <div>

     <Name name={props.name} />

     <img src={props.img} alt="cat1-img" />
<p>Color:{props.color}</p>
    </div>
  )
}

export default Person