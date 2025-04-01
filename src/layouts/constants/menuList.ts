import { Logout, Home, Group, MenuBook } from '@mui/icons-material'
import { MenuItem, MenuList } from '../types/MenuList'

export const menuList: MenuList = {
  top: [
    { label: 'Home', path: '/', Icon: Home, activeOnly: false },
    { label: 'Users', path: '/Users', Icon: Group, adminOnly: false, activeOnly: false},
    { label: 'Books', path: '/books', Icon: MenuBook, activeOnly: false },
  ],
  bottom: [
    { label: 'Log Out', path: '/logout', Icon: Logout },
  ],
}

export const menuListMap: Record<string, MenuItem> = menuList.top.reduce((acc, item) => ({ ...acc, [item.path]: item }), {})