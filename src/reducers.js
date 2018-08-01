import { combineReducers } from 'redux';

/**
 * Array of registered modules
 */
const modules = [];

const registerModule = module => modules.push(module);

/**
 * Iterate over all the modules, combine their child reducers
 * and than combine module level reducers
 * @param {*} modules
 */
const combineModuleLevelReducers = modules => {
    const moduleLevelReducers = {};

    modules.forEach(module => {
        moduleLevelReducers[module.name] = combineReducers(module.reducers);
    });

    return combineReducers(moduleLevelReducers);
};

const getRootReducers = () => combineModuleLevelReducers(modules);

export { registerModule, getRootReducers };
