{
  !navbar && (
    <div className='navbar-header d-xl-block d-none'>
      <ul className='nav navbar-nav'>
        <NavItem>
          <Link to='/' className='navbar-brand'>
            <span className='brand-logo'>
              {/* <img src={themeConfig.app.appLogoImage} alt='logo' /> */}
            </span>
            <h2 className='brand-text mb-0'>{themeConfig.app.appName}</h2>
          </Link>
        </NavItem>
      </ul>
    </div>
  )
}
