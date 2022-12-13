import { writable } from 'svelte/store';
// import { env } from '$env/dynamic/public';

// create writeable store from fetching data from https://api.Oneezy.io/v1/describe
export const describe = writable({}, set => {
  // fetch('https://api.Oneezy.io/v1/describe')
  fetch('https://api-dev.Oneezy.io/v1/describe')
  // fetch(env.PUBLIC_APIURL + '/describe')
    .then(response => response.json())
    .then(data => set(data.data));
})