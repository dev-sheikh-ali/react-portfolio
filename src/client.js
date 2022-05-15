import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'kaulpd8j',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skhDE4oqs1m5SA2NQQnwalx9O9KskWy2EeTF5iXOSYdh7eUaeyFPUxDXjYLCHpC0KtGitYZ9JNVK2TbmbLFa2zPFXI0YnI6URGsUmXomQHqUrmZB2o1uJhp3T0MjooG0Xip2tPaNwUI9JjvlWkCtwS19D7y4OBoHuGJtYLHWMeiHxMMAguzM',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
