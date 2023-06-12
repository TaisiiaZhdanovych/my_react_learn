import React from "react";
import { useFormik } from "formik";
import "./checkForm.scss";
import { PatternFormat } from "react-number-format";
import { object, string, number } from 'yup';
import { checkOutCart} from "../../redux/actions/productsAction"; //

import { useDispatch, useSelector } from 'react-redux';


const phoneRegExp = /^\+38 \((?!0{3}\))\d{3}\) [1-9]\d{2}-\d{2}-\d{2}$/;

let userSchema = object().shape({
  firstName: string().required(),
  lastName: string().required(),
  age: number().required().positive().integer(),
  adress: string().required(),
  phone: string().required().matches(phoneRegExp, 'Phone number is not valid')
  });





export const SignupForm = ({ totalPrice }) => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.

  
  
  const dispatch = useDispatch();
  const { cardProducts} = useSelector((state) => state.products);


  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      adress: "",
      phone: "",
    },

    

validationSchema: userSchema,
    onSubmit: (values) => {
      const cartData = JSON.parse(localStorage.getItem('cart'));
      
       const cartArr = cartData.map((id) => {
    const product = cardProducts.find((item) => item.id === id);
    return {
      бренд: product.name,
      колір: product.color,
      ціна: `$ ${ product.price }`
    };
  });
    
      const combinedData = {
        ...values,
        "Придбані товари": cartArr,
        "totalPrice": `$ ${totalPrice}`
      };
      console.log(JSON.stringify(combinedData, null, 2));

      dispatch(checkOutCart(combinedData));
    }
    
  });




  return (
    <form className="check__form" onSubmit={formik.handleSubmit}>
      <label className="check__inp-title" htmlFor="firstName">First Name</label>
      <input className="check__inp"
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName && formik.touched.firstName ? (
             <div className="error">{formik.errors.firstName}</div>
           ) : null}

      <label className="check__inp-title" htmlFor="lastName">Last Name</label>
      <input
        className="check__inp"
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName && formik.touched.lastName ? (
             <div className="error">{formik.errors.lastName}</div>
           ) : null}

      <label className="check__inp-title" htmlFor="email">Age</label>
      <input
        className="check__inp"
        id="age"
        name="age"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.age}
      />
      {formik.errors.age && formik.touched.age ? (
             <div className="error">{formik.errors.age}</div>
           ) : null}

      <label className="check__inp-title" htmlFor="adress">Adress</label>
      <input
        className="check__inp"
        id="adress"
        name="adress"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.adress}
      />
      {formik.errors.adress && formik.touched.adress ? (
             <div className="error">{formik.errors.adress}</div>
           ) : null}

      <label className="check__inp-title" htmlFor="phone">Phone</label>
     
      <PatternFormat
        className="check__inp"
        displayType="input"
        onChange={formik.handleChange}
        value={formik.values.input}
        id="phone"
        name="phone"
        format="+38 (###) ###-##-##"
        allowEmptyFormatting mask="#" />

      {formik.errors.phone && formik.touched.phone && (
        <div className="error">{formik.errors.phone}</div>
      )}


      <button className="check__btn-submit" type="submit">CHECKOUT</button>
    </form>
  );
};
