import React from 'react';

const InvoiceSettingsPage: React.FC = () => {
  return (
    <div>
      <iframe
        srcDoc="
<script src='https://js.stripe.com/v3/'></script>
<script type='text/javascript'>
window.onload = function(){
  var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
  document.getElementById('display').textContent = window.location.href;
}
</script>
<p id='display'></p>
"
      ></iframe>
    </div>
  );
};

export default InvoiceSettingsPage;
