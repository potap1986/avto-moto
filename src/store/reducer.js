import {ActionType} from "../const";

const initialState = {
	isPopupVisible: false,
	slider: {
		slides: [
			"../image/desktop-slide1.jpg",
			"../image/desktop-slide2.jpg",
			"../image/desktop-slide3.jpg"
		],
		thumbnails: [
			"../image/nav-slide1.jpg",
			"../image/nav-slide2.jpg",
			"../image/nav-slide3.jpg"
		]
	},
	head: {
		title: "Марпех 11",
		options: {        
			engine: "бензин",
			transmission: "механика",
			power: "100 л.с.",
			volume: "1.4 л"
		},
		sale_price: "2 300 000 ₽",
		price: "2  400 000 ₽"
	},
	options: {
		transmission_type: "Роботизированная",
		power: "249",
		engine: "Бензиновый",
		type_of_drive: "Полный",
		volume: "2.4",
		torque: "370/4500",
		cylinders: "4"
	},
	reviews: [
		{
			author: "Борис Иванов",
			plus: "мощность, внешний вид",
			minus: "Слабые тормозные колодки (пришлось заменить)",
			comment: "Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.",
			rate: 3,
			time: new Date()
		},
		{
			author: "Марсель Исмагилов",
			plus: "Cтиль, комфорт, управляемость",
			minus: "Дорогой ремонт и обслуживание",
			comment: "Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.",
			rate: 3,
			time: new Date()
		},
	]
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.OPEN_POPUP:
			return {
				...state,
				isPopupVisible: action.payload
			};
		case ActionType.CLOSE_POPUP:
			return {
				...state,
				isPopupVisible:  action.payload
			};
		case ActionType.SENT_REVIEW: 
			return {
				...state,
				reviews: [...state.reviews, action.payload]
			};
		default:
			return state;
	}
}

export default reducer;