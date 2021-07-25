import {
  pageView,
  event
} from '@/tracking.js'

export default function ({ route }) {
  const { name, path, query, params } = route;
  return pageView({
    name, path, query, params
  });
}
