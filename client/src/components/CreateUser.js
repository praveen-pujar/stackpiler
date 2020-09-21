import React from 'react'
import { useFormik } from 'formik';
 import * as Yup from 'yup';

const CreateUser = ({onChangeForm, setStackSize,createUser ,deleteUser,getAllUsers}) => {

    const formik = useFormik({
        initialValues: {
            stackSize: '',
            firstname: '',
        },
        validationSchema: Yup.object({
            stackSize: Yup.number()
            .max(100, 'Must be 100 characters or less')
            .required('Required'),
            firstName: Yup.number()
            .max(100, 'Must be less than 100 characters')
            .required('Required'),
       
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                <h2>Stack Data Structure</h2>
                <form onSubmit={formik.handleSubmit}>
        <div className="row">
        <div className="form-group col-md-10">
                <label htmlFor="exampleInputEmail1">Enter Stack Size</label>
                <input type="number" onChange={(e) => onChangeForm(e)}  className="form-control" name="stackSize" id="stackSize"  placeholder="Enter stack size" required/>
                {formik.touched.stackSize && formik.errors.stackSize ? ( <div>{formik.errors.stackSize}</div>) : null}
                <button type="button" onClick={(e) => setStackSize()} className="btn btn-success">Assign Stack size</button>
            
        </div>
        </div>


        <div className="row">
        <div className="form-group col-md-10">
        <label htmlFor="exampleInputEmail1">Enter Data</label>
        <input type="number" onChange={(e) => onChangeForm(e)}  className="form-control" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="Enter data"   onBlur={formik.handleBlur}
         value={formik.values.firstName}/>
          {formik.touched.firstName && formik.errors.firstName ? (<div>{formik.errors.firstName}</div>) : null}
        <button type="button" onClick= {(e) => createUser()} className="btn btn-danger">Push Element</button>
                  
                    
                    </div>
                    
                    <legend> Usage :</legend>
                    <ul>
                        <li><strong>Push</strong> : Element is pushed to top of stack</li>
                        <li><strong>pop</strong> : Element is poped from bottom of stack</li>
                        <li><strong>Display</strong> : Displays the stack</li>
                    </ul>
                    
                    <ul> <li>Stack is Last-In First-Out Data structure.</li> </ul>
                        
                    </div>
                 
                    {/* <button type="button" onClick= {(e) => deleteUser()} className="btn btn-primary">Pop Element</button>
                  
                <button type="button" onClick={(e) => getAllUsers()} className="btn btn-success"> Display Stack</button> */}

                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser