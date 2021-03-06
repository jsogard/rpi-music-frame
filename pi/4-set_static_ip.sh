echo "interface wlan0" >> /etc/dhcpcd.conf
echo "static ip_address=192.168.1.24/24" >> /etc/dhcpcd.conf
echo "static routers=$(ip route | grep default | awk '{print $3}')" >> /etc/dhcpcd.conf
echo "static domain_name_servers=$(sed -n 3p /etc/resolv.conf | awk '{print $2}')" >> /etc/dhcpcd.conf
echo "Connected to Wifi at " $(hostname -I) | mail -s "Raspberry Pi Wifi Connect" <emailaddr>