import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps.js';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'; 
import { FormStyled, Input, Label } from './ContactForm.styled.jsx';
import { Button } from '../Contact/Contact.styled.jsx';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Ну хоча б 3 літери напиши')
    .max(50, 'Щось занадто, давай не більше 50 літер')
    .required('Заповни це поле, будь ласочка!'),
  number: Yup.string()
    .min(3, 'Якось дуже мало, хоча б 3 цифри напиши')
    .max(50, 'Щось занадто, давай не більше 50 цифр')
    .required('Заповни це поле, будь ласочка!'),
});

function ContactForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema} 
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values)); 
        resetForm();
      }}
    >
     {({ errors, touched }) => (
         <FormStyled as={Form}>
           <Label htmlFor="name">Name:</Label>
           <Field
             as={Input}
             type="text"
             name="name"
             id="name"
           />
           {touched.name && errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
           
           <Label htmlFor="number">Number:</Label>
           <Field
             as={Input}
             type="tel"
             name="number"
             id="number"
           />
           {touched.number && errors.number && <div style={{ color: 'red' }}>{errors.number}</div>}
           
           <Button type="submit">Add contact</Button>
         </FormStyled>
       )}
    </Formik>
  );
}

export default ContactForm;





















// import { useId } from "react"; 
// import { nanoid } from 'nanoid';
// import { Formik, Form, Field, ErrorMessage } from "formik";
// // import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup'; 
// import { FormStyled, Input, Label } from './ContactForm.styled.jsx';
// // import { Button } from '../Contact/Contact.styled.jsx';
// import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contactsSlice";

// const validationSchema = Yup.object({
//   name: Yup.string()
//     .min(3, 'Ну хоча б 3 літери напиши')
//     .max(50, 'Щось занадто, давай не більше 50 літер')
//     .required('Заповни це поле, будь ласочка!'),
//   number: Yup.string()
//     .min(3, 'Якось дуже мало, хоча б 3 цифри напиши')
//     .max(50, 'Щось занадто, давай не більше 50 цифр')
//     .required('Заповни це поле, будь ласочка!'),
// });




// function ContactForm({ onSubmit }) {
  // const nameId = useId();

// export default function ContactForm() { 
//   const usernameId = useId();
//   const numberId = useId();
//   const dispatch = useDispatch();

//   const handleSubmit = (values, actions) => {
//     dispatch(
//       addContact({
//         id: nanoid(),
//         name: values.name,
//         number: values.number,
//       })
//     );
//     actions.resetForm();
//   };



//   return (
//       <Formik
//       initialValues={{
//         name: "",
//         number: "",
//       }}
//       onSubmit={handleSubmit}
//       validationSchema={validationSchema}
//     >

//       <FormStyled as={Form}>
//         <div className={css.wrapper}>
//           <label className={css.label} htmlFor={usernameId}>
//             Name
//           </label>
//           <Field
//             className={css.input}
//             type="text"
//             name="name"
//             id={usernameId}
//           />
          
//           <ErrorMessage className={css.error} name="name" component="span" />
//         </div>
//         <div className={css.wrapper}>
//           <label htmlFor={numberId}>Number</label>
//           <Field
//             className={css.input}
//             type="number"
//             name="number"
//             id={numberId}
//           />
//           <ErrorMessage className={css.error} name="number" component="span" />
//         </div>
//         <button className={css.button} type="submit">
//           Add contact
//         </button>
//       </Form>
//     </Formik>
//   );



// import { useId } from "react";
// import { useDispatch } from "react-redux";
// import { nanoid } from "nanoid";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { FormStyled, Input, Label } from "./ContactForm.styled.jsx";
// import { Button } from "../Contact/Contact.styled.jsx";
// import { addContact } from "../../redux/contactsSlice";

// // Схема валидации для полей формы
// const validationSchema = Yup.object({
//   name: Yup.string()
//     .min(3, "Ну хоча б 3 літери напиши")
//     .max(50, "Щось занадто, давай не більше 50 літер")
//     .required("Заповни це поле, будь ласочка!"),
//   number: Yup.string()
//     .min(3, "Якось дуже мало, хоча б 3 цифри напиши")
//     .max(50, "Щось занадто, давай не більше 50 цифр")
//     .required("Заповни це поле, будь ласочка!"),
// });

// function ContactForm() {
//   const nameId = useId();
//   const numberId = useId();
//   const dispatch = useDispatch();

