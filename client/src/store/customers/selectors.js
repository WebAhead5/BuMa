import { selector } from 'recoil';
import { customers } from './atoms';

export const customresState = selector({
	key: 'customresState',
	get: ({get}) => {
		const customersSize =  get(customers).customersSize;
		return {
			customersSize
		}
	}
})