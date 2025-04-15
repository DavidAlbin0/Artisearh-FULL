import React, { useState } from "react";
import Layout from "../../components/layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useQuery, useMutation, gql } from "@apollo/client";

//Obtener todos los post
const QUERY = gql`
query obtenerPostAll {
  obtenerPostAll {
    id
    artista
    imagen
    descripcion
    ubicacion
  }
}
` 
// Componente para inputs reutilizables
const Campo = ({
  id,
  label,
  type = "text",
  placeholder,
  values,
  handleChange,
  error,
  touched,
}) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      {id === "genero" ? (
        <select
          id={id}
          name={id}
          value={values}
          onChange={handleChange}
          className="bg-white shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Selecciona</option>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>
      ) : (
        <input
          className="bg-white shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={values}
          onChange={handleChange}
        />
      )}

      {touched && error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

const FormularioUsuario = ({ setTipo, formik }) => {
  return (
    <>
      <Campo
        id="nombre"
        label="Nombre"
        placeholder="Nombre Usuario"
        values={formik.values.nombre}
        handleChange={formik.handleChange}
        error={formik.errors.nombre}
        touched={formik.touched.nombre}
      />
      <Campo
        id="apellidoP"
        label="Apellido Paterno"
        placeholder="Apellido Paterno"
        values={formik.values.apellidoP}
        handleChange={formik.handleChange}
        error={formik.errors.apellidoP}
        touched={formik.touched.apellidoP}
      />
      <Campo
        id="apellidoM"
        label="Apellido Materno"
        placeholder="Apellido Materno"
        values={formik.values.apellidoM}
        handleChange={formik.handleChange}
        error={formik.errors.apellidoM}
        touched={formik.touched.apellidoM}
      />
      <Campo
        id="telefono"
        label="Teléfono"
        placeholder="Teléfono"
        values={formik.values.telefono}
        handleChange={formik.handleChange}
        error={formik.errors.telefono}
        touched={formik.touched.telefono}
      />
      <Campo
        id="correo"
        label="Correo"
        placeholder="Correo"
        values={formik.values.correo}
        handleChange={formik.handleChange}
        error={formik.errors.correo}
        touched={formik.touched.correo}
      />
      <Campo
        id="genero"
        label="Género"
        values={formik.values.genero}
        handleChange={formik.handleChange}
        error={formik.errors.genero}
        touched={formik.touched.genero}
      />
      <Campo
        id="contrasena"
        label="Contraseña"
        placeholder="Contraseña"
        type="password"
        values={formik.values.contrasena}
        handleChange={formik.handleChange}
        error={formik.errors.contrasena}
        touched={formik.touched.contrasena}
      />

      <BotonesFormulario
        volver={() => {
          formik.resetForm();
          setTipo("");
        }}
      />
    </>
  );
};

const FormularioArtista = ({ setTipo, formikArt }) => {
  return (
    <>
      <Campo
        id="nombre"
        label="Nombre Artista"
        placeholder="Nombre Artista"
        values={formikArt.values.nombre}
        handleChange={formikArt.handleChange}
        error={formikArt.errors.nombre}
        touched={formikArt.touched.nombre}
      />
      <Campo
        id="apellidoP"
        label="Apellido Paterno"
        placeholder="Apellido Paterno"
        values={formikArt.values.apellidoP}
        handleChange={formikArt.handleChange}
        error={formikArt.errors.apellidoP}
        touched={formikArt.touched.apellidoP}
      />
      <Campo
        id="apellidoM"
        label="Apellido Materno"
        placeholder="Apellido Materno"
        values={formikArt.values.apellidoM}
        handleChange={formikArt.handleChange}
        error={formikArt.errors.apellidoM}
        touched={formikArt.touched.apellidoM}
      />
      <Campo
        id="telefono"
        label="Teléfono"
        placeholder="Teléfono"
        values={formikArt.values.telefono}
        handleChange={formikArt.handleChange}
        error={formikArt.errors.telefono}
        touched={formikArt.touched.telefono}
      />
      <Campo
        id="correo"
        label="Correo"
        placeholder="Correo"
        values={formikArt.values.correo}
        handleChange={formikArt.handleChange}
        error={formikArt.errors.correo}
        touched={formikArt.touched.correo}
      />
      <Campo
        id="genero"
        label="Género"
        values={formikArt.values.genero}
        handleChange={formikArt.handleChange}
        error={formikArt.errors.genero}
        touched={formikArt.touched.genero}
      />
      <Campo
        id="contrasena"
        label="Contraseña"
        placeholder="Contraseña"
        type="password"
        values={formikArt.values.contrasena}
        handleChange={formikArt.handleChange}
        error={formikArt.errors.contrasena}
        touched={formikArt.touched.contrasena}
      />
      <Campo
        id="descripcion"
        label="Descripcion"
        placeholder="Descripcion"
        values={formikArt.values.descripcion}
        handleChange={formikArt.handleChange}
        error={formikArt.errors.descripcion}
        touched={formikArt.touched.descripcion}
      />
        <Campo
        id="especialidad"
        label="Especialidad"
        placeholder="Especialidad"
        values={formikArt.values.especialidad}
        handleChange={formikArt.handleChange}
        error={formikArt.errors.especialidad}
        touched={formikArt.touched.especialidad}
      />
      <BotonesFormulario
        volver={() => {
          formikArt.resetForm();
          setTipo("");
        }}
      />
    </>
  );
};

const BotonesFormulario = ({ volver }) => (
  <>
    <input
      type="submit"
      className="bg-orange-600 w-full mt-5 p-2 text-white uppercase hover:bg-orange-800"
      value="Crear cuenta"
    />
    <button
      type="button"
      onClick={volver}
      className="w-full mt-2 p-2 text-gray-600 hover:text-gray-900 underline text-sm"
    >
      ← Regresar
    </button>
  </>
);
const NuevaCuenta = () => {
  const [tipo, setTipo] = useState("");

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellidoP: "",
      apellidoM: "",
      genero: "",
      correo: "",
      telefono: "",
      contrasena: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es obligatorio"),
      apellidoP: Yup.string().required("El apellido Paterno es obligatorio"),
      apellidoM: Yup.string().required("El apellido Materno es obligatorio"),
      genero: Yup.string().required("El género es obligatorio"),
      correo: Yup.string()
        .email("Correo inválido")
        .required("El correo es obligatorio"),
      telefono: Yup.string().required("El teléfono es obligatorio"),
      contrasena: Yup.string()
        .required("La contraseña es obligatoria")
        .min(9, "La contraseña debe tener mínimo 9 caracteres")
        .matches(
          /[A-Z]/,
          "La contraseña debe tener al menos una letra mayúscula"
        )
        .matches(
          /[a-z]/,
          "La contraseña debe tener al menos una letra minúscula"
        )
        .matches(/[0-9]/, "La contraseña debe tener al menos un número")
        .matches(
          /[\W_]/,
          "La contraseña debe tener al menos un caracter especial"
        ),
    }),
    onSubmit: (valores) => {
      console.log("ENVIANDO USUARIO:");
      console.log(valores);
    },
  });

  const formikArt = useFormik({
    initialValues: {
      nombre: "",
      apellidoP: "",
      apellidoM: "",
      genero: "",
      correo: "",
      telefono: "",
      contrasena: "",
      descripcion: "",
      especialidad: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es obligatorio"),
      apellidoP: Yup.string().required("El apellido Paterno es obligatorio"),
      apellidoM: Yup.string().required("El apellido Materno es obligatorio"),
      genero: Yup.string().required("El género es obligatorio"),
      correo: Yup.string()
        .email("Correo inválido")
        .required("El correo es obligatorio"),
      telefono: Yup.string().required("El teléfono es obligatorio"),
      contrasena: Yup.string()
        .required("La contraseña es obligatoria")
        .min(9, "La contraseña debe tener mínimo 9 caracteres")
        .matches(
          /[A-Z]/,
          "La contraseña debe tener al menos una letra mayúscula"
        )
        .matches(
          /[a-z]/,
          "La contraseña debe tener al menos una letra minúscula"
        )
        .matches(/[0-9]/, "La contraseña debe tener al menos un número")
        .matches(
          /[\W_]/,
          "La contraseña debe tener al menos un caracter especial"
        ),
      descripcion: Yup.string().required("La descripción es obligatoria"),
      especialidad: Yup.string().required("La especialidad es obligatoria"),
    }),
    onSubmit: (valores) => {
      console.log("ENVIANDO ARTISTA:");
      console.log(valores);
    },
  });

  return (
    <Layout>
      <h1 className="text-center font-bold text-black">Crear Nueva Cuenta</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-sm">
          {tipo === "" && (
            <div className="bg-white rounded shadow-md px-8 py-6 mb-4 text-center">
              <p className="mb-4 text-gray-700 font-semibold">
                ¿Qué deseas hacer?
              </p>
              <button
                onClick={() => setTipo("usuario")}
                className="bg-blue-600 w-full mb-3 py-2 text-white rounded hover:bg-blue-800"
              >
                Registrar Usuario
              </button>
              <button
                onClick={() => setTipo("artista")}
                className="bg-green-600 w-full py-2 text-white rounded hover:bg-green-800"
              >
                Registrar Artista
              </button>
            </div>
          )}

          {tipo === "usuario" && (
            <form onSubmit={formik.handleSubmit}>
              <FormularioUsuario setTipo={setTipo} formik={formik} />
            </form>
          )}

          {tipo === "artista" && (
            <form onSubmit={formikArt.handleSubmit}>
              <FormularioArtista setTipo={setTipo} formikArt={formikArt} />
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default NuevaCuenta;