//   // Функция обработки отправки формы
//   const handleSubmit = (values, { resetForm }) => {
//     dispatch(addContact({ id: nanoid(), ...values }));
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={{ name: "", number: "" }}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ errors, touched }) => (
//         <FormStyled as={Form}>
//           <Label htmlFor={nameId}>Name:</Label>
//           <Field as={Input} type="text" name="name" id={nameId} />
//           {touched.name && errors.name && <div style={{ color: "red" }}>{errors.name}</div>}

//           <Label htmlFor={numberId}>Number:</Label>
//           <Field as={Input} type="tel" name="number" id={numberId} />
//           {touched.number && errors.number && <div style={{ color: "red" }}>{errors.number}</div>}

//           <Button type="submit">Add contact</Button>
//         </FormStyled>
//       )}
//     </Formik>
//   );
// }

// export default ContactForm;





// import { useId } from "react";
// import { nanoid } from "nanoid";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import css from "./ContactForm.module.css";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contactsSlice";

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, "Too short!")
//     .max(50, "Too long!")
//     .required("Required"),
//   number: Yup.string()
//     .min(3, "Too short!")
//     .max(50, "Too long!")
//     .required("Required"),
// });
// export default function ContactForm() {
//   const nameId = useId();
//   const numberId = useId();
//   const dispatch = useDispatch();

//   const handleSubmit = (values, actions) => {
//     dispatch(
//       addContact({
//         id: nanoid(),
//         name: values.name,
//         number: values.number,
//       })
//     );
//     actions.resetForm();
//   };
//   return (
//     <Formik
//       initialValues={{
//         name: "",
//         number: "",
//       }}
//       onSubmit={handleSubmit}
//       validationSchema={validationSchema}
//     >
//       <Form>
//         <div className={css.wrapper}>
//           <label className={css.label} htmlFor={nameId}>
//             Name
//           </label>
//           <Field
//             className={css.input}
//             type="text"
//             name="name"
//             id={nameId}
//           />
//           <ErrorMessage className={css.error} name="name" component="span" />
//         </div>
//         <div className={css.wrapper}>
//           <label htmlFor={numberId}>Number</label>
//           <Field
//             className={css.input}
//             type="number"
//             name="number"
//             id={numberId}
//           />
//           <ErrorMessage className={css.error} name="number" component="span" />
//         </div>
//         <button className={css.button} type="submit">
//           Add contact
//         </button>
//       </Form>
//     </Formik>
//   );
// }
























    // <Formik
    //   initialValues={{ name: '', number: '' }}
    //   validationSchema={validationSchema} 
    //   onSubmit={(values, { resetForm }) => {
    //     onSubmit(values);
    //     resetForm();
    //   }}
    // >

//     <Formik
//       initialValues={{
//         name: "",
//         number: "",
//       }}
//       onSubmit={handleSubmit}
//       validationSchema={validationSchema}
//     >
//       <FormStyled as={Form}>
//         <Label htmlFor={usernameId}>Name:</Label>
//            <Field
//              as={Input}
//             type="text"
//              name="name"
//             id={usernameId}
//         />
        


    
//           {touched.name && errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          
//           <Label htmlFor={numberId}>Number:</Label>
//            <Field
//              as={Input}
//             type="tel"
//             name="number"
//             id={numberId}
//         />
        
        

//                   <ErrorMessage className={css.error} name="name" component="span" />
//         </div>
//         <div className={css.wrapper}>
//           <label htmlFor={numberId}>Number</label>
//           <Field
//             className={css.input}
//             type="number"
//             name="number"
//             id={numberId}
//           />
//           <ErrorMessage className={css.error} name="number" component="span" />
//         </div>
        



//           {}
//           {touched.number && errors.number && <div style={{ color: 'red' }}>{errors.number}</div>}
          
//           <Button type="submit">Add contact</Button>
//         </FormStyled>
//       )}
//     </Formik>
//   );
// }

// export default ContactForm;




    // <Formik
    //   initialValues={{
    //     name: "",
    //     number: "",
    //   }}
    //   onSubmit={handleSubmit}
    //   validationSchema={validationSchema}
    // >


      // <Form>
      //   <div className={css.wrapper}>
      //     <label className={css.label} htmlFor={usernameId}>
      //       Name
      //     </label>
          // <Field
          //   className={css.input}
          //   type="text"
          //   name="name"
          //   id={usernameId}
          // />
            
            
//           <ErrorMessage className={css.error} name="name" component="span" />
//         </div>
//         <div className={css.wrapper}>
//           <label htmlFor={numberId}>Number</label>
//           <Field
//             className={css.input}
//             type="number"
//             name="number"
//             id={numberId}
//           />
//           <ErrorMessage className={css.error} name="number" component="span" />
//         </div>
//         <button className={css.button} type="submit">
//           Add contact
//         </button>
//       </Form>
//     </Formik>
//   );
// }








// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { Formik, Form, Field } from 'formik';
// import { nanoid } from 'nanoid';
// import * as Yup from 'yup'; 
// import { addContact } from '../../redux/contactsSlice'; // Import your action creator
// import { FormStyled, Input, Label, Button } from './ContactForm.styled.jsx';

// const validationSchema = Yup.object({
//   name: Yup.string()
//     .min(3, 'Ну хоча б 3 літери напиши')
//     .max(50, 'Щось занадто, давай не більше 50 літер')
//     .required('Заповни це поле, будь ласочка!'),
//   number: Yup.string()
//     .min(3, 'Якось дуже мало, хоча б 3 цифри напиши')
//     .max(50, 'Щось занадто, давай не більше 50 цифр')
//     .required('Заповни це поле, будь ласочка!'),
// });

// function ContactForm() {
//   const dispatch = useDispatch();

//   return (
//     <Formik
//       initialValues={{ name: '', number: '' }}
//       validationSchema={validationSchema} 
//       onSubmit={(values, { resetForm }) => {
//         // Dispatch an action to add the contact
//         dispatch(addContact({
//           id: nanoid(), // Generate a unique ID for the contact
//           name: values.name, 
//           number: values.number
//         }));
//         resetForm();
//       }}
//     >
//      {({ errors, touched }) => (
//          <FormStyled as={Form}>
//            <Label htmlFor="name">Name:</Label>
//            <Field as={Input} type="text" name="name" />
//            {touched.name && errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          
//            <Label htmlFor="number">Number:</Label>
//            <Field as={Input} type="tel" name="number" />
//            {touched.number && errors.number && <div style={{ color: 'red' }}>{errors.number}</div>}
          
//            <Button type="submit">Add contact</Button>
//         </FormStyled>
//       )}
//     </Formik>
//   );
// }

// export default ContactForm;



// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { addContact } from '../../redux/contactsSlice'; // Убедитесь, что путь корректный
// import { FormStyled, Input, Label, Button } from './ContactForm.styled.jsx';

// const validationSchema = Yup.object({
//   name: Yup.string()
//     .min(3, 'Ну хоча б 3 літери напиши')
//     .max(50, 'Щось занадто, давай не більше 50 літер')
//     .required('Заповни це поле, будь ласочка!'),
//   number: Yup.string()
//     .min(3, 'Якось дуже мало, хоча б 3 цифри напиши')
//     .max(50, 'Щось занадто, давай не більше 50 цифр')
//     .required('Заповни це поле, будь ласочка!'),
// });

// function ContactForm() {
//   const dispatch = useDispatch();

//   return (
//     <Formik
//       initialValues={{ name: '', number: '' }}
//       validationSchema={validationSchema} 
//       onSubmit={(values, { resetForm }) => {
//         dispatch(addContact(values));
//         resetForm();
//       }}
//     >
//      {({ errors, touched }) => (
//         <FormStyled as={Form}>
//           <Label htmlFor="name">Name:</Label>
//           <Field as={Input} type="text" name="name" />
//           {touched.name && errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          
//           <Label htmlFor="number">Number:</Label>
//           <Field as={Input} type="tel" name="number" />
//           {touched.number && errors.number && <div style={{ color: 'red' }}>{errors.number}</div>}
          
//           <Button type="submit">Add contact</Button>
//         </FormStyled>
//       )}
//     </Formik>
//   );
// }

// export default ContactForm;






























// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/contactsSlice';

// // import { addContact } from '../redux/contactsSlice';

// export default function ContactForm() {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addContact(name, number));
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//         required
//       />
//       <input
//         type="text"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//         placeholder="Number"
//         required
//       />
//       <button type="submit">Add Contact</button>
//     </form>
//   );
// }


// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/contactsSlice';
// import { FormStyled, Input, Label } from './ContactForm.styled.jsx'; // Adjust the import path as needed

// export default function ContactForm() {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addContact({name, number})); // Make sure to match the structure expected by your reducer
//     setName('');
//     setNumber('');
//   };

//   return (
//     <FormStyled onSubmit={handleSubmit}>
//       <Label htmlFor="name">Name:</Label>
//       <Input
//         type="text"
//         name="name"
//         id="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//         required
//       />
      
//       <Label htmlFor="number">Number:</Label>
//       <Input
//         type="text"
//         name="number"
//         id="number"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//         placeholder="Number"
//         required
//       />
//       <button type="submit">Add Contact</button>
//     </FormStyled>
//   );
// }