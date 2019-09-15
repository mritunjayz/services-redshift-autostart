# services-redshift-autostart

#### nodejs application example to start `Redshift` and other `cmd` as background services without `forever and PM2` like packages

<hr>

#### \* steps to try

```
 1. mkdir /var/www/autoRedshif

 2.  touch  /var/www/autoRedshif/redshift.js

 // copy redshit.js file to /var/www/autoRedshif/redshift.js

 3. touch /etc/systemd/system/autoRedshift.service

 // copy autoRedshift.service file to /etc/systemd/system/autoRedshift.service

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
