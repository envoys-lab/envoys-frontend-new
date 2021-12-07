interface SideBarDataItem {
  // The text with the name of the tab is hidden on mobile devices.
  // TODO: multi-language
  title: string

  // Font-awesome icon. The final class will be `fa ${icon} fa-2x`.
  icon: string

  // Specifies where the user will be redirected when navigating.
  // Automatically highlights the active tab if pathname exactly
  // matches this property. Regular expressions are not allowed.
  // See alternative property to using regular expressions.
  to?: string

  // If set to true, the tab will not be active.
  disable?: boolean

  // Used to display the active tab when pathname does not
  // match the to property.
  alternative?: string[]
}

const SideBarDataItems: SideBarDataItem[] = [
  {
    title: 'My Page',
    icon: 'fa-user',
    disable: true,
  },
  {
    title: 'Wallet',
    icon: 'fa-wallet',
    disable: true,
  },
  {
    title: 'Companies',
    icon: 'fa-building',
    to: '/companies',
    alternative: ['/company/(.*)', '/companies/(.*)'],
  },
  {
    title: 'Trade',
    icon: 'fa-sync',
    disable: true,
  },
  {
    title: 'Finance',
    icon: 'fa-coins',
    disable: true,
  },
]

export default SideBarDataItems
