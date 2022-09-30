
const urlMapping = {
  url_get_mainPage: {
    mockData: 'main.json',
    realRequest: 'cgi/get.cgi?cmd=home_main'
  },
  url_get_statusSysinfo: {
    mockData: 'status_sysinfo.json',
    realRequest: 'cgi/get.cgi?cmd=sys_sysinfo'
  },
  url_set_statusSysinfo: {
    mockData: 'status_ok.json',
    realRequest: 'cgi/set.cgi?cmd=sys_sysinfo'
  },
  url_get_loginInfo: {
    mockData: 'login.json',
    realRequest: 'cgi/get.cgi?cmd=home_login'
  },
  url_set_loginAuth: {
    mockData: 'login_ok.json',
    realRequest: 'cgi/set.cgi?cmd=home_loginAuth'
  },
  url_get_loginStatus: {
    mockData: 'status_ok.json',
    realRequest: 'cgi/get.cgi?cmd=home_loginStatus'
  },
  url_set_save: {
    mockData: 'status_ok.json',
    realRequest: 'cgi/set.cgi?cmd=home_save'
  },
  url_set_logout: {
    mockData: 'status_ok.json',
    realRequest: 'cgi/set.cgi?cmd=home_logout'
  },
  url_get_wizard: {
    mockData: 'wizard.json',
    realRequest: 'cgi/get.cgi?cmd=home_wizard'
  },
  url_set_wizard: {
    mockData: 'status_ok.json',
    realRequest: 'cgi/set.cgi?cmd=home_wizard'
  },
  url_get_panelInfo: {
    mockData: 'status_panel.json',
    realRequest: 'cgi/get.cgi?cmd=panel_info'
  },
  url_get_portStatistics: {
    mockData: 'port_statistics.json',
    realRequest: 'cgi/get.cgi?cmd=port_statistics'
  },
  url_get_ipv4ArpTable: {
    mockData: 'ipv4_arp_table.json',
    realRequest: 'cgi/get.cgi?cmd=xxx'
  }
}

export function urlRequestGet(url) {
  if (process.env.NODE_ENV === 'production') {
    return urlMapping[url].realRequest
  } else {
    return urlMapping[url].mockData
  }
}

