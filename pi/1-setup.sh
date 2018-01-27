passwd
# set password
# TODO change wifi_conf file
sudo cat wifi_conf >> /etc/wpa_supplicant/wpa_supplicant.conf
hostname -I
# record ip
sudo raspi-config
# Interfacing Options > SSH
