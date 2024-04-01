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


