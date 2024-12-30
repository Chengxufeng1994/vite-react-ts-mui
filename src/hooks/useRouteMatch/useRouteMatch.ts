import { matchPath, useLocation } from 'react-router';
import _map from 'lodash-es/map';

import type { PathMatch } from 'react-router';

/**
 * Custom hook to find the first matching route pattern from an array.
 * @param patterns Array of route patterns to match against the current pathname.
 * @returns The first matching route pattern or null if no match is found.
 */
const useRouteMatch = (patterns: readonly string[]): PathMatch | null => {
  // Retrieve the current pathname using `useLocation`.
  const { pathname } = useLocation();

  return (
    _map(patterns, pattern => {
      const possibleMatch = matchPath(pattern, pathname);
      return possibleMatch;
    }).find(possibleMatch => possibleMatch !== null) || null
  );
};

export default useRouteMatch;
