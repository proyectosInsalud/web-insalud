import createImageUrlBuilder from '@sanity/image-url';
import type {SanityImageSource} from '@sanity/image-url/lib/types/types';
import {dataset, projectId} from '../env';

const builder = createImageUrlBuilder({projectId, dataset});
export const urlFor = (src: SanityImageSource) => builder.image(src);
