import { defineStore } from 'pinia';
import axios from 'axios';

export const useReservationsStore = defineStore('reservations', () => {
  const addReservation = async (reservation) => {
    try {
      const response = await axios.post('/api/reservas/addReserva', {
        Usuarios_ID_usuario: reservation.user_id,
        Semana_id_semana: reservation.week_id,
        Recinto_id_recinto: reservation.enclosure_id,
        Bloque_horario_id_bloque: reservation.block_id,
        actividad: reservation.activity,
        carrera: reservation.career,
      });

      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    addReservation,
  };
});
