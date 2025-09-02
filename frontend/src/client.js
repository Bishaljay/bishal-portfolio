import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'htdxze1f',
  dataset: 'production',
  apiVersion: '2025-08-31', // current date recommended
  useCdn: true,              // use CDN for public content
  token: 'skUvJnev2KlDP4dVYK2wwjLU0xOdetcmIyzXRcWgAmM4fmddwC2ibhTNZpT6ShoCwfRsFJpN2ogTifnqZWzFKaEoLmGq3V8UILkw1FyWftvqvy1PBppalwDPKawX05krhPs8gLIAKtiHU8CevjhVlSep5PrqjmjsmDaSyqnp6NeBwFt8sXt0', // single token key
});

// Image URL builder
const builder = imageUrlBuilder(client);

export const urlFor = (source) => (source ? builder.image(source) : '/fallback.png');
