import ToastTypeModel from "src/models/recoil/toast-type.model";

export default interface ToastRequestModel {
	type: ToastTypeModel,
	message: string,
}
