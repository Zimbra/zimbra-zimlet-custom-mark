import { createElement } from 'preact';
import { Text } from 'preact-i18n';
import { withIntl } from '../../enhancers';
import { Popover } from '@zimbra-client/blocks';
import style from './style.less';
import { USER_FOLDER_IDS } from '../../constants';

const Sender = props => {
  const { emailAddresses, mailItem, viewType } = props;

  const recipient = (
    <span>
      <img
        src="https://cdn.pixabay.com/photo/2012/04/13/12/23/flag-32177__480.png"
        style="width:15px; height:15px; margin-right:5px"
      />

      {emailAddresses.join(', ')}
    </span>
  );
  return (
    viewType === 'message' &&
    (mailItem.folderId !== USER_FOLDER_IDS.DRAFTS.toString() &&
    mailItem.folderId !== USER_FOLDER_IDS.SENT.toString() ? (
      <Popover placement="bottom" hoverDuration={1000} target={recipient}>
        <ul class={style.customCard}>
          <li>
            <Text id={'zimbra-zimlet-mail-sender.country'} />
          </li>
          <li>
            <Text id={'zimbra-zimlet-mail-sender.detail'} />
          </li>
        </ul>
      </Popover>
    ) : (
      emailAddresses.join(', ')
    ))
  );
};

export const MailSender = withIntl()(Sender);
