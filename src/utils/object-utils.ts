export default class ObjectUtils {
	static omitPropsInObject(obj, omitObj, clone = true) {
		obj = clone ? {...obj} : obj;
		// delete omitted keys
		Object.keys(omitObj).forEach(e => delete obj[e]);
		return obj;
	}
}
