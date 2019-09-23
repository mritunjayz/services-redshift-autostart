# services-redshift-autostart

#### nodejs application example to start `Redshift` and other `cmd` as background services without `forever and PM2` like packages

<hr>

#### \* steps to try

```
 1. node index.js

```

#### \* cmd to start the service

```
// to start
service autoRedshift start

// to enable auto exceStart the service after boot
systemctl enable autoRedshift

// to stop
service autoRedshift stop

```
