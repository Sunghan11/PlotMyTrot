import * as APIUtil from '../util/route_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const REMOVE_ROUTE = "REMOVE_ROUTE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveRoutes = (routes) => ({
    type: RECEIVE_ROUTES,
    routes
});

export const receiveRoute = (route) => ({
    type: RECEIVE_ROUTE,
    route
});

export const removeRoute = (routeId) => ({
    type: REMOVE_ROUTE,
    routeId
});

export const receiveRouteErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const fetchRoutes = () => (
    APIUtil.fetchRoutes()
    .then( routes => dispatch(receiveRoutes(routes))
    ), err => (dispatch(receiveRouteErrors(err.responseJSON)))
);

export const fetchRoute = (routeId) => (
    APIUtil.fetchRoute(routeId)
    .then(route => dispatch(receiveRoute(route))
    ), err => dispatch(receiveRouteErrors(err.responseJSON))
);

export const createRoute = (route) => (
    APIUtil.createRoute(route)
    .then(route => dispatch(receiveRoute(route))
    ), err => dispatch(receiveRouteErrors(err.responseJSON))
);

export const updateRoute = (route) => (
    APIUtil.updateRoute(route)
    .then(route => dispatch(receiveRoute(route))
    ), err => dispatch(receiveRouteErrors(err.responseJSON))
);

export const deleteRoute = (routeId) => (
    APIUtil.deleteRoute(routeId)
    .then(() => dispatch(removeRoute(routeId))
    ), err => dispatch(receiveRouteErrors(err.responseJSON))
);
