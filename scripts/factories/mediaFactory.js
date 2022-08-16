// Class that creates an image or video

import ImageFactory from "./image.js";
import VideoFactory from "./video.js";

export default class MediaFactory {
	create(data) {
		if(data.image){
			return new ImageFactory(data);
		}
		else
			return new VideoFactory(data);
	}

}
