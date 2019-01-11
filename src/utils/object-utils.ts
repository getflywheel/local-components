export default class ObjectUtils {
	static omitPropsInObject (obj: {[key: string]: any}, omitObj: {[key: string]: any}, clone: boolean = true) {
		obj = clone ? {...obj} : obj;
		// delete omitted keys
		Object.keys(omitObj).forEach(e => delete obj[e]);
		return obj;
	}
}
