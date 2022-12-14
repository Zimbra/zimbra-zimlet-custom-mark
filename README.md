# zimbra-zimlet-mail-sender

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm start

# build for production with minification
npm run build

# package the zimlet deployment to a zimbra server
npm run package
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/zimbra/zimlet-cli/blob/master/README.md).

## Data loading from config_template.xml

Zimlet reads the config at runtime that is been stored in config_template.xml, data will be available through soap call GetInfoResponse ,this can be fetched using hook useAccountInfo or hoc withAccountInfo.

for more details about how to add details in config_template.xml and change data in config_template.xml
refer https://github.com/Zimbra/zimlet-cli/wiki/Store-configurations-of-zimlet-using-Zimlet-Config

By default this zimlet uses dummy image as privacy protector, this can be changed to any other url at deployment time by updating config_template.xml file as shown above.
