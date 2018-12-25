<template>
  <div>
    <h1><a href="https://github.com/fukuiretu/nuxt-user-agent/">nuxt-user-agent</a></h1>
    <table>
      <tr><td>$ua.deviceType()</td><td>{{ $ua.deviceType() }}</td></tr>
      <tr><td>$ua.os()</td><td>{{ $ua.os() }}</td></tr>
      <tr><td>$ua.osVersion()</td><td>{{ $ua.osVersion() }}</td></tr>
      <tr><td>$ua.browser()</td><td>{{ $ua.browser() }}</td></tr>
      <tr><td>$ua.browserVersion()</td><td>{{ $ua.browserVersion() }}</td></tr>
      <tr><td>$ua.browserVendor()</td><td>{{ $ua.browserVendor() }}</td></tr>
      <tr><td>$ua.isFromIphone()</td><td>{{ $ua.isFromIphone() }}</td></tr>
      <tr><td>$ua.isFromIpad()</td><td>{{ $ua.isFromIpad() }}</td></tr>
      <tr><td>$ua.isFromIpod()</td><td>{{ $ua.isFromIpod() }}</td></tr>
      <tr><td>$ua.isFromIos()</td><td>{{ $ua.isFromIos() }}</td></tr>
      <tr><td>$ua.isFromAndroid()</td><td>{{ $ua.isFromAndroid() }}</td></tr>
      <tr><td>$ua.isFromAndroidTablet()</td><td>{{ $ua.isFromAndroidTablet() }}</td></tr>
      <tr><td>$ua.isFromWindowsPhone()</td><td>{{ $ua.isFromWindowsPhone() }}</td></tr>
      <tr><td>$ua.isFromPc()</td><td>{{ $ua.isFromPc() }}</td></tr>
      <tr><td>$ua.isFromSmartphone()</td><td>{{ $ua.isFromSmartphone() }}</td></tr>
      <tr><td>$ua.isFromMobilephone()</td><td>{{ $ua.isFromMobilephone() }}</td></tr>
      <tr><td>$ua.isFromAppliance()</td><td>{{ $ua.isFromAppliance() }}</td></tr>
      <tr><td>$ua.isFromCrawler()</td><td>{{ $ua.isFromCrawler() }}</td></tr>
      <tr><td>$ua.isFromTablet()</td><td>{{ $ua.isFromTablet() }}</td></tr>
    </table>
  </div>
</template>
