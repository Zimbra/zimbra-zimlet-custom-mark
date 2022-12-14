import { MailSender } from './components/sender';

export default function Zimlet(context) {
  const { plugins } = context;
  const exports = {};

  exports.init = function init() {
    // The zimlet slots to load into, and what is being loaded into that slot

    plugins.register('slot::mail-sender', MailSender);
  };

  return exports;
}
