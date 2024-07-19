export const getRouteArticles = () => '/';
export const getRouteProfile = (id: string = '') => `/profile/${id}`;
export const getRouteArticleDetails = (id: string) => `/article/${id}`;
export const getRouteArticleCreate = () => '/article/new';
export const getRouteArticleEdit = (id: string) => `/article/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteNotFound = () => '*';
