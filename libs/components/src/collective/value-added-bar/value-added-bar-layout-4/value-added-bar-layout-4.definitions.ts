// TYPES
type TValueAddedBarLayout4Props = IValueAddedBarLayout4;

// INTERFACES
interface IValueAddedBarLayout4 {
  link: {
    label: string;
    url: string;

    openInNewTab?: boolean;
  };
  message: string;

  isCondensed?: boolean;
}

// EXPORTS
export type { TValueAddedBarLayout4Props };
