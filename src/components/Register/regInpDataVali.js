import * as Yup from "yup";

const RegisterInpDataSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is Required")
    .min(3, "Too Short")
    .max(26, " Too Long  "),
  email: Yup.string().email("Invalid Email  ").required("email is Required"),
  phone: Yup.number()
    .required("Phone is Required")
    // .integer()
    // .min(5)
    // .max(15, "Phone no is too Long")
    // .trim()
    ,
  work: Yup.string()
    .required("Profession is Required")
    .min(3, "Profession must be 3 characters")
    .max(30, "Profession is too Long  ")
    .trim(),
  password: Yup.string()
    .required("Password is Required")
    .min(5, "Password must be 3 characters"),
  cPassword: Yup.ref("password"),
});

export { RegisterInpDataSchema };
