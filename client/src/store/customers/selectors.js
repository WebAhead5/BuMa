import { selector } from 'recoil';
import { customers, filterDisplay } from './atoms';

export const customresState = selector({
	key: 'customresState',
	get: ({ get }) => {
		const customersSize = get(customers).customersSize;
		return {
			customersSize
		}
	}
})

export const allCustomersDetailsState = selector({
	key: 'allCustomersDetailsState',
	get: ({ get }) => {
		const data = get(customers);
		return {
			data
		}
	}
})

export const customersNameState = selector({
	key: 'customersNameState',
	get: ({ get }) => {
		const data = get(customers).map(customer => customer.name);

		return {
			data
		}
	}
})



export const filterCustomerState = selector({
	key: 'filterCustomerState',
	get: ({ get }) => {
		const data = get(filterDisplay)


		return {
			data
		}
	}
})






