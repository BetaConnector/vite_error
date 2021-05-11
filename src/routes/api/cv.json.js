import CVContent from '$lib/cv.yaml';

export async function get() {
	
	try {
		return {
			body: {
				success: true,
				cv: CVContent
			}
		};
	} catch (e) {
		console.log(e);
	}

	return {
		body: {
			success: false,
			cv: ''
		}
	};
}
