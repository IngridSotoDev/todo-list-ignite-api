export function buildRoutePath(path) {
  const routeParametersReges = /:([a-zA-Z]+)/g;
  const pathWithParams = path.replaceAll(
    routeParametersReges,
    "(?<$1>[a-z0-9-_]+)"
  );

  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`);

  return pathRegex;
}
