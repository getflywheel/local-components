export default class ObjectUtils {
	static omitPropsInObject(obj, omitObj, clone) {
		// clone if necessary
		obj = clone ? {...obj} : obj;
		// delete omitted keys
		Object.keys(InputSearch.propTypes).forEach(e => delete obj[e]);
		return obj;
	}
}
