// TYPES
/**
* Sets the required props for the component.
*/
type TBreadcrumbsProps = IBreadcrumbs;

// INTERFACES
/**
* Sets the default required props for the component.
*/
interface IBreadcrumbs {}

/**
* Sets the required props for the breadcrumb items.
*/
interface IBreadcrumb {
  /**
   * The string value used to render the breadcrumb label text.
   */
  label: string;
  /**
   * The route the user will be redirected to once clicked.
   */
  route: string;
}

// EXPORTS
export type {
  IBreadcrumb,
  TBreadcrumbsProps
};
