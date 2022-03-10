import ToastTypeModel from "./toast-type.model";

export default interface ToastRequestModel {
	type: ToastTypeModel,
	message: string,
}
