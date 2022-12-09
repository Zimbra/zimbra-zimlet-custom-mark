import { Image } from './components/image';

export default function Zimlet(context) {
	const { plugins } = context;
	const exports = {};

	exports.init = function init() {
		// The zimlet slots to load into, and what is being loaded into that slot

		plugins.register('slot::custom-mail-item-mark', Image);
	};

	return exports;
}
