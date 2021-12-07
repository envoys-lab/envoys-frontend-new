import React from 'react'
import SideBarDesktop from './SideBarDesktop'
import SideBarMini from './SideBarMini'
import SideBarHidden from './SideBarHidden'
import useScreenWidth from 'hooks/useScreenWidth'

const SideBar: React.FC<{ active: boolean; setActive: React.Dispatch<React.SetStateAction<boolean>> }> = ({
  active,
  setActive,
}) => {
  const width = useScreenWidth()

  return (
    <>
      {width >= 900 ? (
        <SideBarDesktop />
      ) : width > 500 ? (
        <SideBarMini />
      ) : (
        <SideBarHidden active={active} setActive={setActive} />
      )}
    </>
  )
}

export default SideBar
