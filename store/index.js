import { event } from '@/tracking';

export const state = () => ({
  eventsTracked: [],
})

export const mutations = {
  /**
   * Track event only if it was not already tracked
   */
  trackEvent(state, { name, payload }) {
    if (!state.eventsTracked.includes(name)) {
      event(name, payload);
      state.eventsTracked.push(name);
    }
  }
}