enum VisibilityFilter {
  All,
  Active,
  Completed
}

export function mapLocationToFilter(): VisibilityFilter {

  switch (window.location.hash) {
    case '#/active':
      return VisibilityFilter.Active;
    case '#/completed':
      return VisibilityFilter.Completed;
    default:
      return VisibilityFilter.All;
  }
}

export default VisibilityFilter;
