const pageView = ({ route, payload }) => {
  console.log('pageview', {
    route, payload
  });
}

const event = (name, payload) => {
  console.log(`Track event: ${name}`, payload);
}

export {
  pageView,
  event
}
