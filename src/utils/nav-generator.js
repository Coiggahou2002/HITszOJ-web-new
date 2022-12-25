export function generateNavMenu(routes) {
  let navMenuList = [];
  routes.forEach(route => {
    if (route.meta && route.meta.nav) {
      navMenuList.push({
        name: route.meta.nav.name,
        hasSubMenu: false,
        route: route,
        bicon: route.meta.nav.bicon,
      })
    } else {
      if (route.children) {
        navMenuList = navMenuList.concat(generateNavMenu(route.children));
      }
    }
  })
  return navMenuList;
}