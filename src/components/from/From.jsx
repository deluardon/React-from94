import { useEffect } from "react";
import { useRef } from "react";


const From = () => {
  const nameRaf=useRef(null);
  useEffect(()=>{
    nameRaf.current.focus();
  },[])
    const handleSubmit = (event) => {
        // console.log(event.target.name.value);
        // console.log(event.target.email.value);
        event.preventDefault();
        console.log(nameRaf.current.value);
    }
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <input ref={nameRaf}  className="mt-4" type="text" name="name" />
                <br />
                <input  className="mt-4" type="email" name="email" />
                <br />
                <input  type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default From;