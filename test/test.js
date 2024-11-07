(async () => {
  const UVCControl = require('../uvc-camctl');
  const uvc = new UVCControl();
  let result = uvc.get('absolutePanTilt',console.log);
  console.log ('Done');

})();