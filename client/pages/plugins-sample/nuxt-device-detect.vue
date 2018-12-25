<template>
  <div>
    <h1><a href="https://github.com/dotneet/nuxt-device-detect">nuxt-device-detect</a></h1>
    <table>
      <tr><td>$device.isDesktop</td><td>{{ $device.isDesktop }}</td></tr>
      <tr><td>$device.isMobile</td><td>{{ $device.isMobile }}</td></tr>
      <tr><td>$device.isTablet</td><td>{{ $device.isTablet }}</td></tr>
      <tr><td>$device.isMobileOrTablet</td><td>{{ $device.isMobileOrTablet }}</td></tr>
    </table>
  </div>
</template>
