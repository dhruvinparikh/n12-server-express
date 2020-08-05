
const convict = require("convict");

const contractSchema = convict({
  MailGunAPIKey: {
    doc: "mailgun api key",
    format: "String",
    default: null,
    env: "MAIL_GUN_API_KEY",
  },
  MailGunDomain: {
    doc: "mailgun domain",
    format: "String",
    default: null,
    env: "MAIL_GUN_DOMAIN",
  },
  EmailFrom: {
    doc: "Email sender name and address",
    format: "String",
    default: null,
    env: "EMAIL_FROM",
  },
  ConfirmationEmailTemplate: {
    doc: "template id of confirmation email in mailgun",
    format: "String",
    default: null,
    env: "CONFIRMATION_EMAIL_TEMPLATE"
  }
});

const getMailGunAPIKey = () => {
  try {
    const result = contractSchema.get('MailGunAPIKey');
    return result;
  } catch (error) {
    throw Error("Missing APIKey");
  }
};

const getMailGunDomain = () => {
  try {
    const result = contractSchema.get('MailGunDomain');
    return result;
  } catch (error) {
    throw Error("Missing domain");
  }
};

const getConfirmationEmailTemplate = () => {
  try {
    const result = contractSchema.get('ConfirmationEmailTemplate');
    return result;
  } catch (error) {
    throw Error("Missing ConfirmationEmailTemplate");
  }
};


const getEmailFrom = () => {
  try {
    const result = contractSchema.get('EmailFrom');
    return result;
  } catch (error) {
    throw Error("Missing EmailFrom");
  }
};

module.exports = {
  ...contractSchema,
  getMailGunAPIKey,
  getMailGunDomain,
  getEmailFrom,
  getConfirmationEmailTemplate
};
