import experiments from '~/experiments';
import cookie from 'js-cookie';
import cartesian from 'cartesian-product';

const randomInt = max => Math.floor(Math.random() * max);

const combinations = cartesian(experiments.map(exp => exp.variants));
let assignedCombination = cookie.get('AB') && JSON.parse(cookie.get('AB'));

if (!assignedCombination) {
  assignedCombination = combinations[randomInt(combinations.length - 1)];
  cookie.set('AB', assignedCombination);
}

const getExperiments = experiments.reduce((acc, exp, i) => ({
  ...acc,
  [exp.id]: assignedCombination[i]
}), {});

export default ({ app }, inject) => {
  inject('experiments', getExperiments)
}
