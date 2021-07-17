import './index.css';
import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form';

interface submitData {
  firstName: string,
  emailUser: string
}

function Form() {

  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    register('firstName');
    register('emailUser', {required: true});
  }, [register]);

  const onSubmit = (data: submitData) => {
    const repositoryName = data.firstName;
    const repositoryEmail = data.emailUser;
    localStorage.setItem('repositoryName', JSON.stringify(repositoryName));
    localStorage.setItem('repositoryEmail', JSON.stringify(repositoryEmail));
  }
  return (
    <div className="containerForm">
      <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">
            Name:
            <input name="firstName" id="name" onChange={e => setValue('firstName', e.target.value)}/>
          </label>
          <label htmlFor="email">
            Email:
            <input name="emailUser" id="email" onChange={e => setValue('emailUser', e.target.value)}/>
          </label>
          <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Form
