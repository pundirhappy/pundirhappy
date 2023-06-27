import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Example = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    file: Yup.mixed().required('File is required'),
  });

  const [formData, setFormData] = useState([]);

  const onSubmit = async (values) => {
    try {
      const file = values.file;
      const data = {
        name: values.name,
        email: values.email,
        file: file,
      };
      await axios.post('http://localhost:4007/posts', data);
      console.log('Form data saved successfully!');
      setFormData((prevData) => [...prevData, data]);
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      file: null,
    },
    validationSchema,
    onSubmit,
  });

  const FormDataTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <img src={URL.createObjectURL(data.file)} alt="Uploaded" width="100" height="100" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div>{formik.errors.name}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}</div>
        )}
      </div>
      <div>
        <label htmlFor="file">File</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={(event) => {
            formik.setFieldValue('file', event.currentTarget.files[0]);
          }}
          onBlur={formik.handleBlur}
        />
        {formik.touched.file && formik.errors.file && (
          <div>{formik.errors.file}</div>
        )}
      </div>
      <button type="submit">Submit</button>
      </form>
      <FormDataTable />
    </div>
  );
};

export default Example;









