import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormFormik = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
    },
    onSubmit: (datos) => {
      console.log("el formulario se envio");
      console.log(datos);
      //conecto la api
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es requerido")
        .min(3, "el campo debe tener al menos 3 caracteres"),
      email: Yup.string()
        .email("no corresponde a un email valido")
        .required("Este campo es requerido"),
      password: Yup.string()
        .required("Este campo es requerido")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "la contaseña debe tener,1 mayuscula, 1 minuscula , 1 numero, 1 caracter especial , min 6 , max 15 caracteres",
        }),
      repeatPassword: Yup.string()
        .required("Este campo es requerido")
        .oneOf([Yup.ref("password")], "el password no coincide"),
    }),
  });

  return (
    <div style={{ padding: "50px" }}>
      <h2>este es el formulario</h2>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Password"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />
        <TextField
          label="Repeat Password"
          variant="outlined"
          name="repeatPassword"
          onChange={handleChange}
          error={errors.repeatPassword ? true : false}
          helperText={errors.repeatPassword}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default FormFormik;
