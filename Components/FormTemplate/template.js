import { useField, ErrorMessage } from "formik"

const Template =(props)=> {

    const [ field, meta ] = useField(props)
    function renderTemplate(type){
        
        switch (type) {
            
            case "number":
                return <div className="form-group">
                            <input type={props.type} className="form-control" {...field} {...props} />
                        </div> 
                break;
            case "select":
                return <div className="form-group">
                            <select {...field} className="form-control">
                                {
                                    props.options.map( (gender, key) => {
                                        if(key === 0) return <option value="" key={key}> { gender }</option>
                                        return <option key={key}> { gender }</option>
                                    })
                                }
                            </select>
                        </div> 
                break;
            case "date":
                return <div className="form-group">
                            <input type={props.type} className="form-control" {...field} {...props} />
                        </div> 
                break;
            case "checkbox":
                return <div className="form-group">
                            <label className="label-control m-2">{ props.label }</label>
                            <input type={props.type} {...field} {...props} />
                        </div> 
                break;
            case "file":
                return <div className="form-group">
                            <label className="label-control m-2">{ props.label }</label>
                            <input type={props.type} {...field} {...props} />
                        </div> 
                break;
        
            default:
                return  <div className="form-group">
                            <input type={props.type} className="form-control" {...field} {...props} />
                        </div>
              
                break;
        }
        
    }
    return (
        <>
            { renderTemplate(props.type) }
            <ErrorMessage component="div" name={field.name} className="text-danger pb-2" />
        </>
    )
}

export default Template