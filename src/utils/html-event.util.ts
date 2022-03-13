export default class HtmlEventUtil {
	public static inputEnterEventHandler(event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>, callback: () => any) {
		if (event.key.toUpperCase() === 'ENTER') {
			callback();
		}
	}
}