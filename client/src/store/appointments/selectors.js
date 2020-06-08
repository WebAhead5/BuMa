import { selector } from 'recoil';
import { appointments } from './atoms';

export const appointmentsState = selector({
    key: 'appointmentState',
    get: ({get }) => {
        return get(appointments)
    }
})