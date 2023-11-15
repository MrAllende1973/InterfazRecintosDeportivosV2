import { defineStore } from 'pinia';
import axios from 'axios';

export const useUsersStore = defineStore('users', () => {
  const user = ref(null);

  const addUser = async (user) => {
    try {
      const response = await axios.post('/api/auth/register', {
        Nombres: user.names,
        Apellidos: user.surnames,
        Rut: user.rut,
        Correo: user.email,
        Contrasenna: user.password,
        Fecha_nac: user.dateOfBirth,
        Genero: user.genre,
        ID_rol: 1,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const authUser = async (_user) => {
    try {
      const response = await axios.post('/api/auth/login', {
        Correo: _user.email,
        Contrasenna: _user.password,
      });

      const data = response.data;

      if (data.status === 'success') {
        user.value = data.data;

        const user_data = {
          token: data.token,
          email: data.data.Correo,
        };

        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + user_data.token;

        localStorage.setItem('user_data', JSON.stringify(user_data));
      }
      return data.status;
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('user_data');
    user.value = null;
  };

  const refreshUser = async () => {
    try {
      if (!localStorage.getItem('user_data')) return;

      const user_data = JSON.parse(localStorage.getItem('user_data'));
      const bodyParameters = {
        Correo: user_data.email,
      };
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + user_data.token;

      const response = await axios.post('/api/auth/me', bodyParameters);
      const data = await response.data.data;
      user.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    user,
    addUser,
    authUser,
    refreshUser,
    logoutUser,
  };
});
