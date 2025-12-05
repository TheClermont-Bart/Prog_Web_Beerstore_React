
export default function InputField({label , type, name, placeholder, handleChange}){

    return (
         <div className="m-4 ">
                        <label htmlFor={label} >{label}</label>
                        <input type={type} name={name} placeholder={placeholder} className="form-control rounded-0" onChange={handleChange}/>
        </div>
    )

}