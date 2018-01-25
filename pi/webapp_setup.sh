sudo apt-get update
sudo apt-get upgrade
sudo apt-get install apache2 mysql-server libapache2-mod-auth-mysql php
sudo mysql_install_db
sudo service apache2 restart
sudo chown -R pi /var/www
echo 'Site now visible at $(hostname -I)'
echo 'Put files into /var/www/'