export default class StringUtils {
	public static hasText(str: string): boolean {
		str = str.trim()
		return !(typeof str === 'undefined' || str == null || str === '') && str.length > 0;
	}
}
