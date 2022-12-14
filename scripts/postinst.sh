#!/bin/bash
echo "*** Configuring zimbra-zimlet-mail-sender ***"
echo "*** Checking if zimbra-zimlet-mail-sender zimlet is installed. ***"
su - zimbra -c "zmmailboxdctl status"
if [ $? -ne 0 ]; then
   echo "*** Mailbox is not running... ***"
   echo "*** Follow the steps below as zimbra user ignore if installing through install.sh .. ***"
   echo "*** Install the zimbra-zimlet-mail-sender zimlet. ***"
   echo "*** zmzimletctl deploy /opt/zimbra/zimlets-network/zimbra-zimlet-mail-sender.zip ***"
   echo "*** zmprov fc zimlet ***"
else
   echo "*** Deploying zimbra-zimlet-mail-sender zimlet ***"
   su - zimbra -c  "zmzimletctl deploy /opt/zimbra/zimlets-network/zimbra-zimlet-mail-sender.zip"
   su - zimbra -c  "zmprov fc zimlet"
fi
echo "*** zimbra-zimlet-mail-sender Installation Completed. ***"
echo "*** Restart the mailbox service as zimbra user. Run ***"
echo "*** su - zimbra ***"
echo "*** zmmailboxdctl restart ***"
