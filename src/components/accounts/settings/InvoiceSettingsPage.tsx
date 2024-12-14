import React from 'react';

const InvoiceSettingsPage: React.FC = () => {
  return (
    <div>
      <iframe
        src="https://invoice.stripe.com/i/acct_1PyVRxJlIvt55eMl/test_YWNjdF8xUHlWUnhKbEl2dDU1ZU1sLF9ST2xxanpvT2dEYlVtem43bURxRVN1Q3dFWnZYV2JJLDEyNDczNDkzMg0200zy6B8tey?s=db"
        width="100%"
        height="500px"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default InvoiceSettingsPage;
