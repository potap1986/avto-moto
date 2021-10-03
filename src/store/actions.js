import {ActionType} from "../const";

const ActionCreator = {
	openPopup: (isPopupVisible) => ({
		type: ActionType.OPEN_POPUP,
		payload: true
	}),

	closePopup: (isPopupVisible) => ({
		type: ActionType.CLOSE_POPUP,
		payload: false
	}),

	sentReview: (review) => ({
		type: ActionType.SENT_REVIEW,
		payload: review
	}),
};

export default ActionCreator;
