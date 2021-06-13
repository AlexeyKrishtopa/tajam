import lightGallery from 'lightgallery'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

lightGallery(document.getElementById('our-works__gallery'), {
  speed: 500,
  mode: 'fade',
  pager: true,
  selector: '.our-works__link',
})
