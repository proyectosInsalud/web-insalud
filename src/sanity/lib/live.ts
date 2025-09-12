
import {defineLive} from 'next-sanity/live';
import {client} from './client';
import {apiVersion} from '../env';

const token = process.env.SANITY_VIEWER_TOKEN; // opcional

export const {sanityFetch, SanityLive} = defineLive({
  client: client.withConfig({
    apiVersion,
    perspective: 'published',
    useCdn: true,
  }),
  // activa drafts en preview si configuraste token:
  serverToken: token,
  // browserToken: token, // opcional; solo expuesto en Draft Mode
});
