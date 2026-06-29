import {SiteLink} from '../router.jsx';

export function BrandMark({compact = false}) {
  return (
    <SiteLink className={`brand-mark ${compact ? 'brand-mark--compact' : ''}`} href="/" aria-label="United Hearts home">
      <img
        src={compact ? '/images/brand-monogram.png' : '/images/brand-wordmark-transparent-crop.png'}
        alt="United Hearts"
      />
    </SiteLink>
  );
}
