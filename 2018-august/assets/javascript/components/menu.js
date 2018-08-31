(function() {
  const body = document.querySelector('body');
  const menu = document.querySelector('.menu');
  const openMenuClass = 'menu--open';
  const disableActiveMenuClass = 'menu--disable-active-menu-item';

  const onMenuClick = function() {
    if (body.classList.contains(openMenuClass)) {
      body.classList.remove(openMenuClass);
    } else {
      body.classList.add(openMenuClass);
    }
  };

  const onMenuListItemMouseEnter = function() {
    body.classList.add(disableActiveMenuClass);
  };

  const onMenuListItemMouseLeave = function() {
    body.classList.remove(disableActiveMenuClass);
  };

  // Add event listeners

  menu.addEventListener('click', onMenuClick);

  menu.querySelectorAll('.menu__list-tem').forEach(function(menuLink) {
    menuLink.addEventListener('mouseenter', onMenuListItemMouseEnter);
    menuLink.addEventListener('mouseleave', onMenuListItemMouseLeave);
  });
})();
