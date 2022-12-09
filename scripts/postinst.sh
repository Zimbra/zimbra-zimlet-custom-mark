#!/bin/bash
echo "*** Configuring zimbra-zimlet-mail-support ***"
echo "*** Checking if zimbra-zimlet-mail-support zimlet is installed. ***"
su - zimbra -c "zmmailboxdctl status"
if [ $? -ne 0 ]; then
   echo "*** Mailbox is not running... ***"
   echo "*** Follow the steps below as zimbra user ignore if installing through install.sh .. ***"
   echo "*** Install the zimbra-zimlet-mail-support zimlet. ***"
   echo "*** zmzimletctl deploy /opt/zimbra/zimlets-network/zimbra-zimlet-mail-support.zip ***"
   echo "*** zmprov fc zimlet ***"
else
   echo "*** Deploying zimbra-zimlet-mail-supportzimlet ***"
   su - zimbra -c  "zmzimletctl deploy /opt/zimbra/zimlets-network/zimbra-zimlet-mail-support.zip"
   su - zimbra -c  "zmprov fc zimlet"
fi
echo "*** zimbra-zimlet-mail-support Installation Completed. ***"
echo "*** Restart the mailbox service as zimbra user. Run ***"
echo "*** su - zimbra ***"
echo "*** zmmailboxdctl restart ***"
