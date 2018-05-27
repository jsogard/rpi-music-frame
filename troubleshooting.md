# Troubleshooting Razz Pi

### Can not access pi via browser

###### Is it using the correct router ip address


###### Is it connected to the correct wi-fi netword with credentials

Check the networking file to see if the network is correct

> $ sudo nano /etc/wpa_supplicant/wpa_supplicant.conf

At the end you should see something like this, otherwise add it

> network={
> ssid="network_name"
> psk="password"
> }

###### Is your browser checking the correct ip

Find the IP address the pi is transmitting on by entering:
> $ hostname -I

###### Is it using a static IP that is illegal or taken

>


