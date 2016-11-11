
export default function mergeObjects(dst: Object, src: Object) : Object {
		var extended = Object
		let prop;
		for (prop in dst) {
				if (Object.prototype.hasOwnProperty.call(dst, prop)) {
						extended[prop] = dst[prop];
				}
		}
		for (prop in src) {
				if (Object.prototype.hasOwnProperty.call(src, prop)) {
						extended[prop] = src[prop];
				}
		}
		return extended;
}
