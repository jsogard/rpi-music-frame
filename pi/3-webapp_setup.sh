sudo apt-get update
sudo apt-get upgrade
sudo apt-get install apache2 mysql-server libapache2-mod-auth-mysql php mailutils ssmtp php-mysql
sudo mysql_install_db
sudo service apache2 restart
sudo chown -R pi /var/www
mkfifo /tmp/cmd
chmod 777 /tmp/cmd
sudo cat email_conf > /etc/ssmtp/ssmtp.conf
echo "Site now visible at $(hostname -I).\nPut files in /var/www/html/" | mail -s "Raspberry Pi Webapp Setup Complete" <emailaddr>